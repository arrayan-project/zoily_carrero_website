/**
 * Script para redimensionar imágenes a diferentes anchos y calidad alta usando Sharp.
 * Lee rutas y anchos desde un archivo Excel y genera versiones webp optimizadas en la carpeta de salida.
 *
 * @file resize-images-quality.cjs
 */
const fs    = require("fs");
const path  = require("path");
const sharp = require("sharp");
const XLSX  = require("xlsx");

// 1) Ruta al Excel con anchos y rutas
const EXCEL_PATH = path.join(__dirname, "ImagesSizes.xlsx");

// 2) Carpeta pública donde estén las imágenes originales
const PUBLIC_DIR = path.join(__dirname, "..", "public");

// 3) Carpeta de salida para las redimensiones (calidad alta)
const RESIZED_DIR = path.join(
  __dirname,
  "..",
  "src",
  "assets",
  "images",
  "resized-quality"
);
if (!fs.existsSync(RESIZED_DIR)) {
  fs.mkdirSync(RESIZED_DIR, { recursive: true });
}

// 4) Columnas (0-based) en tu Excel que contienen los anchos deseados
const WIDTH_COLUMNS = [4, 6, 8, 10, 12, 14, 16];

// 5) Leer el workbook y sus hojas
const workbook   = XLSX.readFile(EXCEL_PATH);
const sheetNames = workbook.SheetNames;

// 6) Recopilar tareas ignorando cabeceras y filas sin ruta válida
const tasks = [];
for (const sheetName of sheetNames) {
  const rows = XLSX.utils
    .sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: null })
    .slice(2); // saltamos 2 filas de cabecera
  rows.forEach((row, idx) => {
    const ruta = row[0];
    if (typeof ruta !== "string" || !ruta.startsWith("/")) return;
    const file   = path.basename(ruta);
    const name   = path.parse(file).name;
    const widths = WIDTH_COLUMNS
      .map((i) => Number(row[i]))
      .filter((n) => Number.isFinite(n) && n > 0);
    if (widths.length) tasks.push({ name, file, widths, ruta });
  });
}

// 7) Ejecutar redimensionado con calidad 90 (sin retina)
;(async () => {
  for (const { name, file, widths, ruta } of tasks) {
    const inputPath = path.join(PUBLIC_DIR, ruta);
    if (!fs.existsSync(inputPath)) {
      console.warn(`❌ No existe el archivo: ${inputPath}`);
      continue;
    }
    for (const w of widths) {
      const outName = `${name}-${w}w.webp`;
      const outPath = path.join(RESIZED_DIR, outName);
      console.log(`🔄 ${file} → ${outName} (${w}px)`);
      await sharp(inputPath)
        .resize({ width: w })
        .webp({ quality: 90 })
        .toFile(outPath);
    }
  }
  console.log("✅ Redimensionado completo (quality 90, sin Retina)");
})().catch((err) => {
  console.error("❌ Error en resize-images-quality:", err);
  process.exit(1);
});

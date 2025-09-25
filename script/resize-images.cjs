/**
 * Script para redimensionar imágenes a diferentes anchos usando Sharp.
 * Lee rutas y anchos desde un archivo Excel y genera versiones webp optimizadas en la carpeta de salida.
 *
 * @file resize-images.cjs
 */

const fs    = require("fs");
const path  = require("path");
const sharp = require("sharp");
const XLSX  = require("xlsx");

// 1) Ruta al Excel
const EXCEL_PATH = path.join(__dirname, "ImagesSizes.xlsx");

// 2) Carpeta pública con las originales
const PUBLIC_DIR = path.join(__dirname, "..", "public");

// 3) Carpeta de salida: src/assets/images/resized2
const RESIZED_DIR = path.join(
  __dirname,
  "..",
  "src",
  "assets",
  "images",
  "resized2"
);
if (!fs.existsSync(RESIZED_DIR)) {
  fs.mkdirSync(RESIZED_DIR, { recursive: true });
}

// 4) Columnas (0-based) en el Excel que contienen los anchos
const WIDTH_COLUMNS = [4, 6, 8, 10, 12, 14, 16];

// 5) Leer el libro y sus hojas
const workbook   = XLSX.readFile(EXCEL_PATH);
const sheetNames = workbook.SheetNames;

// 6) Recoger tareas
const tasks = [];

for (const sheetName of sheetNames) {
  const sheet = workbook.Sheets[sheetName];
  // rows es un array de arrays; rows[0] y rows[1] = cabeceras
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
  
  // Empezamos en rows[2] para saltar las 2 filas de cabecera
  rows.slice(2).forEach((row, idx) => {
    const ruta = row[0];
    // Solo procesar si ruta es cadena y empieza con "/"
    if (typeof ruta !== "string" || !ruta.startsWith("/")) return;

    const file = path.basename(ruta);      // e.g. "home-ugc1.webp"
    const name = path.parse(file).name;    // e.g. "home-ugc1"

    // Extraer anchos y filtrar no numéricos
    const widths = WIDTH_COLUMNS
      .map((i) => Number(row[i]))
      .filter((n) => Number.isFinite(n) && n > 0);

    if (widths.length === 0) {
      console.warn(
        `⚠️ No anchos válidos para "${file}" (fila ${idx + 3}, hoja "${sheetName}")`
      );
      return;
    }

    tasks.push({ name, file, widths, ruta });
  });
}

// 7) Ejecutar redimensionado
;(async () => {
  for (const { name, file, widths, ruta } of tasks) {
    const inputPath = path.join(PUBLIC_DIR, ruta);
    if (!fs.existsSync(inputPath)) {
      console.warn(`❌ No existe el archivo: ${inputPath}`);
      continue;
    }

    for (const w of widths) {
      const outFile = `${name}-${w}w.webp`;
      const outPath = path.join(RESIZED_DIR, outFile);
      console.log(`🔄  ${file} → ${outFile} (${w}px)`);
      await sharp(inputPath)
        .resize(w)             // ancho fijo, altura proporcional
        .webp({ quality: 80 }) // WebP calidad 80%
        .toFile(outPath);
    }
  }
  console.log("✅ ¡Redimensionado completo en resized2!");
})().catch((err) => {
  console.error("❌ Error en resize-images:", err);
  process.exit(1);
});

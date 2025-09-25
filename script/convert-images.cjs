/**
 * Script para convertir imágenes a formato AVIF y generar placeholders LQIP en base64.
 * Recorre recursivamente la carpeta de imágenes, genera archivos AVIF y thumbnails base64 para cada imagen.
 * Los placeholders se guardan como archivos .txt en la carpeta de placeholders.
 *
 * @file convert-images.cjs
 */
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Carpeta donde tienes todas las imágenes originales
const IMG_DIR = path.resolve(__dirname, '../public/img');
// Carpeta donde se guardarán los placeholders LQIP .txt
const PLACEHOLDERS_DIR = path.resolve(__dirname, '../src/assets/placeholders');

// Calidad para AVIF y para el thumbnail
const AVIF_QUALITY = 80;
const THUMB_SIZE = 10;     // ancho en px
const THUMB_QUALITY = 50;  // jpeg

async function ensureDirExists(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const name = path.basename(entry.name, ext);
      const avifPath = path.join(dir, `${name}.avif`);
      const thumbPath = path.join(PLACEHOLDERS_DIR, `${name}-lqip.txt`); // LQIP va a la carpeta de placeholders

      // Verificar si los archivos de salida ya existen
      let avifExists = false;
      let thumbExists = false;
      try {
        await fs.access(avifPath);
        avifExists = true;
      } catch (error) { /* El archivo no existe, lo cual está bien */ }
      try {
        await fs.access(thumbPath);
        thumbExists = true;
      } catch (error) { /* El archivo no existe, lo cual está bien */ }

      if (avifExists && thumbExists) {
        console.log(`→ Skipping ${entry.name}, AVIF and LQIP already exist.`);
        continue; // Saltar al siguiente archivo
      }

      // 1) Genera AVIF
      await sharp(fullPath)
        .avif({ quality: AVIF_QUALITY })
        .toFile(avifPath);
      console.log(`✓ ${path.relative(process.cwd(), avifPath)}`);
      // 2) Genera thumbnail Base64
      const buffer = await sharp(fullPath)
        .resize(THUMB_SIZE)
        .jpeg({ quality: THUMB_QUALITY })
        .toBuffer();
      await fs.writeFile(thumbPath, buffer.toString('base64'));
      console.log(`✓ ${path.relative(process.cwd(), thumbPath)} (LQIP)`);
    }
  }
}

async function main() {
  await ensureDirExists(PLACEHOLDERS_DIR); // Asegurarse de que la carpeta de placeholders exista
  await processDir(IMG_DIR);
}
main()
  .then(() => console.log('→ Images processed.'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// src/utils/responsiveImages.ts
export interface ResponsiveImageData {
  src:    string;
  srcSet: string;
  sizes:  string;
  width:  number;
}

// Carga todas las WebP de la carpeta resized-quality
const modules = import.meta.glob('../assets/images/resized-quality/*.webp', {
  import: 'default',
  eager: true
}) as Record<string,string>;

const groups: Record<string, { url: string; w: number }[]> = {};

for (const [filePath, url] of Object.entries(modules)) {
  const file = filePath.split('/').pop()!;            // e.g. "home-ugc1-400w.webp"
  const m    = file.match(/^(.+)-(\d+)w\.webp$/);
  if (!m) continue;
  const name = m[1].toLowerCase();                   // "home-ugc1"
  const w    = Number(m[2]);
  groups[name] = groups[name] || [];
  groups[name].push({ url, w });
}

export const responsiveImages: Record<string, ResponsiveImageData> = {};

for (const [name, entries] of Object.entries(groups)) {
  const sorted = entries.sort((a, b) => a.w - b.w);
  const src    = sorted[0].url;                      // la más pequeña
  const srcSet = sorted.map(e => `${e.url} ${e.w}w`).join(', ');
  const sizes  = '100vw';                            // ocupa todo el ancho
  responsiveImages[name] = {
    src,
    srcSet,
    sizes,
    width: sorted[0].w
  };
}

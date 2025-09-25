// src/components/about/AboutSeoTags.tsx
/**
 * Componente para gestionar las etiquetas meta de SEO para la página "Sobre Mí".
 * Utiliza `react-helmet-async` de forma diferida para inyectar dinámicamente las etiquetas
 * en el <head> del documento, mejorando el rendimiento y el SEO.
 *
 * @component
 * @param {AboutSeoTagsProps} props - Propiedades para las etiquetas SEO.
 * @property {string} title - Título de la página.
 * @property {string} description - Descripción para motores de búsqueda.
 * @property {string} imageUrl - URL de la imagen para Open Graph y Twitter Cards.
 * @property {string} url - URL canónica de la página.
 * @property {string} siteName - Nombre del sitio.
 * @property {string} locale - Localización del contenido (ej. "es_CL").
 * @returns {JSX.Element} Un fragmento que contiene el Helmet con las etiquetas SEO.
 */
import React, { Suspense } from 'react';
import { LazyHelmetProvider, LazyHelmet } from '../../utils/LazyHelmet';

interface AboutSeoTagsProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  siteName: string;
  locale: string;
}

const AboutSeoTags: React.FC<AboutSeoTagsProps> = React.memo(({
  title,
  description,
  imageUrl,
  url,
  siteName,
  locale,
}) => {
  return (
    <Suspense fallback={null}>
      <LazyHelmetProvider>
        <LazyHelmet>
          <title>{title}</title>
          <meta name="description" content={description} />

          {/* ––– Open Graph ––– */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:locale" content={locale} />

          {/* ––– Twitter Card ––– */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />

          {/* ––– Canonical ––– */}
          <link rel="canonical" href={url} />
        </LazyHelmet>
      </LazyHelmetProvider>
    </Suspense>
  );
});

export default AboutSeoTags;

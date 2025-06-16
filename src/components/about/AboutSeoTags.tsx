// src/components/about/AboutSeoTags.tsx
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

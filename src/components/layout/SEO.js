import React from 'react';
import Head from 'next/head';

const SEO = ({
  title = 'Play Free Online Games | JoyFun.space',
  description = 'Play the best free online games on JoyFun.space. No downloads, no installations - just instant fun in your browser!',
  canonicalUrl,
  ogImage = 'https://joyfun.space/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://joyfun.space'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl || 'https://joyfun.space'} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Language */}
      <meta property="og:locale" content="en_US" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
};

export default SEO; 
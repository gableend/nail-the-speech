import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/result/',
          '/data-deletion/',
        ],
      },
    ],
    sitemap: 'https://www.nailthespeech.com/sitemap.xml',
  };
}

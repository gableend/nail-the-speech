import { MetadataRoute } from 'next';
import { speechCategories, exampleSpeeches } from '@/data/exampleSpeeches';
import { articles } from '@/data/articles';
import { helpArticles } from '@/data/helpArticles';
import { insightArticles } from '@/data/insightArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nailthespeech.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/examples`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/advice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-man-ai-speech-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maid-of-honor-ai-speech-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-ai-speech-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nailthespeech-vs-toastpal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nailthespeech-vs-toastwiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nailthespeech-vs-speechyai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Example speech category pages (/examples/[category])
  const categoryPages: MetadataRoute.Sitemap = speechCategories.map(cat => ({
    url: `${baseUrl}/examples/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Individual example speech pages (/examples/[category]/[slug])
  const speechPages: MetadataRoute.Sitemap = exampleSpeeches.map(speech => ({
    url: `${baseUrl}/examples/${speech.category}/${speech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Advice article pages (/advice/[slug])
  const advicePages: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${baseUrl}/advice/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: article.sections.length > 1 || article.sections[0]?.heading !== 'Coming Soon' ? 0.7 : 0.4,
  }));

  // Help article pages (/help/[slug])
  const helpPages: MetadataRoute.Sitemap = helpArticles.map(article => ({
    url: `${baseUrl}/help/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Insight article pages (/articles/[slug])
  const insightPages: MetadataRoute.Sitemap = insightArticles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...speechPages, ...advicePages, ...helpPages, ...insightPages];
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://madcityhomeloans.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/fha-loans',
    '/va-loans',
    '/conventional-loans',
    '/jumbo-loans',
    '/usda-loans',
    '/wheda-loans',
    '/non-conventional-loans',
    '/purchase-a-new-home',
    '/first-time-home-buyers',
    '/refinance-your-home',
    '/about-rob',
    '/about-mad-city-home-loans-team',
    '/mortgage-process',
    '/mortgage-planning',
    '/annual-mortgage-review',
    '/credit-consultation',
    '/home-equity',
    '/reviews',
    '/mortgage-calculator',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

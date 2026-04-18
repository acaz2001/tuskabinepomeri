// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tuskabinepomeri.rs'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date("April 18, 2026"),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mala-kupatila`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/paravani-za-tus-kabine`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
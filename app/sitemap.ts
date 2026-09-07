import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yogleelasulphur.com' // Update if your domain is different
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/Infrastructure`, lastModified: new Date() },
    { url: `${baseUrl}/career`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ]
}
import { createConnection } from '$lib/db/mysql';

export async function GET() {
 const baseUrl = 'https://example.com';

 const connection = await createConnection();

 const [products] = await connection.query(`
  SELECT slug
  FROM products
  WHERE slug IS NOT NULL
 `);

 const staticUrls = [
  {
   loc: `${baseUrl}/`
  }
 ];

 const productUrls = products.map((product) => ({
  loc: `${baseUrl}/products/${product.slug}`
 }));

 const allUrls = [...staticUrls, ...productUrls];

 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
 .map(
  (url) => `<url>
<loc>${url.loc}</loc>
</url>`
 )
 .join('\n')}
</urlset>`;

 return new Response(xml, {
  headers: {
   'Content-Type': 'application/xml'
  }
 });
}
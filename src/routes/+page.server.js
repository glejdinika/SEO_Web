import { createConnection } from '$lib/db/mysql';

function normalizeImageUrl(imageUrl, currentOrigin) {
 if (!imageUrl) return '';

 try {
  const parsed = new URL(String(imageUrl), currentOrigin);

  if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1') {
   return `${currentOrigin}${parsed.pathname}${parsed.search}${parsed.hash}`;
  }

  return parsed.toString();
 } catch {
  return String(imageUrl);
 }
}

export async function load({ url }) {
 try {
  let connection = await createConnection();

  const [productsRows] = await connection.execute('select * from products;');
  const products = productsRows.map((product) => ({
   ...product,
   image_url: normalizeImageUrl(product.image_url, url.origin)
  }));

  return {
        products
  };
 } catch (err) {
  console.error('Failed to load products:', err);

  return {
   products: []
  };
 }
}
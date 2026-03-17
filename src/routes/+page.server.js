import { createConnection } from '$lib/db/mysql';

export async function load() {
 try {
  let connection = await createConnection();

  const [productsRows] = await connection.execute('select * from products;');

  return {
        products: productsRows
  };
 } catch (err) {
  console.error('Failed to load products:', err);

  return {
   products: []
  };
 }
}
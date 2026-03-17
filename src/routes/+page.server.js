import { createConnection } from '$lib/db/mysql';

export async function load() {
 let connection = await createConnection();

 const [productsRows] = await connection.execute('select * from products;');

 return {
        products: productsRows
 };
}
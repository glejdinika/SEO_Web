import { createConnection } from '$lib/db/mysql';

export async function load({params}) {
    let connection = await createConnection();
    let slug = params.slug;

    const [rows] = await connection.execute('select * from products where slug = ?;', [slug]);
    const product = rows?.[0];


    return {
        product: rows[0]
    };
}
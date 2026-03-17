import { createConnection } from '$lib/db/mysql';

export async function load({params}) {
    try {
        let connection = await createConnection();
        let slug = params.slug;

        const [rows] = await connection.execute('select * from products where slug = ?;', [slug]);

        return {
            product: rows?.[0] ?? null
        };
    } catch (err) {
        console.error(`Failed to load product for slug "${params.slug}":`, err);

        return {
            product: null
        };
    }
}
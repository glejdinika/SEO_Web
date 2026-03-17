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

export async function load({params, url}) {
    try {
        let connection = await createConnection();
        let slug = params.slug;

        const [rows] = await connection.execute('select * from products where slug = ?;', [slug]);
        const product = rows?.[0]
            ? {
                ...rows[0],
                image_url: normalizeImageUrl(rows[0].image_url, url.origin)
            }
            : null;

        return {
            product
        };
    } catch (err) {
        console.error(`Failed to load product for slug "${params.slug}":`, err);

        return {
            product: null
        };
    }
}
import { sql } from '../db';

// Separating handlers from routing logic for cleaner unit testing and scaling
export const itemHandler = {
    getAll: async () => {
        return await sql`SELECT * FROM items ORDER BY created_at DESC`;
    },

    getOne: async ({ params: { id } }: { params: { id: number } }) => {
        const [item] = await sql`SELECT * FROM items WHERE id = ${id}`;
        if (!item) throw new Error('Item not found');
        return item;
    },

    create: async ({ body }: { body: { name: string, description?: string } }) => {
        const [newItem] = await sql`
            INSERT INTO items (name, description)
            VALUES (${body.name}, ${body.description || null})
            RETURNING *
        `;
        return newItem;
    },

    remove: async ({ params: { id } }: { params: { id: number } }) => {
        await sql`DELETE FROM items WHERE id = ${id}`;
        return { success: true };
    }
};
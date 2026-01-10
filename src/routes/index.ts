import { Elysia, t } from 'elysia';
import { itemHandler } from '../handlers/index';

// Defining a modular plugin with a prefix for isolation
export const itemsModule = new Elysia({ prefix: '/api/items' })
    .get('/', itemHandler.getAll)
    .get('/:id', itemHandler.getOne, {
        params: t.Object({ id: t.Numeric() })
    })
    .post('/', itemHandler.create, {
        body: t.Object({
            name: t.String(),
            description: t.Optional(t.String())
        })
    })
    .delete('/:id', itemHandler.remove, {
        params: t.Object({ id: t.Numeric() })
    });
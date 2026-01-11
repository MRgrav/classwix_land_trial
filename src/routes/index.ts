import { Elysia, t } from 'elysia';
import { trialHandler } from '../handlers';

// Defining a modular plugin with a prefix for isolation
export const trialApi = new Elysia({ prefix: '/api/trials' })
    // .get('/', itemHandler.getAll)
    // .get('/:id', itemHandler.getOne, {
    //     params: t.Object({ id: t.Numeric() })
    // })
    .post('/', trialHandler.create, {
        body: t.Object({
            name: t.String(),
            subject: t.String(),
            age: t.String(),
            email: t.String(),
            phone: t.String(),
            country: t.String(),
            address: t.Optional(t.String())
        })
    });
    // .delete('/:id', itemHandler.remove, {
    //     params: t.Object({ id: t.Numeric() })
    // });
    // .get('/courses', () => {
    //     const subjects = {
    //         academic: ['Mathematics', 'Science', 'English', 'Physics', 'Chemistry', 'Biology'],
    //         music: ['Piano', 'Guitar', 'Violin', 'Vocal', 'Drums', 'Flute']
    //     };
    //     if (!category || !subjects[category as keyof typeof subjects]) {
    //         set.status = 400;
    //         return '<select disabled><option value="">Invalid category</option></select>';
    //     }
    // })
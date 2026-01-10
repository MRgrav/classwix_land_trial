import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';

// Use postgres.js for the fastest raw SQL performance
export const sql = postgres(connectionString);
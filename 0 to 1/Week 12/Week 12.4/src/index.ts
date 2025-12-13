import { Client } from 'pg';

const  client = new Client({
    connectionString: "postgresql://postgres:myscretepassword@localhost:5432/postgres"
})

async function createUserTable() {
    await client.connect()
    const res = await client.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(res)
}

createUserTable();

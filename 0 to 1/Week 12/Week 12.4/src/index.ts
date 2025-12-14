import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_ZELO0MY6Arbm@ep-hidden-math-a44wrgvu-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function createUserTable() {
    try {
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
        console.log('Table created successfully:', res)
    } catch (error) {
        console.error('Error creating table:', error)
    } finally {
        await client.end()
    }
}

async function insertUserData(username: string, password: string, email: string) {
    try {
        await client.connect()
        const result = await client.query(`
            INSERT INTO users (username, password, email)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [username, password, email])
        console.log('User inserted successfully:', result.rows[0])
    } catch (error) {
        console.error('Error inserting user:', error)
    } finally {
        await client.end()
    }
}

// createUserTable();
insertUserData("rishabh", "lol", "rishabh@gmail.com")

/*
Transactions in SQL:

BEGIN; -- Start a transaction

INSERT INTO users (username, password, email)
VALUES ('rishabh', '123456', 'rishabh@gmail.com');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Main St', 10001);

// NOT INSERTED UNTIL I COMMIT

COMMIT; -- Commit the transaction

ROLLBACK; -- Rollback the transaction
*/

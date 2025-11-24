// write a function to create a users table into our database
import { Pool} from 'pg'

// const client = new Client({
//     host: 'localhost',
//     port: 5433,
//     user: 'postgres',
//     password: 'rishabh12'
// })

// client.connect()

// async function createUsersTable(){
//     const res = await client.query(`
//         CREATE TABLE IF NOT EXISTS users(
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(50) NOT NULL,
//             email VARCHAR(50) NOT NULL,
//             password VARCHAR(50) NOT NULL
//         )
//     `)
//     console.log(res)
// }


// const pool = new Pool({
//     connectionString: "postgresql://neondb_owner:npg_sjc1uBiwpSW3@ep-odd-wind-ahyieis3-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
// })

// pool.connect()

// async function createUsersTable() {
//     await pool.connect()
//     const result = await pool.query(`
//         CREATE TABLE users(
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(50) NOT NULL,
//             email VARCHAR(50) NOT NULL,
//             password VARCHAR(50) NOT NULL
//         )
//     `)
//     console.log(result)
// }

// createUsersTable()


// Async function to insert data into a table
async function insertData() {
    const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_sjc1uBiwpSW3@ep-odd-wind-ahyieis3-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    })


  try {
    await pool.connect(); // Ensure pool connection is established
    const insertQuery = "INSERT INTO users (name, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await pool.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await pool.end(); // Close the client connection
  }
}

insertData();
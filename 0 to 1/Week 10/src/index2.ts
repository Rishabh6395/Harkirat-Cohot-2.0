import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.PG_URI;
if (!secret) throw new Error("PG_URI missing");

const pool = new Pool({
  connectionString: secret
});

// ───────────────────────────────────────────────
// Create addresses table
// ───────────────────────────────────────────────

async function createAddressesTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS addresses (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      city VARCHAR(100) NOT NULL,
      country VARCHAR(100) NOT NULL,
      street VARCHAR(255) NOT NULL,
      pincode VARCHAR(20),
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
}

// ───────────────────────────────────────────────
// Insert an address
// ───────────────────────────────────────────────

async function insertAddress() {
  const query = `
    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [1, "city1", "country1", "street1", "pincode1"];
  const res = await pool.query(query, values);
  console.log("Inserted:", res.rows[0]);
}

// ───────────────────────────────────────────────
// Fetch user by email
// ───────────────────────────────────────────────

async function getUser(email: string) {
  const query = "SELECT * FROM users WHERE email = $1";
  const result = await pool.query(query, [email]);

  if (result.rows.length === 0) {
    console.log("No user found.");
    return null;
  }

  console.log("User:", result.rows[0]);
  return result.rows[0];
}

// ───────────────────────────────────────────────
// Run everything
// ───────────────────────────────────────────────

async function main() {
  await createAddressesTable();
  await insertAddress();
  await getUser("user3@example.com");
  await pool.end();
}

main().catch(console.error);

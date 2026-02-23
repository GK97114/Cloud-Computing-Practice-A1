const Database = require('better-sqlite3');

// Connect to SQlite file
const db = new Database("products.db")

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
)
`);

console.log("Connected to the SQLite database and ensured products table exists.");

module.exports = db;
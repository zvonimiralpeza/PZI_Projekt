const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Create and connect to the SQLite database
const db = new sqlite3.Database('mydatabase.db');

// Create a simple table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
  )
`);

// Create products table (primjer)
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  )
`);


// Middleware to parse JSON
app.use(express.json());

// Example API route to get all users
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ users: rows });
  });
});

// Example API route to add a new user
app.post('/users', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    res.status(400).json({ error: 'Username and email are required.' });
    return;
  }

  db.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Example API route to get all products
app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ products: rows });
    });
  });



// Your other CRUD routes go here

// ...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


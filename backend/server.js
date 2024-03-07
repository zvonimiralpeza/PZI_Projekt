const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Create and connect to the SQLite database
const db = new sqlite3.Database('mydatabase.db');

// Create a simple table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone INTEGER,
    password TEXT,
    role TEXT CHECK(role IN ('Normal', 'Premium', 'Admin', 'Superadmin'))
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    // Insert admin user
    db.run(`
      INSERT INTO users (first_name, last_name, email, phone, password, role)
      VALUES ('Admin', 'Adminic', 'admin@slike.com', 1234567890, 'admin', 'Admin')
    `);

    // Insert superadmin user
    db.run(`
      INSERT INTO users (first_name, last_name, email, phone, password, role)
      VALUES ('Superadmin', 'Superadminic', 'superadmin@slike.com', 9876543210, 'superadmin', 'Superadmin')
    `);
  }
});

// Create products table (primjer)
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    url TEXT,
    price REAL,
    author TEXT,
    technique TEXT,
    year INTEGER,
    seller_id INTEGER,
    FOREIGN KEY(seller_id) REFERENCES users(id)
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
  const { first_name, last_name, email, phone, password, role } = req.body;
  if (!first_name || !last_name || !email || !phone || !password || !role) {
    res.status(400).json({ error: 'Missing required properties!.' });
    return;
  }

  db.run('INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)', 
    [first_name, last_name, email, phone, password, role], 
    function (err) {
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


app.post('/products', (req, res) => {
  const { name, url, price, author, technique, year, seller_id } = req.body;
  if (!name || !url || !price || !author || !technique || !year || !seller_id) {
    res.status(400).json({ error: 'Name, url, price, author, technique, year, and seller_id are required.' });
    return;
  }

  db.run('INSERT INTO products (name, url, price, author, technique, year, seller_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [name, url, price, author, technique, year, seller_id], 
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
  });
});

app.delete('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  if (!productId) {
    res.status(400).json({ error: 'Product ID is required.' });
    return;
  }
  db.run('DELETE FROM products WHERE id = ?', [productId], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Product deleted successfully.' });
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  db.get(`
    SELECT * FROM users WHERE email = ? AND password = ?
  `, [email, password], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // If user found, return user details
    res.json({ user: row });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
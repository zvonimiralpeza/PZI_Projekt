const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5009;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT']
}));

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Create and connect to the SQLite database
const db = new sqlite3.Database('mydatabase.db');

db.run('DROP TABLE IF EXISTS users')
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
    bcrypt.hash('admin', saltRounds, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Error hashing password.' });
      }

      db.run('INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)', 
        ['Admin', 'Adminic', 'admin@slike.com', 1234567890, hashedPassword, 'Admin']);
    });

    // Insert superadmin user
    bcrypt.hash('superadmin', saltRounds, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Error hashing password.' });
      }

      db.run('INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)', 
        ['Superadmin', 'Superadminic', 'superadmin@slike.com', 9876543210, hashedPassword, 'Superadmin']);
    });
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
    return res.status(400).json({ error: 'Missing required properties!' });
  }

  // Check if the email already exists
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (row) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    // If email does not exist, proceed with password hashing and user creation
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Error hashing password.' });
      }

      db.run('INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)', 
        [first_name, last_name, email, phone, hashedPassword, role], 
        function (err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.json({ id: this.lastID });
      });
    });
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


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error comparing passwords.' });
      }

      if (!result) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }

      res.json({ user: row });
    });
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

app.put('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const { name, url, price, author, technique, year, seller_id } = req.body;

  // Check if all required fields are provided
  if (!name || !url || !price || !author || !technique || !year || !seller_id) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // SQL query to update the product details
  const query = `
    UPDATE products 
    SET name = ?, url = ?, price = ?, author = ?, technique = ?, year = ?, seller_id = ? 
    WHERE id = ?
  `;

  db.run(query, [name, url, price, author, technique, year, seller_id, productId], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Error updating product: ' + err.message });
    }

    // Check if any row was updated
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Successfully updated
    res.json({ message: 'Product updated successfully.' });
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
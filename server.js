const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// PostgreSQL Connection
const pool = new Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'petition_system',
    password: 'Subzero', // Replace with your PostgreSQL password
    port: 5432,
});

// Test Database Connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

// API Endpoints

// Register User
app.post('/api/register', (req, res) => {
    const { name, email, password, dob, phone, gender, address, district, state, country } = req.body;
    const query = 'INSERT INTO users (name, email, password, dob, phone, gender, address, district, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
    pool.query(query, [name, email, password, dob, phone, gender, address, district, state, country], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(result.rows[0]);
    });
});

// Login User
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    pool.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.rows.length > 0) {
            res.json({ message: 'Login successful', user: result.rows[0] });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

// Submit Petition
app.post('/api/petitions', (req, res) => {
    const { user_id, petitioner_name, petitioner_phone, petitioner_email, petitioner_address, description } = req.body;
    const query = 'INSERT INTO petitions (user_id, petitioner_name, petitioner_phone, petitioner_email, petitioner_address, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    pool.query(query, [user_id, petitioner_name, petitioner_phone, petitioner_email, petitioner_address, description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(result.rows[0]);
    });
});

// Track Petition Status
app.get('/api/petitions/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM petitions WHERE id = $1';
    pool.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Petition not found' });
        }
    });
});

// Get User Petitions
app.get('/api/petitions/user/:user_id', (req, res) => {
    const { user_id } = req.params;
    const query = 'SELECT * FROM petitions WHERE user_id = $1';
    pool.query(query, [user_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result.rows);
    });
});

// Submit Complaint
app.post('/api/complaints', (req, res) => {
    const { user_id, contact, issue } = req.body;
    const query = 'INSERT INTO complaints (user_id, contact, issue) VALUES ($1, $2, $3) RETURNING *';
    pool.query(query, [user_id, contact, issue], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(result.rows[0]);
    });
});

// Update Settings
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const query = 'UPDATE users SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *';
    pool.query(query, [name, email, phone, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result.rows[0]);
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
// Primer paso
const express = require('express');
const cors    = require('cors');
const db      = require('./db');
const path    = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // leer body JSON en POST

// GET todos los juegos
app.get('/juegos', (req, res) => {
  db.query('SELECT * FROM videojuegos', (err, resultados) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(resultados);
  });
});

// GET un juegos por ID
app.get('/juegos/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM videojuegos WHERE id = ?', [id], (err, r) => {
    if (err) return res.status(500).json({ error: err.message });
    if (r.length === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json(r[0]);
  });
});

// POST crear juegos, Paso 10
app.post('/juegos', (req, res) => {
  const { nombre, precio, stock } = req.body;
  const sql = 'INSERT INTO videojuegos (nombre, precio, stock) VALUES (?, ?, ?)';
  db.query(sql, [nombre, precio, stock], (err, r) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: r.insertId, nombre, precio, stock });
  });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000')); //va dentro del primer paso
// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parse JSON
app.use(bodyParser.json());

// ✅ Task 3: Middleware

// Logger Middleware
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};
app.use(logger);

// Auth Middleware (for protected routes)
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== 'mysecretkey') {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
  }
  next();
};

// Validation Middleware
const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (
    !name || typeof name !== 'string' ||
    !description || typeof description !== 'string' ||
    typeof price !== 'number' ||
    !category || typeof category !== 'string' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Invalid product data' });
  }
  next();
};

// Custom Error Class
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

// In-memory product data
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// ✅ Task 2 + Task 5: RESTful API + Advanced Features

// GET /api/products - List all (with filtering & pagination)
app.get('/api/products', (req, res) => {
  let { category, page = 1, limit = 2 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filtered = products;

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  res.json({
    page,
    limit,
    total: filtered.length,
    data: paginated
  });
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// POST /api/products - Create (protected + validated)
app.post('/api/products', auth, validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - Update (protected + validated)
app.put('/api/products/:id', auth, validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(index, 1);
  res.status(204).send();
});

// 🔍 GET /api/products/search?q=...
app.get('/api/products/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing search query' });

  const results = products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  res.json(results);
});

// 📊 GET /api/products/stats
app.get('/api/products/stats', (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
});

// ✅ Task 4: Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing
module.exports = app;

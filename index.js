// index.js
const express = require('express');
const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// Parse JSON
app.use(express.json());

// Log every request
app.use(logger);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World 🌍 — Express Error Handling Example');
});

// Import product routes
const productRoutes = require('./routes/products');

// Secure the product routes
app.use('/api/products', authenticate, productRoutes);

// 404 Handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// 🧩 Global Error Handler (MUST be last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

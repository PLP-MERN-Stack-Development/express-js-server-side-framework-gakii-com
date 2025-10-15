// middleware/errorHandler.js
const { NotFoundError, ValidationError } = require('../utils/errors');

function errorHandler(err, req, res, next) {
  console.error('Error:', err.message);

  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;

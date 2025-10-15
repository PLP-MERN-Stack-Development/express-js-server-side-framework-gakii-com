// middleware/validateProduct.js
const { ValidationError } = require('../utils/errors');

function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || price == null || !category || inStock == null) {
    return next(new ValidationError('All fields (name, description, price, category, inStock) are required.'));
  }

  if (typeof price !== 'number' || price < 0) {
    return next(new ValidationError('Price must be a positive number.'));
  }

  next();
}

module.exports = validateProduct;

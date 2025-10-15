// middleware/auth.js
function auth(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const validKey = '12345'; // for testing, use .env in production

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next();
}

module.exports = auth;

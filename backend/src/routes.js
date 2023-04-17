const { Router } = require('express');
const routes = Router();

routes.get('', (req, res) => {
  res.json({ message: 'Welcome to Scheduler back-end service.'});
})

module.exports = { routes };
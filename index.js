const express = require('express');
const { Pool } = require('pg');
const webRoutes = require('routes/web-routes');
const apiRoutes = require('routes/api-routes');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'brooksQAP3',
  port: 5432,
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

module.exports = app;

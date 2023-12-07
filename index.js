const express = require('express');
const { Pool } = require('pg');
const webRoutes = require('./routes/web-routes');
const apiRoutes = require('./routes/api-routes');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/api', apiRoutes);
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

module.exports = app;

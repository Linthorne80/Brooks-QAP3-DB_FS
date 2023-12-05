const pool = require('../index');

const getAllCities = async () => {
  const result = await pool.query('SELECT * FROM city');
  return result.rows;
};

const createCity = async (name, population) => {
  await pool.query('INSERT INTO city (name, population) VALUES ($1, $2)', [name, population]);
};

const updateCity = async (id, name, population) => {
  await pool.query('UPDATE city SET name = $1, population = $2 WHERE id = $3', [name, population, id]);
};

const deleteCity = async (id) => {
  await pool.query('DELETE FROM city WHERE id = $1', [id]);
};

module.exports = {
  getAllCities,
  createCity,
  updateCity,
  deleteCity,
};

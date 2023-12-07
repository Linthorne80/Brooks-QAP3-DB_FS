const { Pool } = require('pg');
const pool = new Pool({
  user: 'brook',
  host: 'localhost',
  database: 'qap3',
  password: 'brooksQAP3',
  port: 5432,
});
const getAllCities = async () => {
  const result = await pool.query("SELECT city_id, name, population FROM public.city");
  return result.rows;
};

const createCity = async (name, population) => {
  await pool.query("INSERT INTO public.city(name, population) VALUES ($1, $2);", [name, population]);
};

const patchCity = async (id, name, population) => {
  await pool.query("UPDATE public.city SET name=$1, population=$2 WHERE city_id=$3;", [name, population, id]);
};

const deleteCity = async (id) => {
  await pool.query("DELETE FROM public.city WHERE city_id=$1;", [id]);
};


module.exports = {
  getAllCities,
  createCity,
  patchCity,
  deleteCity,
};

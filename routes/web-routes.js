const express = require('express');
const router = express.Router();
const cityDal = require('../dal/city-dal');

router.get('/cities', async (req, res) => {
  try {
    const cities = await cityDal.getAllCities();
    res.render('cities', { cities });
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/cities', async (req, res) => {
  try {
    const { name, population } = req.body;
    await cityDal.createCity(name, population);
    res.redirect('/cities');
  } catch (error) {
    console.error('Error creating city:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, population } = req.body;
    await cityDal.updateCity(id, name, population);
    res.redirect('/cities');
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await cityDal.deleteCity(id);
    res.redirect('/cities');
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;

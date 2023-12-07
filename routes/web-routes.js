const express = require('express');
const router = express.Router();
const cityDal = require('../dal/city-dal');


router.get('/cities', async (_req, res) => {
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

router.get('/cities/:id/edit', async (req, res) => {
  console.log('city.Edit : ' + req.params.id);
  res.render('citiesPatch.ejs', {name: req.query.name, population: req.query.population, theId: req.params.id});
});

router.patch('/cities/:id', async (req, res) => {
  try {
      await cityDal.patchCity(req.params.id, req.body.name, req.body.population);
      res.redirect('/cities/');
  } catch {
      // log this error to an error log file.
      res.render('503');
  }
});



router.get('/cities/:id/replace', async (req, res) => {
  console.log('city.Replace : ' + req.params.id);
  res.render('citiesPut.ejs', {name: req.query.name, population: req.query.population, theId: req.params.id});
});


router.put('/cities/:id', async (req, res) => {
  try {
      await cityDal.putCity(req.params.id, req.body.name, req.body.population);
      res.redirect('/cities/');
  } catch {
      // log this error to an error log file.
      res.render('503');
  }
});

router.get('/cities/:id/delete', async (req, res) => {
  console.log('city.Delete : ' + req.params.id);
  res.render('citiesDelete.ejs', {name: req.query.name, population: req.query.population, theId: req.params.id});
});


router.delete('/cities/:id', async (req, res) => {
  try {
      await cityDal.patchCity(req.params.id, req.body.name, req.body.population);
      res.redirect('/cities/');
  } catch {
      // log this error to an error log file.
      res.render('503');
  }
});
module.exports = router;

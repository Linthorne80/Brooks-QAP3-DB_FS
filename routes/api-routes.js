const express = require('express');
const router = express.Router();
const cityDal = require('../dal/city-dal');


router.get('/cities', async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityDal.getCityById(id);
    res.json(city);
  } catch (error) {
    console.error('Error fetching city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/cities', async (req, res) => {
  try {
    const { name, population } = req.body;
    await cityDal.createCity(name, population);
    res.sendStatus(201);
  } catch (error) {
    console.error('Error creating city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, population } = req.body;
    await cityDal.updateCity(id, name, population);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); 

router.delete('/cities/:id/delete', async (req, res) => {
  try {
    await cityDal.deleteCity(id);
    res.status(204).json({ message: 'Deletion successful' });
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;

const supertest = require('supertest');
const app = require('../index');

describe('GET /cities', () => {
  it('responds with JSON containing a list of cities', async () => {
    const response = await supertest(app).get('/api/cities');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('length');
  });
});

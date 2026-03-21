import request from 'supertest';
import server from './server.js';

test('should return 200 for the home route', async () => {
  const res = await request(server).get('/');
  expect(res.status).toBe(200);
});

test('should return 200 for the about route', async () => {
  const res = await request(server).get('/about');
  expect(res.status).toBe(200);
});

test('should return 404 for a route that was not defined', async () => {
  const res = await request(server).get('/random-address');
  expect(res.status).toBe(404);
});
test('should return 404 if About is capitalized', async () => {
  const res = await request(server).get('/About');
  expect(res.status).toBe(404);
});

test('should return 404 if about has a slash after it', async () => {
  const res = await request(server).get('/about/');
  expect(res.status).toBe(404);
});
test('should return 404 when a query string is added to the address', async () => {
  const res = await request(server).get('/about?foo=bar');
  expect(res.status).toBe(404);
});
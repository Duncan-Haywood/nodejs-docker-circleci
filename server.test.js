// server.test.js

const request = require('supertest');
const server = require('./server'); // import server

describe('Server', () => {

  beforeAll(() => {
    server.listen(); // start server
  });

  afterAll(() => {
    server.close(); // close server
  });

  it('responds with hello world', async () => {
    const res = await request(server).get('/');
    
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello World!\n');
  });

});
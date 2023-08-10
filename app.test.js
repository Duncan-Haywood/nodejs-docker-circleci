// app.test.js

const httpMocks = require('node-mocks-http');
const app = require('./app');

describe('App', () => {

  it('responds with hello world', () => {

    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    app.emit('request', request, response);

    expect(response._getData()).toEqual('Hello World\n');
    expect(response._isEndCalled()).toBeTruthy();

  });

});
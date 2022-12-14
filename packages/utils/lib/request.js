const axios = require('axios');
const log = require('./log');

const BASE_URL = 'http://119.29.24.92:9091';

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  response => {
    log.verbose('response', response.data);
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

module.exports = service;

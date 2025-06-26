const axios = require('axios');
require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;
const apiClient = axios.create({
  baseURL: 'https://api.clashofclans.com/v1',
  headers: {
    Authorization: `Bearer ${COC_API_KEY}`,
  },
  timeout: 5000,
});

module.exports = apiClient;

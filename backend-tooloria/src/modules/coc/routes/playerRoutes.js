const express = require('express');
const router = express.Router();
const apiClient = require('../../../config/axiosInstanse');
const e = require('express');
const normalizePlayerData = require('../controller/cocController');

router.post('/playerInfo', async (req, res) => {
  try {
    let { playerTag } = req.body;
    if (!playerTag.startsWith('%23')) {
      playerTag = encodeURIComponent(`#${playerTag}`);
    }
    const response = await apiClient.get(`/players/${playerTag}`);
    let responseData = normalizePlayerData(response.data);
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || 'Failed to fetch player data',
    });
  }
});

module.exports = router;

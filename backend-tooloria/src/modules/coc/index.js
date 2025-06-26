const express = require('express');
const router = express.Router();

const playerRoutes = require('./routes/playerRoutes');
// const clanRoutes = require('./routes/clan');

router.use('/players', playerRoutes);
// router.use('/clans', clanRoutes);

module.exports = router;

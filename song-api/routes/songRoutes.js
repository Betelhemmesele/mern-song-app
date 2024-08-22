const express = require('express');
const router = express.Router();
const songController = require('../controller/songController');

router.post('/songs', songController.uploadMusic,songController.createSong);
router.get('/songs', songController.listSongs);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.removeSong);
router.get('/statistics', songController.getStatistics);

module.exports = router;

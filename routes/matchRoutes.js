const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);
router.get('/:year/:month/:day', matchController.getMatchesByDate)
router.post('/', matchController.createMatch);
router.patch('/:id', matchController.updateMatch);
router.delete('/:id', matchController.deleteMatch);

module.exports = router;

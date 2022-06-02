const express = require('express');
const router = express.Router();
const arrayController = require('../controllers/arrayController');

router.post('/',arrayController.create);
router.get('/',arrayController.findAll);
router.get('/get/:id',arrayController.findById);
router.put('/:id',arrayController.update);
router.delete('/:id',arrayController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();
const regleController = require('../controllers/regleController');

router.post('/',regleController.create);
router.get('/',regleController.findAll);
router.get('/get/:id',regleController.findById);
router.post('/verify/:id',regleController.verifyRegle);
router.put('/:id',regleController.update);
router.delete('/:id',regleController.delete);

module.exports = router;

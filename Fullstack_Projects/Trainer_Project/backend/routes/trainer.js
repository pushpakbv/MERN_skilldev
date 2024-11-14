const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer');
router.get('/', trainerController.getAllItems);
router.get('/:id', trainerController.getItemById);
router.post('/', trainerController.createItem);
router.put('/:id', trainerController.updateItem);
router.delete('/:id', trainerController.deleteItem);

module.exports = router;
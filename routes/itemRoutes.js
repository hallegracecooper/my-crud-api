// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET all items
router.get('/', itemController.getItems);

// GET a single item by ID
router.get('/:id', itemController.getItemById);

// POST a new item
router.post('/', itemController.createItem);

// PUT to update an item
router.put('/:id', itemController.updateItem);

// DELETE an item
router.delete('/:id', itemController.deleteItem);

module.exports = router;
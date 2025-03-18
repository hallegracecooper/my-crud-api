// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET route to retrieve all items
router.get('/', itemController.getItems);

// GET route to retrieve a single item by ID
router.get('/:id', itemController.getItemById);


// POST route to create a new item
router.post('/', itemController.createItem);

// PUT route to update an existing item (use :id as the item identifier)
router.put('/:id', itemController.updateItem);

// DELETE route to remove an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;

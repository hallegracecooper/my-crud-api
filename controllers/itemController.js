// controllers/itemController.js
const Item = require('../models/Item');

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const { name, description, price, category, quantity, inStock } = req.body;

    // Validation: Check that all fields are provided
    if (!name || !description || price == null || !category || quantity == null || inStock == null) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newItem = new Item({ name, description, price, category, quantity, inStock });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Retrieve all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Retrieve a single item by its ID
exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No update data provided.' });
    }

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.status(200).json({ message: 'Item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
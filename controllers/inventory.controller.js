const Inventory = require('../models/inventory.model');

// Get Inventory Items
const getInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Inventory Item
const addInventoryItem = async (req, res) => {
  const { name, quantity, price, description, category } = req.body;
  try {
    const item = new Inventory({
      name,
      quantity,
      price,
      description,
      category
    });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Inventory Item
const updateInventoryItem = async (req, res) => {
  const { name, quantity, price, description, category } = req.body;
  try {
    const item = await Inventory.findByIdAndUpdate(
      req.params.id,
      { name, quantity, price, description, category },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Inventory Item
const deleteInventoryItem = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInventoryItems,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem
};

import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, 'Please add an item name'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please add a quantity'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);

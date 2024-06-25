import dbConnect from '../../utils/dbConnect';
import Transaction from '../../models/Transaction';
import Inventory from '../../models/Inventory';

export default async function handler(req, res) {
  await dbConnect();

  // Initialize with some data if the database is empty
  const transactionCount = await Transaction.countDocuments();
  const inventoryCount = await Inventory.countDocuments();

  if (transactionCount === 0) {
    const initialTransactions = [
      { description: 'Initial Transaction 1', amount: 100 },
      { description: 'Initial Transaction 2', amount: 200 }
    ];

    try {
      await Transaction.insertMany(initialTransactions);
    } catch (error) {
      res.status(400).json({ success: false, message: 'Transaction initialization failed' });
      return;
    }
  }

  if (inventoryCount === 0) {
    const initialInventory = [
      { itemName: 'Item 1', quantity: 10, price: 50 },
      { itemName: 'Item 2', quantity: 20, price: 30 }
    ];

    try {
      await Inventory.insertMany(initialInventory);
    } catch (error) {
      res.status(400).json({ success: false, message: 'Inventory initialization failed' });
      return;
    }
  }

  res.status(200).json({ success: true, message: 'Database initialized' });
}

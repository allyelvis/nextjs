import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

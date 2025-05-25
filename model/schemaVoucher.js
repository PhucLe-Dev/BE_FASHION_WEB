const mongoose = require('mongoose');

// Định nghĩa schema cho voucher
const voucherSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  discount_type: {
    type: String,
    enum: ['percent', 'fixed'],
    default: 'percent'
  },
  discount_value: {
    type: Number,
    required: true,
    min: 0
  },
  min_order_value: {
    type: Number,
    default: 0,
    min: 0
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, {
  collection: 'voucher',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Export model
module.exports = voucherSchema;

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductModel",
  },
  orderDate: {
    type: Date,
  },
  transactionId: {
    type: String,
  },
  address: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModal",
  },
});

const OrderModal = model("OrderModal", orderSchema);

module.exports = OrderModal;

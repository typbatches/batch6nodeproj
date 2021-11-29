const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  picture: {
    type: String,
  },
  description: {
    type: String,
  },
});

const ProductModel = model("ProductModel", productSchema);

module.exports = ProductModel;

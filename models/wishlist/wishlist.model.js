const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductModel",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const WishlistModal = model("WishlistModal", wishlistSchema);

module.exports = WishlistModal;

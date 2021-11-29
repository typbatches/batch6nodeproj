const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    // required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
  role: {
    type: String, //USER, ADMIN
  },
});

const UserModal = model("UserModal", userSchema);

module.exports = UserModal;

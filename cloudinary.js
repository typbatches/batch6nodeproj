const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dddgkc9oc",
  api_key: "197582466793291",
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = { cloudinary };

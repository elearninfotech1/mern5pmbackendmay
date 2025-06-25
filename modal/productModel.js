const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  catname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);

const mongoose = require("mongoose");

const subServiceSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  subsname: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subservices", subServiceSchema);

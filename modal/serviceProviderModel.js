const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  subsname: {
    type: String,
    required: true,
  },
  serPName: {
    type: String,
    required: true,
  },
  serBName: {
    type: String,
    required: true,
  },
  serPPhone: {
    type: String,
    required: true,
  },
  serPEmail: {
    type: String,
    required: true,
  },
  serPAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("serviceproviders", serviceProviderSchema);

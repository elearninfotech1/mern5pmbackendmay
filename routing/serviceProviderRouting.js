const express = require("express");
const ServiceProvider = require("../modal/serviceProviderModel");
const serviceProviderRouting = express.Router();

serviceProviderRouting.post("/serviceprovider", async (req, res) => {
  try {
    const senddata = new ServiceProvider(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceProviderRouting.get("/serviceprovider/:subsname", async (req, res) => {
  try {
    const result = await ServiceProvider.find({
      subsname: req.params.subsname,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = serviceProviderRouting;

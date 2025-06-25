const express = require("express");
const SubService = require("../modal/subServiceModel");
const subServiceRouting = express.Router();

subServiceRouting.post("/subservice", async (req, res) => {
  try {
    const senddata = new SubService(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.get("/subservice/:mainsname", async (req, res) => {
  try {
    const result = await SubService.find({ sname: req.params.mainsname });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.get("/subservice/:mainsname/:subsname", async (req, res) => {
  try {
    const result = await SubService.findOne({ subsname: req.params.subsname });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = subServiceRouting;

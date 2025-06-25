const express = require("express");
const Service = require("../modal/serviceModel");
const serviceRouting = express.Router();

serviceRouting.get("/service", async (req, res) => {
  try {
    const result = await Service.find();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.post("/service", async (req, res) => {
  try {
    const senddata = new Service(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.get("/service/:sname", async (req, res) => {
  try {
    const result = await Service.findOne({ name: req.params.sname });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.delete("/service/:sid", async (req, res) => {
  try {
    const result = await Service.deleteOne({ _id: req.params.sid });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.put("/service/:sname", async (req, res) => {
  try {
    const result = await Service.updateOne(
      { name: req.params.sname },
      { $set: req.body }
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = serviceRouting;

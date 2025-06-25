const express = require("express");
const Employee = require("../modal/empModel");
const empRouting = express.Router();

empRouting.post("/emp", async (req, res) => {
  try {
    const emp = new Employee(req.body);
    let result = await emp.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

empRouting.get("/emp", async (req, res) => {
  try {
    const emp = await Employee.find();
    res.send(emp);
  } catch (err) {
    res.send(err);
  }
});

empRouting.get("/emp/:eid", async (req, res) => {
  try {
    const emp = await Employee.findOne({ _id: req.params.eid });
    res.send(emp);
  } catch (err) {
    res.send(err);
  }
});

empRouting.delete("/emp/:eid", async (req, res) => {
  try {
    const emp = await Employee.deleteOne({ _id: req.params.eid });
    res.send(emp);
  } catch (err) {
    res.send(err);
  }
});

empRouting.put("/emp/:eid", async (req, res) => {
  try {
    const emp = await Employee.updateOne(
      { _id: req.params.eid },
      { $set: req.body }
    );
    res.send(emp);
  } catch (err) {
    res.send(err);
  }
});

module.exports = empRouting;

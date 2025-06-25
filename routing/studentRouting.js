const express = require("express");
const Student = require("../modal/studentModel");
const studentRouting = express.Router();

studentRouting.get("/student", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.post("/student", async (req, res) => {
  try {
    const senddata = new Student(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.delete("/student/:sid", async (req, res) => {
  try {
    const sid = req.params.sid;
    const student = await Student.deleteOne({ _id: sid });
    res.send(student);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.get("/student/:sid", async (req, res) => {
  try {
    const data = await Student.findOne({ _id: req.params.sid });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.put("/student/:sid", async (req, res) => {
  try {
    const student = await Student.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    res.send(student);
  } catch (err) {
    res.send(err);
  }
});

module.exports = studentRouting;

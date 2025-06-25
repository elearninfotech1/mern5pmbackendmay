const express = require("express");
const User = require("../modal/userModel");
const userRouting = express.Router();

userRouting.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

userRouting.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

userRouting.get("/user/:uid", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.uid });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

userRouting.delete("/user/:uid", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.uid });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

userRouting.put("/user/:uid", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.uid },
      { $set: req.body }
    );
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = userRouting;

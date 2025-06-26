const express = require("express");
const Register = require("../modal/registerModel");
const jwt = require("jsonwebtoken");
const loginMiddleware = require("../loginMiddleware");
const registerRouting = express.Router();

registerRouting.post("/register", async (req, res) => {
  try {
    const senddata = new Register({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
    });
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

registerRouting.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await Register.findOne({ email: email });
    if (!exists) {
      res.send("no user found");
    } else if (exists.password!== password)) {
      res.send("Invalid");
    } else {
      let payload = {
        user: {
          id: exists._id,
        },
      };
      jwt.sign(
        payload,
        "JSONString1234",
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    }
  } catch (err) {
    res.send(err);
  }
});

registerRouting.get("/admindashboard", loginMiddleware, (req, res) => {
  res.send("Welcome");
});

module.exports = registerRouting;

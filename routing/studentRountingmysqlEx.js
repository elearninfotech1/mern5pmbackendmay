const express = require("express");
const connection = require("../dbconfig/dbconnect");
const studentRouting1 = express.Router();

studentRouting1.post("/student", (req, res) => {
  try {
    const { id, name, phone, address } = req.body;
    connection.query(
      `insert into emp(id,name,phone,address) values("${id}","${name}","${phone}","${address}")`,
      (err, info) => {
        if (err) throw err;
        res.send(info);
      }
    );
  } catch (err) {
    res.send(err);
  }
});

studentRouting1.get("/student", (req, res) => {
  try {
    connection.query(`select * from emp`, (err, info) => {
      if (err) throw err;
      res.send(info);
    });
  } catch (err) {
    res.send(err);
  }
});

studentRouting1.delete("/student/:eid", (req, res) => {
  try {
    const eid = req.params.eid;
    connection.query(`delete from emp where id=${eid}`, (err, info) => {
      if (err) throw err;
      res.send(info);
    });
  } catch (err) {
    res.send(err);
  }
});

studentRouting1.get("/student/:eid", (req, res) => {
  try {
    const eid = req.params.eid;
    connection.query(`select * from emp where id=${eid}`, (err, info) => {
      if (err) throw err;
      res.send(info);
    });
  } catch (err) {
    res.send(err);
  }
});

studentRouting1.put("/student/:eid", (req, res) => {
  try {
    const eid = req.params.eid;
    const { id, name, phone, address } = req.body;
    connection.query(
      `update emp set name="${name}", phone="${phone}", address="${address}" where id=${eid}`,
      (err, info) => {
        if (err) throw err;
        res.send(info);
      }
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = studentRouting1;

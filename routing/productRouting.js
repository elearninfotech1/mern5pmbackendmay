const express = require("express");
const multer = require("multer");
const Product = require("../modal/productModel");
const productRouting = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

productRouting.post("/uploads", upload.single("image"), async (req, res) => {
  //console.log(req.file, req.body);

  const { path, filename } = req.file;
  const { catname } = req.body;
  try {
    const senddata = new Product({ path, filename, catname });
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

productRouting.get("/uploads", async (req, res) => {
  try {
    const result = await Product.find();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = productRouting;

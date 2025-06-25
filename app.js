const express = require("express");
const studentRouting = require("./routing/studentRouting");
const cors = require("cors");
const empRouting = require("./routing/empRouting");
const userRouting = require("./routing/userRouting");
const registerRouting = require("./routing/registerRouting");
const serviceRouting = require("./routing/serviceRouting");
const subServiceRouting = require("./routing/subServiceRouting");
const serviceProviderRouting = require("./routing/serviceProviderRouting");
const productRouting = require("./routing/productRouting");
require("./dbconfig/dbconfig");
let app = express();

app.use(express.json());
app.use(cors());
app.use("/", studentRouting);
app.use("/", empRouting);
app.use("/", userRouting);
app.use("/", registerRouting);
app.use("/", serviceRouting);
app.use("/", subServiceRouting);
app.use("/", serviceProviderRouting);
app.use("/", productRouting);

app.use(express.static("public"));

app.listen(4000, () => console.log("server is stared at 4000"));

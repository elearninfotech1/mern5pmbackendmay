const express = require("express");
const studentRouting1 = require("./routing/studentRountingmysqlEx");
const cors = require("cors");

let app = express();

app.use(express.json());
app.use(cors());

app.use("/", studentRouting1);

app.listen(4000, () => console.log("server is stared at 4000"));

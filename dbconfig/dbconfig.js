const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://elearninfotech1:aUK9OCDYXAe8t6gG@mern5pmmay.1ffqyyv.mongodb.net/?retryWrites=true&w=majority&appName=mern5pmmay")
  .then((con) => {
    //console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

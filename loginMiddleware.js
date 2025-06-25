const jwt = require("jsonwebtoken");

const loginMiddleware = (req, res, next) => {
  let token = req.header("x-token");
  if (!token) {
    res.send("No Token");
  }

  let decode = jwt.verify(token, "JSONString1234");
  req.user = decode.user;
  next();
};

module.exports = loginMiddleware;

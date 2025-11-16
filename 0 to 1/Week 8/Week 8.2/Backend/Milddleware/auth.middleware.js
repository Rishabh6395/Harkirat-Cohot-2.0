const { JWT_SECRET } = require("../config.js");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authorization || !authHeaders.startsWith("Bearer")) {
    return res.status(403).json({
      msg: "something is up!!",
    });
  }

  const token = authHeaders.split("")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userID;

    next();
  } catch (err) {
    return res.status(403).json({});
  }
};
module.exports = {
  authMiddleware,
};

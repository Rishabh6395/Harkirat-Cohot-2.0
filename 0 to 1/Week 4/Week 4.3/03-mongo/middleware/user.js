const { User } = require('../db/index.js')

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(403).json({ msg: "User doesn't exist" });
  }

  // Attach user to request
  req.user = user;
  next();
}

module.exports = userMiddleware;

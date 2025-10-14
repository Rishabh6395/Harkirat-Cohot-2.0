const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const jwtPassword = "123456";
const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/user_app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error("MongoDB connection error:", err));

  
const User = mongoose.model('User', { name: String, email: String, password: String });


app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // Check if user already exists
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    // Create new user
    const user = new User({
      name,
      email: username,
      password
    });

    await user.save();

    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
      token,
      msg: "User created successfully"
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});


app.get("/users", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Fetch all users (or filter by username if you prefer)
    const allUsers = await User.find();

    res.json({
      users: allUsers
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token"
    });
  }
});


app.listen(3000, () => {
  console.log("Code is listening at port 3000");
});

const { Router } = require("express");
const router = Router();
const { User } = require("../db/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const { JWT_SECRET } = require("../config.js"); 

router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const userId = newUser._id; // Get ID from the created user
    const token = jwt.sign(
      {
        userId, 
      },
      JWT_SECRET
    );

    res.json({ msg: "User created successfully", token: token });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Only create token after validation
    const token = jwt.sign(
      {
        userId: user._id, // Consistent naming with signup
      },
      JWT_SECRET
    );
    
    res.json({
      token: token,
    });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

module.exports = router;
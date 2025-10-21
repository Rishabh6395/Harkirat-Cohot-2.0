const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { Mongoose } = require("mongoose");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = User.findOne({
    username: username,
  }).then(function (value) {
    if (value) {
      res.json({
        msg: "User already exists",
      });
    }
  });

  if (existingUser) {
    res.json({
      msg: "User already exists",
    });
    return;
  }

  User.create({
    username,
    password,
  })
    .then(function () {
      res.json({
        msg: "User created Succussfully",
      });
    })
    .catch(function () {
      res.json({
        msg: "something is up!!",
      });
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const respnose = await Course.find({});
  res.json({
    course: respnose,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  // const username = req.headers.username;
  // await User.updateOne({
  //     username: username
  // },{
  //     "$push": {
  //         purchasedCourse: courseId
  //     }
  // })
  // console.log(username)
  // res.json({
  //     msg: "Couse is purchased"
  // })

  const username = req.user.username;

  await User.updateOne(
    { username: username },
    { $push: { purchasedCourse: courseId } }
  );

  console.log(username);

  res.json({ msg: "Course is purchased" });
});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username
  })
  console.log(user.purchasedCourse)

  const course = await Course.find({
    _id: {
        "$in": user.purchasedCourse
    }
  })

  res.json({
    course: course
  })
});

module.exports = router;

// Validation with Zod

const express = require("express");
const zod = require("zod");

const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);
 
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
  // const kidneyLeng = kidney.length
});

app.listen(4000, () => {
  console.log("Your are listening at 4000 port");
});

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
  }
  // put in mongodb
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo created"
  })

});

app.get("/todo", async(req, res) => {
    const todo = await Todo.find()

    res.json({
      todo
    })
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload)

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return
    }
    await Todo.updateMany({
      _id: req.body.id
    }, {
      completed: true
    })
    res.json({
      msg: "Todo marked as completed"
    })

});

app.listen(3000, () => {
  console.log("Port is listning at 3000");
});

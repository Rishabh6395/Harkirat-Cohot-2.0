const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg: "You sent the wrong inputs"
    })
  }
  // put in mongodb

});

app.get("/todo", (req, res) => {

});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload)

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return
    }
    

});

app.listen(3000, () => {
  console.log("Port is listning at 3000");
});

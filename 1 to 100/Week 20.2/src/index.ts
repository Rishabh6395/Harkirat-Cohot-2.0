import express from "express";
//@ts-ignore
import swaggerUi from "swagger-ui-express";
import { openapi } from "./openapispec.js";

const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "rishabh" },
  { id: 2, name: "bharat" }
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredUsers = users.filter(user => user.name === name);
    res.send(filteredUsers);
  } else {
    res.send(users);
  }
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi));

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
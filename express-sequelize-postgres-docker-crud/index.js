require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const taskController = require("./controllers/taskController");

app.get("/tasks", taskController.getTasks);
app.post("/tasks", taskController.createTask);
app.get("/tasks/:taskId", taskController.getTask);
app.put("/tasks/:taskId", taskController.updateTask);
app.delete("/tasks/:taskId", taskController.deleteTask);

app.use("/", (req, res, next) => {
  res.status(200).json({ status: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

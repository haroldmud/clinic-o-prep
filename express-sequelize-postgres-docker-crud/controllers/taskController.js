const { Task } = require("../models");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({ status: true, data: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      overview: req.body.overview,
      description: req.body.description,
    });

    res.status(200).json({ status: true, data: task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};

const getTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId);

    res.status(200).json({ status: true, data: task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId);

    await task.update({
      overview: req.body.overview,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
    });

    res.status(200).json({ status: true, data: task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.taskId);

    await task.destroy();

    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };

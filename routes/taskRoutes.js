const { Router } = require("express");

const taskRoutes = Router();

//get all tasks by (Board) id
taskRoutes
  .route("/:id/board/:id/tasks")
  .get()
  .post();
taskRoutes
  .route("/:id/board/:id/tasks/:id")
  .get()
  .post()
  .put()
  .delete();

module.exports = taskRoutes;

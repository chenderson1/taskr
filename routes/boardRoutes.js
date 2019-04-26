const { Router } = require("express");

const boardRoutes = Router();

// boards by user id
boardRoutes
  .route("/:id")
  .get()
  .post()
  .delete();
boardRoutes
  .route("/board/:id")
  .get()
  .delete();

module.exports = boardRoutes;

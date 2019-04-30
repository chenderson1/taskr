const { Router } = require("express");
const {
  getBoardById,
  getBoardsByUserId,
  postBoard,
  deleteBoard
} = require("../controllers/boardControllers");

const boardRoutes = Router();

// boards by (User) id
boardRoutes
  .route("/:_id")
  .get(getBoardsByUserId)
  .post(postBoard);

//get, delete individual Board by _id
boardRoutes
  .route("/board/:_id")
  .get(getBoardById)
  .delete(deleteBoard);

module.exports = boardRoutes;

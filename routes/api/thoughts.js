//connecting the routes to the server

const router = require("express").Router();

//sets up the controllers taht have been set up in controllers/user-controllers
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller.js");

//set up Get all and Post at /api/thought
router.route("/").get(getAllThoughts).post(createThought);

//set up Get one, PUT, Delete at api/thought/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//set up Post for reaction, /api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reactions").post(addReaction);

//set up Delete for reaction, /api/thoughts/:thoughtId/reactionId

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

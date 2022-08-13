//connecting the routes to the server

const router = require("express").Router();

//sets up the controllers taht have been set up in controllers/user-controllers
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller.js");

//set up Get all and Post at /api/users
router.route("/").get(getAllUsers).post(createUser);

//set up Get one, PUT, Delete at api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//set up Post & delet for friend
router.route("/:userId/friends/:friendId").get(addFriend).put(deleteFriend);

module.exports = router;

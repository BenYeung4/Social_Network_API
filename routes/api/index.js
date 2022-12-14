//connecting the routes to the server

const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");
const userRoutes = require("./user-routes");

//add prefix to routes
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;

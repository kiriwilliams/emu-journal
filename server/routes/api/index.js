const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const entryRoutes = require("./entries");

// User routes
router.use("/users", userRoutes);
// router.use("/users", (req,res)=>res.json("hi"))
// Entry Routes
router.use("/authenticated", entryRoutes);


module.exports = router;

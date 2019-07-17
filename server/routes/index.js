const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// router.use((req, res) =>
//     res.sendFile(path.join(_dirname, "../client/build/index.html"))
// );
// For anything else, render the html page
// router.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
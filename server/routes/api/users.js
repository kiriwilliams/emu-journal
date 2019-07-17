const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/register")
    .post(userController.create);

router.route("/login")
    .post(userController.login);

router.route("/populated")
    .get(userController.populated);

router.route("/findAll")
    .get(userController.findAll);

module.exports = router;
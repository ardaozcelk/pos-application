const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/get-all", userController.get_all_users);
router.get("/get-a-user", userController.get_a_user);

module.exports = router;
const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");

router.post("/add-category", categoryController.post_add_new_category);

module.exports = router;
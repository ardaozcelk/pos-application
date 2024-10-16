const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");

router.get("/get-all", categoryController.get_all_categories);
router.post("/add-category", categoryController.post_add_new_category);
router.put("/update-category", categoryController.put_update_category);
router.delete("/delete-category", categoryController.delete_category);

module.exports = router;
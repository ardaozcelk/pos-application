const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.get("/get-all", productsController.get_all_products);
router.post("/add-product", productsController.post_new_Product);
router.put("/update-product", productsController.put_update_product);
router.delete("/delete-product", productsController.delete_product);

module.exports = router;
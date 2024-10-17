const express = require("express");
const router = express.Router();

const billsController = require("../controllers/bills");

router.get("/get-all", billsController.get_all_Bills);
router.post("/add-bill", billsController.post_new_Bill);

module.exports = router;
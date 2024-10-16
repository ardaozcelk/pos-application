const Category = require("../models/Category");

exports.post_add_new_category= async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Item added successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
}
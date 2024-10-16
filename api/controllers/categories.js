const Category = require("../models/Category");

exports.get_all_categories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
    }
}

exports.post_add_new_category = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Item added successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.put_update_category = async (req, res) => {
    try {
        await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
        res.status(200).json("Item updated successfully.");
    } catch (error) {
        console.log(error);
    }
}

exports.delete_category = async (req, res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body.categoryId });
        res.status(200).json("Item deleted successfully.");
    } catch (error) {
        console.log(error);
    }
}
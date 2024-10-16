const Product = require("../models/Product");

exports.get_all_products = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

exports.post_new_Product = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json("Product added successfully.");
    } catch (error) {
        console.log(error);
    }
}

exports.put_update_product = async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
        res.status(200).json("Product updated successfully.");
    } catch (error) {
        console.log(error);
    }
}

exports.delete_product = async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.body.productId });
        res.status(200).json("Product deleted successfully.")
    } catch (error) {
        console.log(error);
    }
}
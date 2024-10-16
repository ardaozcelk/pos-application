const moongose = require("mongoose");

const ProductSchema = moongose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        img: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        category: {
            type: String,
            require: true
        }
    }, { timestamps: true }
);

const Products = moongose.model("products", ProductSchema);

module.exports = Products;
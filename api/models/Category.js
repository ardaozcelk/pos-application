const moongose = require("mongoose");

const CategorySchema = moongose.Schema(
    {
        title: {
            type: String,
            require: true
        }
    }, { timestamps: true }
);

const Category = moongose.model("categories", CategorySchema);

module.exports = Category;
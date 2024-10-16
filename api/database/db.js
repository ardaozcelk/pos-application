const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB with successfully");

    } catch (error) {
        throw error;
    }
}

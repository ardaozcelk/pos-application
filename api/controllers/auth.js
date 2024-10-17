const User = require("../models/User");

exports.register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json("A new user created successfully.");
    } catch (error) {
        console.log(error);
    }
}
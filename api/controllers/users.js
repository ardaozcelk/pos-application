const User = require("../models/User");

exports.get_all_users = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

exports.get_a_user = async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}
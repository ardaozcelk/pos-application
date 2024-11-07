const User = require("../models/User");
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(200).json("A new user created successfully.");
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send("User not found!");
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
            res.status(200).json(user);
        } else {
            return res.status(403).json("Invalid password!");
        }
    } catch (error) {
        console.log(error);
    }
}
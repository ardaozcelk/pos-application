const Bill = require("../models/Bill");

exports.get_all_Bills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        console.log(error);
    }
}

exports.post_new_Bill = async (req, res) => {
    try {
        const newBill = new Bill(req.body);
        await newBill.save();
        res.status(200).json("Bill added successfully.");
    } catch (error) {
        console.log(error);
    }
}

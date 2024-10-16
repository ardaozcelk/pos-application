const moongose = require("mongoose");

const BillSchema = moongose.Schema(
    {
        customerName: {
            type: String,
            require: true
        },
        customerPhoneNumber: {
            type: String,
            require: true
        },
        paymentMode: {
            type: String,
            require: true
        },
        cartItems: {
            type: Array,
            require: true
        },
        subTotal: {
            type: Number,
            require: true
        },
        tax: {
            type: Number,
            require: true
        },
        totalAmount: {
            type: Number,
            require: true
        }
    }, { timestamps: true }
);

const Bill = moongose.model("bills", BillSchema);

module.exports = Bill;
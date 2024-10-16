const moongose = require("mongoose");

const UserSchema = moongose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }, { timestamps: true }
);

const User = moongose.model("users", UserSchema);

module.exports = User;
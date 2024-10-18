const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 5000;

//database
require("./database/db")();

//routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const billRoute = require("./routes/bills");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

//middlewares
app.use(express.json())
app.use(cors());
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
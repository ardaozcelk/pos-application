const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 5000;

//database
require("./database/db")();

//routes
const categoryRoute = require("./routes/categories");


//middlewares
app.use(express.json())
app.use(cors());
app.use("/api/categories", categoryRoute);



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
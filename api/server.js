const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");




const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES -- 

app.get('/', (req, res) => {
    res.status(201).json({ msg: "Hello from express..."});
});


app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
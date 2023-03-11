const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;
mongoose.connect(url);

mongoose.connection
    .once('open', function () {
        console.log('Successfully connected to Database Product collection ...');
    })
    .on('error', function (err) {
        console.log(err);
    });


const productSchema = new mongoose.Schema({
    id : {
        type : String,
        unique : true
    },
    url : {
        type : String,
    },
    detailUrl : {
        type : String,
    },
    shortTitle : {
        type : String,
    },
    longTitle : {
        type : String,
    },
    
    price : {
        type : Object,
    },
    description : {
        type : String,
    },
    discount : {
        type : String,
    },
    tagline : {
        type : String,
    }






},
    // to store time by default
    { timestamps: true }
);



const Product = new mongoose.model("Product", productSchema);


module.exports = Product;
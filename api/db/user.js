const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;
mongoose.connect(url);

mongoose.connection
    .once('open', function () {
        console.log('Successfully connected to Database User collection ...');
    })
    .on('error', function (err) {
        console.log(err);
    });


const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    mobile: { 
        type: String, 
        required: true, 
        maxlength: 10, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    carts : {
        type : Array, 
    }
},
    // to store time by default
    { timestamps: true }
);



const User = new mongoose.model("User", userSchema);


module.exports = User;
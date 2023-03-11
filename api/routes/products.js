const router = require('express').Router();
const Product = require("../db/product");
const User = require('../db/user');
const verify = require('../verifyToken');


// save default data of products
// const defaultProductData = require('../constant/productData');
// const defaultData = async()=>{
//     try {
//         const data = await Product.insertMany(defaultProductData);
//         console.log("Default data saved successfully");
//     } catch (err) {
//         console.log(err);
//     }
// }

// defaultData();



// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



//Get one product detail
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// add product to carts of user 
router.post("/addcart/:productId", verify, async (req, res) => {
    if (req.user.id === req.body.userId) {
        try {
            let productId = req.params.productId;

            // find product with that productId
            const product = await Product.findById(productId);
            console.log("product with given productId", product);


            // now add the product to the cart of User
            const foundUser = await User.findById(req.body.userId);
            console.log("found user", foundUser);

            // save the product to the carts of foundUser
            foundUser.carts.push(product);
            const updatedUser = await foundUser.save();


            console.log("Added to cart successfully.");
            res.status(201).json({ success: true, user: updatedUser });

        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("You can add products to only your account!");
        res.status(403).json("You can add products to only your account!");
    }
});



// delete product to carts of user 
router.delete("/removecart/:productId", verify, async (req, res) => {
    try {
        let productId = req.params.productId;


        // now delete the product from the cart of User
        const foundUser = await User.findById(req.user.id);

        // delete the product fro, the carts of foundUser
        foundUser.carts = foundUser.carts.filter((prod) => {
            return prod._id != productId;
        })

        updatedUser = await foundUser.save();

        console.log("Deleted from cart successfully.");
        res.status(201).json({ success: true, user: updatedUser });

    } catch (err) {
        console.log(err);
    }
});






module.exports = router;
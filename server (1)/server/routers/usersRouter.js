const {GetWishList} = require("./../controllers/user")
const router = require("express").Router()
const jwt = require("jsonwebtoken");
// Get WishList
router.get("/wishlist",async (req,res)=>{
    const token = jwt.verify("token",process.env.JWT_SECRET)

    const results= await GetWishList(token.user);
    console.log("results:",results)
    if(results)
        res.send(results);
    else{
        res.status(200).send("User Not Found")
    }
    })
  

module.exports=router
const User= require("./../models/userModel")

const GetWishList = async (userId)=>{
    const obj = await User.find({"_id":userId});
    console.log("obj",obj)
    
    return(obj.wishlist)
}

module.exports={
    GetWishList
}
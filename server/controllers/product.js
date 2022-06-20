const Product = require('./../models/productModel')

const  findByName  =async  (name)=>{
    name=name.toUpperCase();
    const results = await Product.find(
        {"name":{$regex:name}}
    )
    return(results)
}   
const filterByPrice= async (price)=>{
    const objs =await Product.find({
        "price":{
            $lte:price
        }
    })
    return(objs);
}
const CreateProduct = async (obj)=>{
    const entry = new Product(obj)
    // console.log()
    try{
        await entry.save()
        // res.send(entry.tagsUI);
      }
      catch(err){
          console.log("Error occured while saving the entry",err)
      }

    return(entry)
}
const findByID = async (list)=>{
    const obj = await Product.find({
        '_id':{
            $in:list
        }
    })
    return(obj)
}
module.exports = {
    findByName,CreateProduct,filterByPrice,findByID
}
const tags = require('./../models/tagsModel')

const findBytag = async (name)=>{
    const obj = await tags.findOne({"name":name})
    console.log(obj, typeof obj)
    if(obj == null){
        return([])
    }
    else{
    return((obj.items))}
}

module.exports ={
    findBytag
}

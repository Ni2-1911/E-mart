const router= require('express').Router()
const tags = require('./../models/tagsModel')
const {findByID} = require('./../controllers/product')
const {findBytag} = require('./../controllers/tags')
router.get('/',async (req,res)=>{
    res.send("Hi");
})
router.post('/',async (req,res)=>{
    const entries= await tags.findOne({"name":req.body.name})
   
    if(entries != null){
       entries.items.push(req.body.items)
        await entries.save()
        res.send(entries)
    }
    else{
        const entry = new tags(req.body);
        try{
            await entry.save()
        }
        catch{
            console.log("Error occured while saving the entry")
        }
        res.send(JSON.stringify(entry))
    }
})
router.post("/find",async (req,res)=>{
    var results= await findBytag(req.body.name);
    results = await findByID(results)
    res.send(results);
})



module.exports = router;

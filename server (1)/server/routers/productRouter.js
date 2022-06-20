const router = require("express").Router();
const Product = require("../models/productModel");

const {CreateProduct , findByName, filterByPrice} = require('./../controllers/product');
const { route } = require("./tagsRouter");
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.post('/create', async (req,res)=>{
  const results = CreateProduct(req.body);
  res.send(results)
})

router.post('/findByName',async(req,res)=>{
  const results= await findByName(req.body.name);
  res.send(results);
})
router.post('/filterByPrice',async(req,res)=>{
  const results= await filterByPrice(req.body.price);
  res.send(results);
})
module.exports = router;
  
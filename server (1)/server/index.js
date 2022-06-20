const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

// set up server
const Product = require("./models/productModel");
const {Customer} = require("./models/customerModel");

// connect to mongoDB
connection_url = "mongodb://localhost:27017/mydb"
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
  // connection_url
);


const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-auth-template-tutorial.netlify.app",
    ],
    credentials: true,
  })
);


// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));

app.use('/product',require("./routers/productRouter"));
app.use('/users',require("./routers/usersRouter"))

app.use("/tags",require('./routers/tagsRouter.js'));
app.use("/wishlist",require('./routers/wishlistRouter.js'))
// app.get('/search/:key', async (req, res) => {
//    let result = await Product.find({
//     "$or" : [
//       {
//         name : { $regex : req.params.key}
//       }
//     ]
//    });
   
//    res.send(result);
// });

// Ecart
// 6jzyu7NVRqjdhUcm


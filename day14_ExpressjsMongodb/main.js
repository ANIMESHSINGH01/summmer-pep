require("dotenv").config();
const {productsCollection} = require("./database/db.js");
// require("./database/db.js");
const {getProduct} = require("./controllers/productControllers.js");

const express = require("express");

const app = express();
app.use(express.json());

app.get("/products",getProduct);

app.post("/products",async(req,res)=>{
  const body = req.body;
  if(body.title || body.price){
    res.status(400);
    res.json({
      status:"fail",
      message:"Title and price are required",
    });
    return;
  }
  const result = await productsCollection.insertOne(body);
  res.json({
    status: "success",
    data:{
      product: result,
    },
  });

});

app.listen(process.env.PORT, () => {
  console.log(`----------- App started on : ${process.env.PORT} -------------`);
});

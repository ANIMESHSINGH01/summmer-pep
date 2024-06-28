const {productsCollection} = require("fs/promises");

const getProduct = async(req,res)=>{
  const products = await productsCollection.find().toArray();

  res.json({
    status: "success",
    data: {
      products:products,
    },

  });

};

module.exports = {
  getProduct,

};
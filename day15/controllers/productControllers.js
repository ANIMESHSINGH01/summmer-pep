const { response } = require("express");
const { productModel } = require("../models/productModel.js");

const checkid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      res.status(400);
      res.json({
        status: fail,
        message: " Product Not Found !",
      });
      return;
    }
    next();
  } catch (err) {
    if (err.name === "CastError") {
      res.status(400);
      res.json({
        status: "fail",
        message: "Invalid product ID!",
      });
      return;
    }
    res.status(500);
    res.json({ status: "fail", message: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.send({
    status: "success",
    data: {
      products,
    },
  });
};

const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await productModel.create(body);
    res.status(201);
    res.json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      status: "fail",
      message: "Internal Server Error",
      info: err,
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const newProduct = await productModel.findOneAndReplace({ _id: id }, body, {
      new: true,
    });
    res.json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      status: "fail",
      message: "Internal Server Error",
      info: err,
    });
  }
};

const updateProduct = async (req, res) => {

    try{
        const { id } = req.params;
        const body = req.body;
        body.updatedAt = Date.now();
      
        const newProduct = await productModel.findOneAndUpdate({ _id: id }, body, {
          new: true,
        });
        res.status(200);
        res.json({
          status: "success",
          data: {
            product: newProduct,
          },
        });
    }catch(err){
        res.status(500);
        res.json({
            status:"fail",
            message:"Internal server error! ",
            info:err,
        });
    };

};
const deleteProduct = async (req, res) => {

    try{
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
        res.status(204);
        res.json({
          status: "success",
          data: {
            product: null,
          },
        });
    }catch(err){
        res.status(500);
        res.json({
            status:"fail",
            message:"Internal server error! ",
            info:err,
        });
    };

};

module.exports = {
  getProducts,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  checkid,
};

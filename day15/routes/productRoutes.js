const express = require("express");
const { getProducts, createProduct,replaceProduct,updateProduct,deleteProduct,checkid } = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/:id").put(checkid, replaceProduct).delete(checkid,deleteProduct).patch(checkid,updateProduct);

module.exports = productRouter;
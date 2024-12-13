import express from "express";

import {
  createProduct,
  deleteProduct,
  getProductByid,
  getProducts,
  updateProduct,
} from "../controller/product.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/:id",getProductByid);

productRouter.post("/", createProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

export default productRouter;

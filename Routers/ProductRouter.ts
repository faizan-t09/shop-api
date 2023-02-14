import * as express from "express";
import {
  addProduct,
  deleteById,
  getAllProducts,
  getById,
  toggleWishlisted,
} from "../Controllers/ProductController";

const productRouter = express.Router();

productRouter.get("/getAll", getAllProducts);

productRouter.get("/:id", getById);

productRouter.delete("/:id", deleteById);

productRouter.post("/addProduct", addProduct);

productRouter.post("/wishlist/:id", toggleWishlisted);
export default productRouter;

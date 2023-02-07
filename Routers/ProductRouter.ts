import * as express from "express";
import {
  addProduct,
  deleteById,
  getAllProducts,
  getById,
  toggleWishlisted
} from "../Controllers/ProductController";

const productRouter = express.Router();

productRouter.get("/getAll", (req, res) => {
  getAllProducts(req, res);
});

productRouter.get("/:id", (req, res) => {
  getById(req, res);
});

productRouter.delete("/:id", (req, res) => {
  deleteById(req, res);
});

productRouter.post("/addProduct", (req, res) => {
  addProduct(req, res);
});

productRouter.post("/wishlist/:id", (req, res) => {
  toggleWishlisted(req, res);
});
export default productRouter;

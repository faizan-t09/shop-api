import * as express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../Controllers/CartController";

const cartRouter = express.Router();

cartRouter.get(`/`, getCart);

cartRouter.post(`/:id`, addToCart);

cartRouter.delete(`/:id`, removeFromCart);

export default cartRouter;

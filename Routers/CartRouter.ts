import * as express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../Controllers/CartController";

const cartRouter = express.Router();

cartRouter.get(`/`, (req, res) => {
  getCart(req, res);
});

cartRouter.post(`/:id`, (req, res) => {
  addToCart(req, res);
});

cartRouter.delete(`/:id`, (req, res) => {
  removeFromCart(req, res);
});

export default cartRouter;

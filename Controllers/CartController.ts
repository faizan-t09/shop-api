import { Request, Response } from "express";
import CartModel from "../Models/CartModel";
import ProductModel from "../Models/ProductModel";
import { stringify } from "querystring";

export const getCart = (req: Request, res: Response) => {
  CartModel.find({}, { _id: 0 })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((error) => {
      res.status(400).json(`Failed to fetch cart : ${error}`);
    });
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const cartProduct = await CartModel.findOne({ id: req.params.id });
    if (cartProduct) {
      cartProduct.count += 1;
      await cartProduct.save();
      res.status(200).json(`Added to cart`);
    } else {
      const product = await ProductModel.findOne(
        { id: req.params.id },
        { _id: 0 }
      );
      if (product) {
        const cartEntry = new CartModel();
        cartEntry.id = product.id;
        cartEntry.title = product.title!;
        cartEntry.description = product.description!;
        cartEntry.image = product.image!;
        cartEntry.price = product.price!;
        cartEntry.wishlisted = product.wishlisted!;
        cartEntry.count = 1;
        await cartEntry.save();
        res.status(200).json(`Added to cart`);
      }
    }
  } catch (error) {
    res.status(400).json(`Failed to add product to cart : ${error}`);
  }
};

export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const cartProduct = await CartModel.findOne({ id: req.params.id });
    if (cartProduct)
      if (cartProduct!.count > 1) {
        cartProduct!.count -= 1;
        await cartProduct!.save();
        res.status(200).json(`Removed product from cart`);
      } else {
        cartProduct?.delete();
        res.status(200).json(`Removed product from cart`);
      }
    else res.status(400).json(`No such product in cart`);
  } catch (error) {
    res.status(400).json(`Failed to delete product from cart : ${error}`);
  }
};

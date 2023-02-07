import { Request, Response } from "express";
import ProductModel from "../Models/ProductModel";

export const getAllProducts = async (req: Request, res: Response) => {
  ProductModel.find({}, { _id: 0 })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).send(`Failed to save product : ${error}`);
    });
};

export const addProduct = async (req: Request, res: Response) => {
  const newProduct = new ProductModel();
  newProduct.id = req.body.id;
  newProduct.title = req.body.title;
  newProduct.description = req.body.description;
  newProduct.image = req.body.image;
  newProduct.price = req.body.price;
  newProduct
    .save()
    .then(() => {
      res.status(200).send(`Product saved sucessfully`);
    })
    .catch((error) => {
      res.status(400).send(`Failed to save product : ${error}`);
    });
};

export const getById = async (req: Request, res: Response) => {
  ProductModel.findOne({ id: req.params.id }, { _id: 0 })
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        throw new Error(`No product for id : ${req.params.id}`);
      }
    })
    .catch((error) => {
      res
        .status(400)
        .send(`Failed to fetch product for id ${req.params.id} : ${error}`);
    });
};

export const deleteById = (req: Request, res: Response) => {
  ProductModel.findOneAndRemove({ id: req.params.id }, { _id: 0 })
    .then((product) => {
      if (product) {
        res.status(200).send(`Deleted product : \n${product}`);
      } else {
        throw new Error(`No product for id : ${req.params.id}`);
      }
    })
    .catch((error) => {
      res
        .status(400)
        .send(`Failed to delete product for id ${req.params.id} : ${error}`);
    });
};

export const toggleWishlisted = (req: Request, res: Response) => {
  ProductModel.findOne({ id: req.params.id })
    .then((product) => {
      if (product) {
        product.wishlisted = !product.wishlisted;
        product.save().then(() => {
          res.status(200).send(`Toggled wishlist for product : \n${product}`);
        });
      } else {
        throw new Error(`No product for id : ${req.params.id}`);
      }
    })
    .catch((error) => {
      res
        .status(400)
        .send(`Failed Wishlist product for id ${req.params.id} : ${error}`);
    });
};

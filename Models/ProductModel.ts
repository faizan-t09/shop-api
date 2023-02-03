import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    image: String,
    price: Number,
    wishlisted: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;

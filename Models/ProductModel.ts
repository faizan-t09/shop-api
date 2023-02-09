import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    wishlisted: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;

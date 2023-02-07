import * as mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    wishlisted: { type: Boolean, required: true },
    count: { type: Number, required: true },
  },
  { versionKey: false }
);

const CartModel = mongoose.model("Usercart", CartSchema);

export default CartModel;

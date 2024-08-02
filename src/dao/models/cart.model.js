import mongoose from "mongoose"

const cartCollection = "carts"; //Nombre de la colecion

//Modelo de Schema
const cartSchema = new mongoose.Schema({
    products: {
        type: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "products" }, quantity: Number }],
        default: [],
    },
});

cartSchema.pre("findOne", function() {
    this.populate("products.product");
});

export const cartModel = mongoose.model(cartCollection, cartSchema);

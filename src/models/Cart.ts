import mongoose, { Document, PopulatedDoc, Schema } from "mongoose";
import { IUser } from "./User";
import { IProduct } from "./Product";

export interface ICart {
    userId: PopulatedDoc<IUser & Document>,
    productId: PopulatedDoc<IProduct & Document>[]
}

const CartSchema: Schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Cart = mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
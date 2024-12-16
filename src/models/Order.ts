import mongoose, { Document, PopulatedDoc, Schema } from "mongoose";
import { IProduct } from "./Product";

export interface IOrder {
    date: Date,
    items: PopulatedDoc<IProduct & Document>[],
    status: number
}

const OrderSchema: Schema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    status: {
        type: Number,
    }
}, {
    timestamps: true
})

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
import mongoose, { Document, PopulatedDoc, Schema } from "mongoose";
import { IUser } from "./User";
import { IProduct } from "./Product";

export interface IWishlist {
    userId: PopulatedDoc<IUser & Document>,
    productId: PopulatedDoc<IProduct & Document>[]
}

const WishlistSchema: Schema = new Schema({
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

const Wishlist = mongoose.model<IWishlist>('Wishlist', WishlistSchema);

export default Wishlist;
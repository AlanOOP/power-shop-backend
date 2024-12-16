import mongoose, { Document, PopulatedDoc, Schema } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct extends Document {
    name: string,
    shortDescription: string,
    description: string,
    purchagePrice: number,
    sellingPrice: number,
    images: string[]
    category: PopulatedDoc<ICategory & Document>
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    purchagePrice: {
        type: Number
    },
    sellingPrice: {
        type: Number
    },
    images: [
        String,
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
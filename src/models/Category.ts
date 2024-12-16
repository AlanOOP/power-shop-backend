import mongoose, { Document, Schema, SchemaOptions } from "mongoose";

export interface ICategory extends Document {
    name: string
}

const CategorySchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
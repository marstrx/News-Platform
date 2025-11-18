import mongoose, { Schema } from "mongoose";

const articalSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 100 },
    slug: { type: String, unique: true },
    content: { type: String, required: true },
    image: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articalSchema);
// Export Article modal
export default Article;

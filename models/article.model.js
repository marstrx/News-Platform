import mongoose, { Schema } from "mongoose";
import slugify from "slugify";

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

articalSchema.pre("validate", async function (next) {
  if (!this.title) return next();

  // Generate base slug
  let baseSlug = slugify(this.title, { lower: true, strict: true });
  let slug = baseSlug;

  // Check if slug already exists
  const existingArticle = await mongoose.models.Article.findOne({ slug });

  if (
    existingArticle &&
    existingArticle._id.toString() !== this._id.toString()
  ) {
    let counter = 2;
    while (
      await mongoose.models.Article.findOne({ slug: `${baseSlug}-${counter}` })
    ) {
      counter++;
    }
    slug = `${baseSlug}-${counter}`;
  }

  this.slug = slug;
  next();
});

const Article = mongoose.model("Article", articalSchema);
// Export Article modal
export default Article;

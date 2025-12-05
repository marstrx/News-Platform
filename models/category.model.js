import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 50,
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
  },
});

categorySchema.pre("validate", async function (next) {
  if (!this.name) return next();

  let baseSlug = slugify(this.name, { lower: true, strict: true });
  let slug = baseSlug;

  const existingCategory = await mongoose.models.Category.findOne({ slug });

  if (
    existingCategory &&
    existingCategory._id.toString() !== this._id.toString()
  ) {
    let counter = 2;
    while (
      await mongoose.models.Category.findOne({ slug: `${baseSlug}-${counter}` })
    ) {
      counter++;
    }
    slug = `${baseSlug}-${counter}`;
  }

  this.slug = slug;
  next();
});

const Category = mongoose.model("Category", categorySchema);
export default Category;

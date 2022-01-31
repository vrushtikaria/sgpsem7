import mongoose from "mongoose";
const categoeySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categoeySchema);

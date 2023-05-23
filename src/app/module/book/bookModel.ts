import mongoose, { Schema, model } from "mongoose";
import { IBook } from "./bookinterface";

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: [
    {
      type: String,
      required: true,
    },
  ],
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Mixed,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

const Book = model<IBook>("Book", bookSchema);

export default Book;

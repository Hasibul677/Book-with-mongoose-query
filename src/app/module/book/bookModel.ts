import mongoose, { Schema, model } from "mongoose";
import { IBook, IBookMethods, IBookModel } from "./bookinterface";

const bookSchema = new Schema<IBook, IBookModel, IBookMethods>({
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

bookSchema.method("fullTitle", function fullTitle() {
  return this.title;
});

bookSchema.static("getBooks", async function getBooks() {
  const books = await this.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featuredbooks: {
          $cond: {
            if: {
              $and: [{ $gt: ["$rating", 4.5] }],
            },
            then: { featured: "BestSeller" },
            else: { featured: "Popular" },
          },
        },
      },
    },
    {
      $project: {
        rating: true,
        featuredbooks: true,
      },
    },
    {
      $sort: {
        rating: -1,
      },
    },
  ]);
  return books;
});

const Book = model<IBook, IBookModel>("Book", bookSchema);

export default Book;

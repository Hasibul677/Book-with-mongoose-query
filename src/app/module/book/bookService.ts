import Book from "./bookModel";
import { IBook } from "./bookinterface";

export const createBook = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload);
  const result = await book.save();
  return result;
};

export const getallKindsOfBook = async (): Promise<Array<IBook>> => {
  const books = await Book.find();
  return books;
};

export const getBookbyGenre = async (): Promise<Array<IBook>> => {
  const books = await Book.find({ genre: "Fantasy" });
  return books;
};

export const getBookbyGenreAndPublisher = async (): Promise<Array<IBook>> => {
  const books = await Book.find({
    $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }],
  });
  return books;
};

export const staticMethod = async (): Promise<Array<IBook>> => {
  const books = await Book.aggregate([
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
};

export const updatePrice = async (): Promise<object> => {
  const books = await Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
    [{ $set: { price: { $toInt: "$price" } } }],
    { multi: true }
  );

  return books;
};

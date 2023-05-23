import Book from "./bookModel";
import { IBook } from "./bookinterface";

export const createNewBookInfo = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload);
  await book.save();
  return book;
};

export const getBookSearchByGenre = async (): Promise<Array<IBook>> => {
  const books = await Book.find({ genre: "Fantasy" });
  return books;
};

export const getBookSearchByGenreAndPublisher = async (): Promise<Array<IBook>> => {
  const books = await Book.find({
    $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }],
  });
  return books;
};

export const getMatchstaticMethod = async (): Promise<Array<IBook>> => {
  const books = Book.getAllMatchedBook();

  return books;
};

export const updatePriceStringToInt = async (): Promise<object> => {
  const books = await Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
    [{ $set: { price: { $toInt: "$price" } } }],
    { multi: true }
  );

  return books;
};

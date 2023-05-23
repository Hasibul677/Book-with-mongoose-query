import { Model } from "mongoose";

interface IReview {
  user: string;
  comment: string;
}

type Price = string | number;

export interface IBook {
  title: string;
  author: Array<string>;
  genre: string;
  publicationYear: number;
  rating: number;
  price: Price;
  publisher: {
    name: string;
    location: string;
  };
  reviews: Array<IReview>;
}

export interface IBookMethods {
  fullTitle(): string;
}

export interface IBookModel extends Model<IBook, {}, IBookMethods> {
  getBooks(): Array<IBook>;
}

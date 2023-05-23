import { Model } from "mongoose";

interface IReview {
  user: string;
  comment: string;
}

export interface IBook {
  title: string;
  author: Array<string>;
  genre: string;
  publicationYear: number;
  rating: number;
  price: string | number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: Array<IReview>;
}

export interface IBookMethods {
  ratingInfo(): string;
}

export interface IBookModel extends Model<IBook, {}, IBookMethods> {
  getAllMatchedBook(): Array<IBook>;
}

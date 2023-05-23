import { NextFunction, Request, Response } from "express";
import {
  createNewBookInfo,
  getBookSearchByGenre,
  getBookSearchByGenreAndPublisher,
  getMatchstaticMethod,
  updatePriceStringToInt,
} from "./bookService";

// Task 1
export const createBookInfoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await createNewBookInfo(req.body);

  res.status(201).json({
    message: "Successfully Book Information Created!",
    book,
  });
};

// Task 2:
export const getBookSearchByGenreController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBookSearchByGenre();

  res.status(200).json({
    message: "Successfully get all books information",
    books,
  });
};

// Task 3:
export const getBookSearchByGenreAndPublisherController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBookSearchByGenreAndPublisher();

  res.status(200).json({
    message: "Successfully get all books information",
    books,
  });
};

// Task 4:
export const staticMehodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getMatchstaticMethod();

  res.status(200).json({
    message: "Success",
    books,
  });
};

// Task 5:
export const updatePriceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await updatePriceStringToInt();

  res.status(200).json({
    message: "Success",
    books,
  });
};

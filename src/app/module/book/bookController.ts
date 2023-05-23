import { NextFunction, Request, Response } from "express";
import {
  createBook,
  getBookbyGenre,
  getBookbyGenreAndPublisher,
  getallKindsOfBook,
  staticMethod,
  updatePrice,
} from "./bookService";

// Task 1
export const createBookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await createBook(req.body);

  res.status(201).json({
    message: "Successfully Book Information Created!",
    book,
  });
};

// get all method creating for checking the update value
export const getAllBooksController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getallKindsOfBook();

  res.status(200).json({
    message: "Successfully getting all books information",
    books,
  });
};

// Task 2:
export const getBookgenreFantasysController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBookbyGenre();

  res.status(200).json({
    message: "Successfully get all books information",
    books,
  });
};

// Task 3:
export const getSciFiRoliBooksController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBookbyGenreAndPublisher();

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
  const books = await staticMethod();

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
  const books = await updatePrice();

  res.status(200).json({
    message: "Success",
    books,
  });
};

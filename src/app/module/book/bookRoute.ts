import express from "express";
import { createBookController, getAllBooksController, getBookgenreFantasysController, getSciFiRoliBooksController, staticMehodController, updatePriceController } from "./bookController";

const router = express();


router.post("/create-book", createBookController);
router.get("/get/all/books", getAllBooksController);
router.get("/genre/Fantasy", getBookgenreFantasysController);
router.get("/genre/Sci-Fi/published/Roli-Books", getSciFiRoliBooksController);
router.get("/staticMethod", staticMehodController);
router.put("/update/price-string-to-integer", updatePriceController);


export default router;
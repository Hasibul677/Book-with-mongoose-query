import express from "express";
import {
  createBookInfoController,
  getBookSearchByGenreController,
  getBookSearchByGenreAndPublisherController,
  staticMehodController,
  updatePriceController,
} from "./bookController";

const router = express();

router.post("/create-new-book", createBookInfoController);
router.get("/searchby/genre/Fantasy", getBookSearchByGenreController);
router.get("/searchby/genre/Sci-Fi/published/Roli-Books", getBookSearchByGenreAndPublisherController);
router.get("/staticMethod", staticMehodController);
router.put("/update/price-string-to-integer", updatePriceController);

export default router;

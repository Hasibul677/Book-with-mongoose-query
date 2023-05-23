import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// import all the route 

import BookRouter from "./app/module/book/bookRoute"


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/book/api/v1", BookRouter)



export default app;
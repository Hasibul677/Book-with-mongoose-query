import mongoose from "mongoose";
import app from "./app";

const port = 5000;

const databaseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://CodeWithMongoose:7TIlqnrJc1hAL8Pd@cluster0.hn6ma.mongodb.net/Book?retryWrites=true&w=majority"
    );

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log("Database connected failed !");
  }
};

databaseConnect();

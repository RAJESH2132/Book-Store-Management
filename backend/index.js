import express from "express";
import { PORT, mongoDBURl } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware to handle CORS Policy
//Option 1: Allow all origins with default of cors(*)
app.use(cors());

//option2: allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Mern Stack tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURl)
  .then(() => {
    console.log("App connected to Database");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/products", productRouter);

console.log(process.env.MONGO_URI);
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));

import express from "express";
import connectDB from "./database.js";
import courseRoutes from "./routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();


app.use("/courses", courseRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

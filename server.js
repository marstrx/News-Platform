import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import articleRouter from "./routes/article.routes.js";
dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Articles Routes
app.use("/api/articles" ,articleRouter);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
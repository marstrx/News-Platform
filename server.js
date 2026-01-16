import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import articleRouter from "./routes/article.routes.js";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/admin.routes.js";
dotenv.config();
connectDB();

const app = express();

// cors
app.use(cors({
  origin : "http://localhost:5173",
  credentials :true
}));

// cookies
app.use(cookieParser());

// Middleware to parse JSON
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Articles Routes
app.use("/api/articles" ,articleRouter);

// Admin only routes 
app.use("/api/dashboard" , adminRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
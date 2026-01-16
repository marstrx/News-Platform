import express from "express";
import fetchAllUsers from "../controllers/adminController/fetchAllUsers.controller.js"
import protect from "../middlewares/auth.middleware.js";
import adminOnly from "../middlewares/admin.middelware.js";

const adminRoutes = express.Router();


adminRoutes.get("/users", protect , adminOnly ,fetchAllUsers );

export default adminRoutes;
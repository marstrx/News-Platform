import express from "express";
import registerUser from "../controllers/authController/register.controller.js";
import login from "../controllers/authController/login.controller.js";

// create router 
const router = express.Router();

// Register Router 
router.post("/register",registerUser);

// login Router
router.post("/login", login);

export default router;
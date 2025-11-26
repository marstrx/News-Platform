import express from "express";
import registerUser from "../controllers/authController/register.controller.js";
import login from "../controllers/authController/login.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

export default router;
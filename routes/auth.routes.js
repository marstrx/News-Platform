import express from "express";
import registerUser from "../controllers/authController/register.controller.js";
import login from "../controllers/authController/login.controller.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);


router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to your profile!",
    user: req.user,
  });
});

export default router;
import express from "express";
import registerUser from "../controllers/authController/register.controller.js";
import login from "../controllers/authController/login.controller.js";
import protect from "../middlewares/auth.middleware.js";
import logout from "../controllers/authController/logout.controller.js";

const router = express.Router();


router.get("/me", protect, (req, res) => {
  res.json({
    success: true,
    userId: req.userId
  });
});

router.post("/register", registerUser);
router.post("/login", login);
// logout
router.post("/logout" , logout);

export default router;
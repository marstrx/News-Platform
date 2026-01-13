import express from "express";
import registerUser from "../controllers/authController/register.controller.js";
import login from "../controllers/authController/login.controller.js";
import protect from "../middlewares/auth.middleware.js";
import logout from "../controllers/authController/logout.controller.js";
import User from "../models/user.model.js";

const router = express.Router();


router.get("/me", protect, async(req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if(!user){
      return res.status(404).json({
        succuss:false,
        message :"user not found"
      })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    
  }
});

router.post("/register", registerUser);
router.post("/login", login);
// logout
router.post("/logout" , logout);

export default router;
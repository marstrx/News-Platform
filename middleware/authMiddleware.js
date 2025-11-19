import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const protect = async (req, res, next) => {
  let token;
  // Check for token in headers

  if (req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ){
    token = req.headers.authorization.split(" ")[1];
  };

//   if theres no token
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token",
    });
  }

  try {
    // decode token
    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};


export default protect;
import User from "../../models/user.model.js";
import bcrypt from "bcrypt";

// Register logic
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required!",
      });
    }
    // check if user exist
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    // If the user exist
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered!",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    //Create new user
    const newUser = new User({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await newUser.save();

    // Success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Server Error
    return res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

export default registerUser;

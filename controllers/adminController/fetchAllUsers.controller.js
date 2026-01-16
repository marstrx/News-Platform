import User from "../../models/user.model.js";

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Users found",
      });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during fetching users",
    });
  }
};

export default fetchAllUsers;
const axios = require("axios");
const User = require("../model/userModel");

const googleAuth = async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange code for tokens
    const { data } = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:5173", // must match Google
        grant_type: "authorization_code",
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // Get user info
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    const { name, email, picture } = userInfo.data;

    // Save or update user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, image: picture });
    } else if (!user.image && picture) {
      user.image = picture;
      await user.save();
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Google Auth error:", err.response?.data || err.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = { googleAuth };

const asyncHandler = require("express-async-handler");
const ChatAppUser = require("../models/userModel");

const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log(name,email,password,pic);
  if (!name || !email || !password) {
    req.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExist = await ChatAppUser.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = new ChatAppUser({
    name,
    email,
    password,
    pic,
  });
  await user.save()
  console.log(user)
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

module.exports = { registerUser };

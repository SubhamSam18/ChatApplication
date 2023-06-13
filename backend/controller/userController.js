const asyncHandler = require("express-async-handler");
const ChatAppUser = require("../models/userModel");

const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log(name, email, password, pic);
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
  await user.save();
  console.log(user);
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

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log("Inside authUser");
  const user = await ChatAppUser.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await ChatAppUser.find(keyword).find({_id: {$ne: req.user._id}});
  // console.log(users);
  res.send(users);
  // console.log(keyword);
});

module.exports = { registerUser, authUser, allUsers };

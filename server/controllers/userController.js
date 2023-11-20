const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//register
module.exports.register = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

// login
module.exports.login = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log(req.body);
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    // 토큰 생성
    const token = jwt.sign({userId: user._id}, 'secretToken');
    // 토큰 저장
    await User.updateOne({ _id: user._id }, { $set: { token } });
    res.cookie(user.token, { 
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    delete user.password;
    return res.json({ status: true, token, user });
  } catch (ex) {
    next(ex);
  }
};

// logout
module.exports.logOut = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) 
      return res.json({ msg: "User id is required " });
    user.token = null;
    await user.save();
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
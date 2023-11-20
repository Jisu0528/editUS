const {
  register,
  login,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout/:id", logOut);

module.exports = router; 
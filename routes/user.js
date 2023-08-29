const express = require("express");
const router = express.Router();

const { login, signup } = require("../Controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

router.get("/student", auth, isStudent, (req, res) => {
  return res.json({
    success: true,
    message: "Welcome to the Protected route for students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  return res.json({
    success: true,
    message: "Welcome to the Protected route for admin",
  });
});

module.exports = router;

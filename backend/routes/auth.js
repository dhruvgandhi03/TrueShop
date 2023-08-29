const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const bcrypt = require("bcryptjs");

  if (!name || !email || !password) {
    return res.status(422).json({ message: "fail" });
  }

  try {
    const userexist = await User.findOne({ email: email });

    if (userexist) {
      return res.status(422).json({ message: "ematched" });
    }

    const user = new User({ name, email, password });

    await user.save();

    res.status(201).json({ message: "registration is successful" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    console.log("fill data working");
    return res.status(400).json({ message: "fail" });
  }

  const userlogin = await User.findOne({ email: email });

  if (userlogin) {
    const userpassword = await bcrypt.compare(password, userlogin.password);

    if (!userpassword) {
      return res.status(400).json({ message: "fail" });
    } else {
      return res.status(201).json({ message: "pass" });
    }
  } else {
    return res.json({ message: "fail" });
  }
});

module.exports = router;

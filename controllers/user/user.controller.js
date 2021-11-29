const UserModal = require("../../models/user/user.model");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });

exports.signinController = async (req, res) => {
  try {
    const user = await UserModal.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(404)
        .json({ error: "Invalid user", data: null, code: 404 });

    //check password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePassword)
      return res
        .status(400)
        .json({ error: "Invalid credentials", data: null, code: 404 });

    //generate token
    const token = await jwt.sign(
      { _id: user._id.toString() },
      process.env.SECRET_KEY
    );
    user.password = undefined;
    res.status(200).json({ data: { user, token }, err: null, code: 200 });
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: "Something went wrong", data: null, code: 500 });
  }
};

exports.signupController = async (req, res) => {
  const isAdmin = req.query.isAdmin; // true || false

  const $isAdmin = isAdmin === "true" ? true : false;

  try {
    if (!$isAdmin) {
      const isExist = await UserModal.findOne({ email: req.body.email });
      if (isExist) {
        return res.status(400).json({
          error: "User already exists",
          data: null,
          code: 400,
        });
      }
      const newUser = new UserModal({
        email: req.body.email,
        password: req.body.password,
        role: "USER",
      });

      const salt = await bcrypt.genSalt(); //encrypted string
      const hashedPassword = await bcrypt.hash(newUser.password, salt);
      newUser.password = hashedPassword;
      await newUser.save();
      newUser.password = undefined;
      res.json({ data: newUser, err: null, code: 200 });
    } else {
      const newUser = new UserModal({
        email: req.body.email,
        password: req.body.password,
        role: "ADMIN",
      });
      const salt = await bcrypt.genSalt(); //encrypted string
      const hashedPassword = await bcrypt.hash(newUser.password, salt);
      newUser.password = hashedPassword;
      await newUser.save();
      res.json({ data: newUser, err: null, code: 200 });
    }
  } catch (err) {
    console.log("err: ", err);
    res
      .status(500)
      .json({ error: "Something went wrong", data: null, code: 500 });
  }
};

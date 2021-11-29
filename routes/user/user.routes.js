const router = require("express").Router();

//controllers
const {
  signinController,
  signupController,
} = require("../../controllers/user/user.controller");

//routes
//signin
router.post("/api/signin", signinController);

//signup
router.post("/api/signup", signupController); // user

router.post("/api/admin/signup", signupController); //admin

module.exports = router;

const router = require("express").Router();

//controllers
const {
  addToWishlistController,
  myWishlistController,
} = require("../../controllers/wishlist/wishlist.controller");
const auth = require("../../middlewares/auth");

//routes
//signin
router.post("/api/add/wishlist", auth, addToWishlistController);

router.get("/api/my/wishlist", auth, myWishlistController);

module.exports = router;

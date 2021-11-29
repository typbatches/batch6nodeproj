const router = require("express").Router();

//controllers
const {
  addProductController,
  fetchProductController,
  deleteProductController,
  fetchUserProductController,
} = require("../../controllers/product/product.controller");

const auth = require("../../middlewares/auth");

//routes
//add
router.post("/api/add/product", auth, addProductController);

// //update
// router.put("/api/update/product", auth, fetchProductController);

//delete
router.delete("/api/remove/product", auth, deleteProductController);

//fetch
router.get("/api/get/products",  fetchProductController); //for admin

//fetch
router.get("/api/user/get/products",fetchUserProductController); //for user
module.exports = router;

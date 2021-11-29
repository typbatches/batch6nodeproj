const router = require("express").Router();

//controllers
const {
  placeOrderController,
  myOrderController,
} = require("../../controllers/order/order.controller");
const auth = require("../../middlewares/auth");

//routes
//signin
router.post("/api/place/order", auth, placeOrderController);

router.get("/api/my/orders", auth, myOrderController);

module.exports = router;

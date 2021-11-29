const WishlistModal = require("../../models/wishlist/wishlist.model");

//buy now
exports.addToWishlistController = async (req, res) => {
  const userId = req.user._id;
  const user = req.user;
  try {
    if (user.role !== "USER") {
      return res.status(401).json({
        error: "Access denied ",
        data: null,
        code: 401,
      });
    }
    const newWishlist = new WishlistModal({
      product: req.body.productId,
      user: userId,
    });
    await newWishlist.save();
    res.json({ date: newWishlist, code: 200 });
  } catch (error) {
    console.log("error: ", error);
    res
      .status(500)
      .json({ error: "something went wrong", data: null, code: 500 });
  }
};
// findByIdAndDelete({ product: id });
exports.myWishlistController = async (req, res) => {
  const user = req.user;
  try {
    if (user.role !== "USER") {
      return res.status(401).json({
        error: "Access denied ",
        data: null,
        code: 401,
      });
    }
    const mywislist = await WishlistModal.find({ user: user._id }).populate(
      "product"
    );

    res.json({ data: mywislist, code: 200 });
  } catch (error) {
    console.log("error: ", error);
    res
      .status(500)
      .json({ error: "something went wrong", data: null, code: 500 });
  }
};
//add to wishlist, crud product, removefromwishlist,fetch wishlist, fetchorder

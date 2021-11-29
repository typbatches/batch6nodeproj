require("dotenv").config({ path: "./.env" });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//middlewares
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("error: ", error);
    console.log("Couldn't connect to DB");
  }
};
connectToDb();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


app.use((req, res, next) => {
  console.log("query", req.query);
  // console.log("body", req.body);
  next();
});
//import routes
const userRoutes = require("./routes/user/user.routes");
const productRoutes = require("./routes/product/product.routes");
const orderRoutes = require("./routes/order/order.routes");
const wishlistRoutes = require("./routes/wishlist/Wishlist.routes");

//
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(wishlistRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

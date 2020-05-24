import express from "../express-import";
import upload from "./image/functions/upload";

import main from "./main/main.js";
import getAllProducts from "./product/get-all-products";
import getSingleProduct from "./product/get-single-product";
import postProduct from "./product/post-product";
import getSingleUser from "./user/get-single-user";
import getAllUsers from "./user/get-all-users.js";
import postUser from "./user/post-user";
import postOrder from "./order/post-order";
import saveImage from "./image/save-image.js";

const router = express.Router();

router
  .get("/", main)
  .get("/products", getAllProducts)
  .get("/products/:productId", getSingleProduct)
  .post("/products", postProduct)
  .get("/users/:userId", getSingleUser)
  .get("/users", getAllUsers)
  .post("/users", postUser)
  .post("/orders", postOrder)
  .post("/images", saveImage);

export default router;

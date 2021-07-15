import express, { Router } from "express";
import { addPaymentGateway } from "../controller/payment-controller.js";
import {
  getProductById,
  getProducts,
} from "../controller/product-controller.js";
import { userLogin, userSignup } from "../controller/user-controller.js";

const Routes = express.Router();

Routes.post("/signup", userSignup);

Routes.post("/login", userLogin);

Routes.get("/products", getProducts);

Routes.get("/product/:id", getProductById);

Routes.post("/payment", addPaymentGateway);

export default Routes;

import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-oop.js'; //Runs all the code inside given path but do not import what's inside

renderOrderSummary();
renderPaymentSummary();
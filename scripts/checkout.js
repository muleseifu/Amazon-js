import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js'; //Runs all the code inside given path but do not import what's inside
//import '../data/backend-practice.js'
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

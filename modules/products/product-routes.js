import express from "express";

export const ProductRoutes = express.Router();

ProductRoutes.get("/product", (request, response) => {
  // response.send("<h2>Hello Products....</h2>");
  // 3 Products
  response.json({ id: 1001, name: "Ram" });
});

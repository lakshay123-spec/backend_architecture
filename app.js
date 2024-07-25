import express from "express";
import dotenv from "dotenv";
import createConnection from "./shared/db/connection.js";
import { ProductRoutes } from "./modules/products/product-routes.js";

const app = express();

dotenv.config();

app.use("/", ProductRoutes);

// app.get("/prod", (request, response) => {
//   // response.send("<h2>Hello Products....</h2>");
//   // 3 Products
//   response.json({ id: 1001, name: "Ram" });
// });

const promise = createConnection()
  .then((conInfo) => {
    app.listen(process.env.PORT || 4444, (err) => {
      if (err) {
        console.log("Error in App ", err);
      } else {
        console.log("Server Up and Running ");
      }
    });
  })
  .catch((err) => {
    console.log("Database is down ");
  });

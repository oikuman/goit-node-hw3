import fs from "fs";
import path from "path";
import shortid from "shortid";

import { handleSingleProductById } from "../../product/functions/products";

const usersFolder = path.join(__dirname, "..", "..", "..", "..", "db", "users");

const productsFolder = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "db",
  "products"
);

const getSingleUserFolder = (userId) => {
  return path.join(usersFolder, userId);
};

export const getSingleUserOrdersFolder = (userId) => {
  const folder = path.join(getSingleUserFolder(userId), "orders");

  fs.mkdir(folder, { recursive: true }, (error) => {
    if (error) throw error;
  });
  return folder;
};

export const saveOrder = (userId, products) => {
  //save
  const ordersFolder = getSingleUserOrdersFolder(userId);

  products.forEach((id) => {
    handleSingleProductById(id)
      .then((product) => {
        if (product) {
          const orderFile = path.join(ordersFolder, product[0].id + ".json");

          fs.writeFile(orderFile, JSON.stringify(product[0]), (error) => {
            if (error) throw error;
          });
        }
      })
      .catch((error) => {
        throw error;
      });
  });
};

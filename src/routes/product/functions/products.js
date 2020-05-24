import path from "path";
import fs from "fs";
import findEmptyObject from "../../../additionalOperations/find-empty-object";

const filePath = path.join(
  __dirname,
  "../../../../",
  "db",
  "products",
  "all-products.json"
);

const getProducts = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) reject(error);

      if (data) resolve(JSON.parse(data));
      else resolve(null);
    });
  });
};

const handleProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    getProducts()
      .then((result) => {
        const productsByCategory = result.reduce((acc, product) => {
          if (product.categories.includes(category)) acc = [...acc, product];
          return acc;
        }, []);

        const empty = findEmptyObject(productsByCategory);
        if (empty) resolve(null);
        else resolve(productsByCategory);
      })
      .catch((error) => reject(error));
  });
};

const handleProductsByIds = (ids) => {
  const idArray = ids.split(",");

  return new Promise((resolve, reject) => {
    getProducts()
      .then((result) => {
        const productsByIds = result.reduce((acc, product) => {
          if (idArray.includes(product.id)) acc = [...acc, product];
          return acc;
        }, []);
        const empty = findEmptyObject(productsByIds);
        if (empty) resolve(null);
        else resolve(productsByIds);
      })
      .catch((error) => reject(error));
  });
};

const handleSingleProductById = (id) => {
  return new Promise((resolve, reject) => {
    getProducts()
      .then((result) => {
        const productById = result.find(
          (product) => product["id"].toString() === id
        );

        if (productById) resolve([productById]);
        else resolve(null);
      })
      .catch((error) => reject(error));
  });
};

export {
  getProducts,
  handleProductsByCategory,
  handleProductsByIds,
  handleSingleProductById,
};

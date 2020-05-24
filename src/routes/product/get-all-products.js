import {
  getProducts,
  handleProductsByCategory,
  handleProductsByIds,
} from "./functions/products";

const getAllProducts = (request, response) => {
  const { ids, category } = request.query;

  if (category) {
    handleProductsByCategory(category).then((products) => {
      response.status(200);
      response.json(products);
    });
  } else if (ids) {
    handleProductsByIds(ids).then((products) => {
      response.status(200);
      response.json(products);
    });
  } else
    getProducts().then((products) => {
      response.status(200);
      response.json(products);
    });
};

export default getAllProducts;

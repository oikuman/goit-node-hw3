import { handleSingleProductById } from "./functions/products";

const getSingleProduct = (request, response) => {
  const { productId } = request.params;

  handleSingleProductById(productId)
    .then((product) => {
      if (product) response.send({ status: "success", products: product });
      else response.send({ status: "failure", products: product });
    })
    .catch((error) => console.log(error));
};

export default getSingleProduct;

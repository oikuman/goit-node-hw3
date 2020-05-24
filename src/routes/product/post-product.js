const postProduct = (request, response) => {
  if (Object.keys(request.body).length === 0) return response.sendStatus(400);

  const responseProduct = { status: "success", product: request.body };

  response.status(200);
  response.send(responseProduct);
};

export default postProduct;

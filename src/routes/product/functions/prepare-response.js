const prepareServerResponse = (response, action, param = "") => {
    action(param)
    .then(result => {
      if (result) {
        response.status(200);
        response.json({ status: "success", products: result });
      } else {
        response.status(404);
        response.json({ status: "no products", products: [] });
      }
    })
    .catch(error => {
      response.status(503);
      response.json({ status: "service unavailable", products: [] });
    });
  };

  export default prepareServerResponse;
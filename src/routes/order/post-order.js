import { saveOrder } from "./functions/order-functions";

const postOrder = (request, response) => {
  const order = request.body;
  if (Object.keys(order).length === 0) return response.sendStatus(400);

  try {
    saveOrder(order.user, order.products);
  } catch (error) {
    response.sendStatus(500);
  }

  response.send({ status: "success", order });
};

export default postOrder;

const createOrder = order => {
  let result;
  console.log("order", order);

  if (order["user"]) {
    result = { status: "success", order: order };
  } else {
    result = { status: "failed", order: null };
  }

  return result;
};

export default createOrder;

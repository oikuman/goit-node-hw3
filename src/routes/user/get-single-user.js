const getSingleUser = (request, response) => {
  const { userId } = request.params;
  response.send({ "User by ID": `${userId}` });
};

export default getSingleUser;

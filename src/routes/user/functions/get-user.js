const getUserFromDb = id => {
  const src = path.resolve(userFolder, fileName + ".json");

  return readFileSync(src);
};

const getUser = (request, response) => {
  const id = reques.params.userId;

  response.set("Content-Type", "application/json");

  response.status(200);
  response.json({ user: getUserFromDb(id) });
};

module.exports = getUser;

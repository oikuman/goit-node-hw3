import validateUser from "./functions/validate-user";

import { addId, writeFileData } from "./functions/save-data.js";

const noErrors = (errors) => (!errors.length ? true : false);

const postUser = (request, response) => {
  const userData = request.body;

  if (!noErrors(validateUser(userData))) return response.sendStatus(400);
  const user = addId(userData);

  try {
    writeFileData(user);
  } catch (error) {
    response.sendStatus(500);
  }

  response.status(200);
  response.send({ status: "success", user: user });
};

export default postUser;

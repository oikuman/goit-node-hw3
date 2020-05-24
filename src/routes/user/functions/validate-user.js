import Schema from "validate";
import validator from "validator";

const checkEmail = (email) => validator.isEmail(email);
const checkTel = (tel) => /^\+?[0-9]+$/.test(tel);

const validateUser = (userData) => {
  const user = new Schema({
    username: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
      use: { checkTel },
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      use: { checkEmail },
    },
  });

  const errors = user.validate(userData);
  return errors;
};

export default validateUser;

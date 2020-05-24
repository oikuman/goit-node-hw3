import moment from "moment";

const addDate = (obj, field) => {
  obj[field] = moment().format("DD-MM-YYYY");
  return obj;
};

export default addDate;

import v4 from "uuid";

const addId = (obj, field) => {
    obj[field] = v4();
    return obj;
};

export default addId;

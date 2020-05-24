import path from "path";
import fs from "fs";
import shortid from 'shortid';

const defineFilename = user => {
  let username = user.username;
  let filename;
  if (username) filename = `${username}.json`;
  else filename = `user${shortid()}.json`;
  return filename;
};

const saveUser = user => {
  const filename = defineFilename(user);
  const pathname = path.join(__dirname, "db", "users", filename);

  fs.writeFile(pathname, JSON.stringify(user), "utf8", error => {
    if (error) throw error;
    console.log("The file has been saved!");
  });
};

export default saveUser;

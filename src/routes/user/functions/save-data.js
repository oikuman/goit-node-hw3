import fs from "fs";
import path from "path";
import shortid from "shortid";

const usersFolder = path.join(__dirname, "..", "..", "..", "..", "db", "users");

const allUsersFile = path.join(usersFolder, "all-users.json");

export const addId = (userData) => {
  return { ...userData, id: shortid() };
};

export const writeFileData = (userObj) => {
  fs.readFile(allUsersFile, "utf8", (error, data) => {
    if (error)
      console.log('file "all-users.json" did not existed. Creating...');

    let array;

    if (data) {
      array = JSON.parse(data);
      array.push(userObj);
    } else {
      array = [userObj];
    }

    fs.writeFile(allUsersFile, JSON.stringify(array), (error) => {
      if (error) throw error;
    });

    const userFolder = path.join(usersFolder, userObj.id);

    const singleUserFile = path.join(
      usersFolder,
      userObj.id,
      userObj.username + ".json"
    );

    fs.mkdir(userFolder, { recursive: true }, (error) => {
      if (error) throw error;
    });

    fs.writeFile(singleUserFile, JSON.stringify(userObj), (error) => {
      if (error) throw error;
    });
  });
};

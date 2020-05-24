import startServer from "./start-server";
import path from "path";

const allUsersFile = path.join(
  __dirname,
  "..",
  "db",
  "users",
  "all-users.json"
);

startServer(3005);

import bodyParser from "body-parser";

import cors from "cors";
import morgan from "morgan";
import path from "path";

import express from "./express-import";
import router from "./routes/router.js";

const startServer = (port) => {
  const app = express();
  const errorHandler = (error, request, response, next) => {
    response.status(500).send("Error found:" + error.stack);
  };

  const staticPath = path.join(__dirname, "..", "assets");

  const corsOptions = {
    origin: "*",
    // origin: "http://localhost:3000"
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app
    .use(cors(corsOptions))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("combined"))
    .use(express.static(staticPath))
    .use("/", router)
    .use(errorHandler);

  app.listen(port);
  console.log("Server started at http://localhost:" + port);
};

export default startServer;

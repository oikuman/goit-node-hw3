import path from "path";

import upload from "./functions/upload.js";
import copyFile from "./functions/copy-file.js";

const targetFolder = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "assets",
  "products"
);

const saveImage = (request, response) => {
  // check upload from documentation
  upload(request, response, (error) => {
    if (error) {
      throw error;
    } else {
      console.log(request.file);
      console.log("id: " + request.body.productId);
      copyFile(
        request.file.path,
        path.join(
          targetFolder,
          request.body.productId + path.extname(request.file.originalname)
        )
      ).then(console.log("file copied"));
      response.send({ status: "uploaded", path: request.file.path });
    }
  });
};

export default saveImage;

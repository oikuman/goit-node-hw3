import multer from "multer";
import fs from "fs";
import path from "path";
import util from "util";

//import image from "./assets/one.jpg";

const renameFile = util.promisify(fs.rename);

// folders
const TEMPORARY_FOLDER = path.join(__dirname, "assets");
const IMAGE_FOLDER = path.join(__dirname, "data");

const storage = multer.diskStorage({
  destination: (request, file, next) => {
    next(null, TEMPORARY_FOLDER);
  },
  filename: (request, file, next) => {
    next(null, file.originalname);
  }
});

const upload = multer(storage);

const creatUserFolder = filePath => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
};

const moveImage = (fileObject, userId) => {
  const userImageFolderName = "user-" + userId;
  const userImagePath = path.join(IMAGE_FOLDER, userImageFolderName);

  createUserFolder(userImagePath);

  const pathToTemporaryImage = path.join(
    TEMPORARY_FOLDER,
    fileObject.originalname
  );
  const pathToRegularImage = path.join(userImagePath, fileObject.originalname);

  return renameFile(pathToTemporaryImage, pathToRegularImage)
    .then(() => {
      return userImageFolderName;
    })
    .catch(error => console.log(error));
};

const saveImageMultipart = (request, response) => {
  const fileObject = request.file;
  const orderId = "1234";

  moveImage(fileObject, orderId).then(userImageFolderName => {
    response.json({ status: "was saved in folder: " + userImageFolderName });
  });
};

() => [upload.single("image"), saveImageMultipart];

const sendImage = () => {
  console.log("hello image");
};

export default sendImage;

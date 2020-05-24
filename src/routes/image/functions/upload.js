import multer from "multer";
import path from "path";
import shortid from "shortid";

const destinationFolder = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "assets",
  "uploads"
);

// Set Storage Engine
const storageConfig = multer.diskStorage({
  destination: destinationFolder,
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storageConfig,
  limits: { fileSize: 1000000 },
}).single("file");

export default upload;

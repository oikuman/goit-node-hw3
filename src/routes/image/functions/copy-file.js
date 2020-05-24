import fs from "fs";
import path from "path";

const copyFile = (source, target) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(target);
  return new Promise((resolve, reject) => {
    readStream.on("error", reject);
    writeStream.on("error", reject);
    writeStream.on("finish", resolve);
    readStream.pipe(writeStream);
  }).catch((error) => {
    readStream.destroy();
    writeStream.end();
    throw error;
  });
};

export default copyFile;

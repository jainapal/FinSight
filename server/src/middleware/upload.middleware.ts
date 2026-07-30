import multer from "multer";
import path from "path";
import fs from "fs";
import AppError from "../utils/AppError.js";
import { v4 as uuid } from "uuid";

const uploadPath = "uploads";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadPath);
  },

  filename: (_req, file, cb) => {
    const uniqueName = `${uuid()}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});

const fileFilter: multer.Options["fileFilter"] = (
  _req,
  file,
  cb
) => {
  if (file.mimetype !== "application/pdf") {
    return cb(new AppError("Only PDF files are allowed", 400));
  }

  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
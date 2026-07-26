import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5001",
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI: process.env.MONGODB_URI || "",

  JWT_SECRET: process.env.JWT_SECRET || "",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
};
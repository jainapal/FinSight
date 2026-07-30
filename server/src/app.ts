import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import reportRoutes from "./routes/report.routes.js";
import { notFoundHandler } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import path from "path";


const app = express();

app.use(cors({ origin: "http://localhost:5173",credentials: true,}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/uploads", express.static(path.resolve("uploads")));

app.get("/api/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "FinSight API is running",
  });
});

// Always lat
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
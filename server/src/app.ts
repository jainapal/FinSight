import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/api/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "FinSight API is running",
  });
});

export default app;
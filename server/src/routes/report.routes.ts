import { Router } from "express";
import { upload } from "../middleware/upload.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { upload as uploadReport, getReport, getReports, removeReport } from "../controllers/report.controller.js";

const reportRoutes = Router();

reportRoutes.post("/upload",authenticate, upload.single("file"),uploadReport);
reportRoutes.get("/", authenticate, getReports);
reportRoutes.get("/:id", authenticate, getReport);
reportRoutes.delete("/:id", authenticate, removeReport);

export default reportRoutes;
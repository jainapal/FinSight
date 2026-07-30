import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadReportSchema } from "../validators/report.validator.js";
import { successResponse } from "../utils/apiResponse.js";
import AppError from "../utils/AppError.js";
import { toReportResponse } from "../utils/report.mapper.js";
import { uploadReport, getUserReports, getReportById, deleteReport } from "../services/report.service.js";

export const upload = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.file) {
      throw new AppError("PDF file is required", 400);
    }

    const body = uploadReportSchema.parse({
      ...req.body,
      financialYear: Number(req.body.financialYear),
    });

    const report = await uploadReport({
      ...body,

      fileName: req.file.filename,

      fileUrl: req.file.path,

      fileSize: req.file.size,

      mimeType: req.file.mimetype,

      uploadedBy: req.user!._id.toString(),
    });

    successResponse({
      res,
      statusCode: 201,
      message: "Report uploaded successfully",
      data: toReportResponse(report),
    });
  }
);

export const getReports = asyncHandler(async (req, res) => {
  const reports = await getUserReports(req.user!._id.toString());

  successResponse({
    res,
    message: "Reports fetched successfully",
    data: reports.map(toReportResponse),
  });
});

export const getReport = asyncHandler(async (req, res) => {
  const report = await getReportById(
    req.params.id,
    req.user!._id.toString()
  );

  successResponse({
    res,
    message: "Report fetched successfully",
    data: toReportResponse(report),
  });
});

export const removeReport = asyncHandler(async (req, res) => {
  await deleteReport(
    req.params.id,
    req.user!._id.toString()
  );

  successResponse({
    res,
    message: "Report deleted successfully",
  });
});
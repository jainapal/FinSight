import fs from "fs/promises";
import Report from "../models/report.model.js";
import AppError from "../utils/AppError.js";
import { ReportStatus } from "../constants/report.js";

interface UploadReportData {
  title: string;
  companyName: string;
  financialYear: number;

  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;

  uploadedBy: string;
}

export const uploadReport = async (
  data: UploadReportData
) => {
  return await Report.create(data);
};

export const getUserReports = async (userId: string) => {
  return await Report.find({
    uploadedBy: userId,
  }).sort({
    createdAt: -1,
  });
};

export const getReportById = async (
  reportId: string,
  userId: string
) => {
  const report = await Report.findOne({
    _id: reportId,
    uploadedBy: userId,
  });

  if (!report) {
    throw new AppError("Report not found", 404);
  }

  return report;
};

export const deleteReport = async (
  reportId: string,
  userId: string
) => {
  const report = await getReportById(reportId, userId);

  try {
    await fs.unlink(report.fileUrl);
  } catch {
    // File may already be missing; continue with DB deletion.
  }

  await report.deleteOne();

  return report;
};

export const updateReportStatus = async (
  reportId: string,
  status: ReportStatus
) => {
  return await Report.findByIdAndUpdate(
    reportId,
    {
      status,
    },
    {
      new: true,
    }
  );
};


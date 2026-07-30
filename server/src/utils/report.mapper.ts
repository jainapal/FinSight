import { IReport } from "../models/report.model.js";

export const toReportResponse = (report: IReport) => ({
  id: report._id.toString(),
  title: report.title,
  companyName: report.companyName,
  financialYear: report.financialYear,

  fileName: report.fileName,
  fileUrl: `/${report.fileUrl.replace(/\\/g, "/")}`,
  fileSize: report.fileSize,

  mimeType: report.mimeType,

  status: report.status,

  uploadedBy: report.uploadedBy,

  createdAt: report.createdAt,
  updatedAt: report.updatedAt,
});
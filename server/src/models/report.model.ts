import mongoose, { Schema, Document } from "mongoose";
import {
  REPORT_STATUS,
  ReportStatus,
} from "../constants/report.js";

export interface IReport extends Document {
  title: string;
  companyName: string;
  financialYear: number;

  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;

  uploadedBy: mongoose.Types.ObjectId;

  status: ReportStatus;

  createdAt: Date;
  updatedAt: Date;
}

const reportSchema = new Schema<IReport>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    financialYear: {
      type: Number,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(REPORT_STATUS),
      default: REPORT_STATUS.UPLOADED,
    },
  },
  {
    timestamps: true,
  }
);

reportSchema.index({
  uploadedBy: 1,
  createdAt: -1,
});

export default mongoose.model<IReport>(
  "Report",
  reportSchema
);
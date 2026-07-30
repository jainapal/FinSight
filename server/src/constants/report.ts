export const REPORT_STATUS = {
    UPLOADED: "UPLOADED",
    PROCESSING: "PROCESSING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
  } as const;
  
  export type ReportStatus =
    (typeof REPORT_STATUS)[keyof typeof REPORT_STATUS];
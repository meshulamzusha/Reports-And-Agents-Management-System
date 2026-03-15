export type Report = {
  id: string;
  category: "intelligence" | "logistics" | "alert";
  urgency: "low" | "medium" | "high";
  message: string;
  imagePath: string;
  createdAt: string;
};

export type ReportInputs = {
  category: "intelligence" | "logistics" | "alert";
  urgency: "low" | "medium" | "high";
  message: string;
  file: FileList | null;
};

export type ReportsState = {
  reports: Report[];
  fetchReports: () => Promise<void>;
  addReport: (formData: FormData) => Promise<void>;
};

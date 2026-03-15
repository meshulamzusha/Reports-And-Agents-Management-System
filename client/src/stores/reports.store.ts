import { create } from "zustand";
import { ReportsState } from "../types/report.types";

export const useReportsStore = create<ReportsState>((set) => ({
  reports: [],

  fetchReports: async () => {},

  addReport: async (formData: FormData) => {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3000/reports", {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
      body: formData,
    });
    const { report } = await response.json();
    set((state: ReportsState) => ({
      reports: [...state.reports, report],
    }));
  },
}));

import { createReportService } from "./report.service.js";

export const handelCreateReport = async (req, res) => {
  try {
    const { category, urgency, message } = req.body;
    const { userId } = req.user;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newReport = await createReportService(
      { category, urgency, message },
      imagePath,
      userId,
    );

    return res.status(201).json({
      ok: true,
      report: newReport,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: "Server Error",
    });
  }
};

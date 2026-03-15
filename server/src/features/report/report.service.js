import { Report } from "./report.model.js"

export const createReportService = async (reportDetails, imagePath, userId) => {
    try {
        const newReport = await Report.create({
            userId,
            ...reportDetails,
            imagePath,
        })

        return newReport

    } catch (error) {
        throw error
    }
}
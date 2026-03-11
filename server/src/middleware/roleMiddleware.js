export const roleGuard = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            ok: false,
            message: "Forbidden"
        })
    }

    next()
}
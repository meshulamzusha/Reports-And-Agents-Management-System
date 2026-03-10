export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const formattedErrors = result.error.issues.map((e) => {
      return { field: e.path[0], message: e.message };
    });

    return res.status(400).json({
      errors: formattedErrors,
    });
  } else {
    req.body = result.data;
    next();
  }
};

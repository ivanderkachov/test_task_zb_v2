const Joi = require("joi");

const messageSchema = Joi.object({
    message: {
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      message: Joi.string().min(10).required()
    }
});

function validateRequest(req, res, next, schema) {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    res.status(400).json({
      status: "error",
      message: `Validation error: ${error.details
        .map((x) => x.message)
        .join(", ")}`,
    });
  } else {
    req.body = value;
    next();
  }
}

function validateMessageBody(req, res, next) {
  validateRequest(req, res, next, messageSchema);
}

module.exports = { validateMessageBody };

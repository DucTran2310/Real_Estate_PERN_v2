const errHandler = (error, req, res, next) => {
  const formattedMessage = error?.message?.replaceAll(`\"`, "");
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  return res.status(statusCode).json({
    error: true,
    success: false,
    toastMessage: formattedMessage,
  });
};

const throwErrorWithStatus = (code, message, res, next) => {
  const error = new Error(message);
  res.status(code);
  next(error);
};

const badRequestException = (req, res, next) => {
  const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

module.exports = {
  errHandler,
  throwErrorWithStatus,
  badRequestException
}

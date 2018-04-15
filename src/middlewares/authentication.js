import HttpStatus from 'http-status-codes';

export const authenticate = (req, res, next) => {
  if (req.headers && req.headers['x-request-id'] && req.headers['x-request-id'] !== process.env.MSA_COMMON_AUTH_KEY) {
    res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Unauthorized' });
  }
  next();
};

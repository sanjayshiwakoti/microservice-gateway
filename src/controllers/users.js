import axios from 'axios';
import { Router } from 'express';
import HttpStatus from 'http-status-codes';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', (req, res, next) => {
  console.log(process.env.AUTH_BASE_PATH + 'users');
   axios.get(process.env.AUTH_BASE_PATH + 'users')
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    res.status(500).json({data: error.data});
  });
});

export default router;


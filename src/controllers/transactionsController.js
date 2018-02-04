import axios from 'axios';
import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as transactionsService from '../services/transactionsService';

const router = Router();

/**
 * GET /api/users
 */
router.post('/', (req, res, next) => {
  
transactionsService.postTransaction(req.body)
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    res.status(500).json({data: error.data});
  });
});

export default router;


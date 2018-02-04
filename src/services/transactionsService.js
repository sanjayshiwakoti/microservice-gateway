import axios from 'axios';
import {boomError} from '../utils/boomError';


const baseTransactionUrl = process.env.MSA_TRANSACTION;
/**
 * Get a user.
 *
 * @param  {Number|String}  payload
 * @return {Promise}
 */
export function postTransaction(payload) {

    return axios.post(`${baseTransactionUrl}/transactions`, payload)
    .then(function (response) {
            return response;
    })
    .catch(function (error) {       
        boomError(error.response.data.error);
    });
}




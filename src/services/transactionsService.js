import {boomError} from '../utils/boomError';
import * as httpUtils  from '../utils/httpUtils';


const baseTransactionUrl = process.env.MSA_TRANSACTION;
/**
 * Get a user.
 *
 * @param  {Number|String}  payload
 * @return {Promise}
 */
export function postTransaction(payload) {

    return httpUtils.post(`${baseTransactionUrl}/transactions`, payload)
    .then(function (response) {
            return response;
    })
    .catch(function (error) {    
        console.log(error.response.data.error);   
        boomError(error.response.data.error);
    });
}




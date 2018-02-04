import Boom from 'boom';
import User from 'axios';

/**
 * Get a user.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function postTransaction(payload) {
    return axios.get(process.env.MSA_AUTH + 'users')
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        throw new Boom.notFound('Could not post');
    });
}
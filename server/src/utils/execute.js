const ValidationError = require('../exceptions/ValidationError');
const { union } = require('lodash');

/**
 * Executa a function aplicando as regras de negócio
 * @param {function} action
 * @param {String} token  
 */
module.exports.executeAsync = function(action, token ='' ) {
    const tokenArray = [token];
    // use o splice para pegar todos os argumentos depois de action
    const argumentos = Array.prototype.splice.call(arguments, 2);
    return new Promise((resolve, reject) => {
        try {
            if (!token) {
                throw new ValidationError('Please provide an Authorization header to identify yourself (can be whatever you want)','token');
            }            
            const result = action.apply(null, union(tokenArray, argumentos));
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });    
}
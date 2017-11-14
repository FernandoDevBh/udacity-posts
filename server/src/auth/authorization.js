const HEADER_REGEX = /bearer token-(.*)$/;

module.exports.authenticate = async ({headers: {authorization}}) => {
    return new Promise((resolve, reject) => {
        try {
            const token = authorization && HEADER_REGEX.exec(authorization)[1];            
            resolve(token);
        } catch (error) {
            reject(error);
        }
    });
};

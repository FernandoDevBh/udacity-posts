const { getAll } = require('../db/categories');
const { getByCategory } = require('../db/posts');
const { getByParent } = require('../db/comments');
const { executeAsync } = require('../utils/execute');

module.exports ={
    Query: {
        categories: (root, data, { token }) => {
            return executeAsync(getAll, token);
        }
    },
    Category: {
        posts: ({ id }, data, { token }) => {
            return executeAsync(getByCategory, token, id);
        }
    },
    Post: {
        comments: ({ id }, data, { token }) =>{
            return executeAsync(getByParent, token, id);
        }
    }
};
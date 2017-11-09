const { getAll } = require('../db/categories');
const { getByCategory } = require('../db/posts');

module.exports ={
    Query: {
        allCategories: (root, data, { token }) => {
            return getAll(token);
        }
    },
    Category: {
        posts: ({ id }, data, { token }) => {
            return getByCategory(token, id);
        }
    }
};
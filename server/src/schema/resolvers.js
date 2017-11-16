const { getAll } = require('../db/categories');
const { getByCategory, setVote } = require('../db/posts');
const { getByParent } = require('../db/comments');
const { executeAsync } = require('../utils/execute');

module.exports ={
    Query: {
        categories: (root, data, { token }) => {
            return executeAsync(getAll, token);
        }
    },
    Mutation:{
        setVoteScore: (root, {vote: { id, voto}}, { token }) => {
            return executeAsync(setVote, token, id, voto);
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
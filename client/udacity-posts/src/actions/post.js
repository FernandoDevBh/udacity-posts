import { post } from '../utils/request';
import { setVote } from '../utils/query';
import { POST_LOAD, VOTE_FULLFILLED, POST_ERROR, POST_FULLFILLED } from '../constantes';

const postLoad = (isLoad = false) => ({ type: POST_LOAD, isLoad });
const postError = (error) => ({ type: POST_ERROR, error });
const voteFullfilled = ({ id, voteScore}) => ({ type: VOTE_FULLFILLED, id, voteScore });

export const postsFullfilled = (posts) => ({type: POST_FULLFILLED, posts});

export const vote = (postId = '', ok = false) => {
    return async dispatch =>{
        dispatch(postLoad);
        try {
            const response = await post(setVote(postId, ok));
            dispatch(voteFullfilled(response.setVoteScore))
        } catch (error) {
            dispatch(postError(error))
        }
    }
}

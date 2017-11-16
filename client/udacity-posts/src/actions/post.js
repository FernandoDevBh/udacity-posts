import { post } from '../utils/request';
import { setVote } from '../utils/query';
import { POST_LOAD, VOTE_FULLFILLED, POST_ERROR } from '../constantes';

const postLoad = (isLoad = false) => ({ type: POST_LOAD });
const postError = (error) => ({ type: POST_ERROR, error });
const voteFullfilled = ({ id, voteScore}) => ({
    type: VOTE_FULLFILLED,
    id,
    voteScore
});

export const addVote = (postId = '', ok = false) => {
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
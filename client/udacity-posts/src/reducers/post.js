import { POST_ERROR, VOTE_FULLFILLED, POST_LOAD } from '../constantes';

const postState = {};

function reducer (state = postState, action) {
    switch (action.type) {
        case POST_LOAD:
            return {
                ...state,
                isLoading:action.isLoad
            }
        case POST_ERROR:
            return {
                ...state,
                error:action.error,
                isLoading:action.isLoad
            }
        case VOTE_FULLFILLED:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    voteScore: action.voteScore
                }
            }
        default:
            return state;
    }
}

export default reducer;
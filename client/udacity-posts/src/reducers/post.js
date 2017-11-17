import { POST_ERROR, VOTE_FULLFILLED, POST_LOAD, POST_FULLFILLED } from '../constantes';

const postState = {};

function reducer (state = postState, action) {
    switch (action.type) {
        case POST_LOAD:
            return {
                ...state,
                isLoading:action.isLoad
            };
        case POST_ERROR:
            return {
                ...state,
                error:action.error,
                isLoading:action.isLoad
            };
        case VOTE_FULLFILLED:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.id]: {
                        ...state.posts[action.id],
                        voteScore: action.voteScore
                    }
                }
            };
        case POST_FULLFILLED:
            return {
                ...state,
                posts: action.posts,
                isLoading: false
            };
        default:
            return state;
    }
}

export default reducer;
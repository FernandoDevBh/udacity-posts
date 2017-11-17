import { CATEGORIES_LOAD, CATEGORIES_ERROR, CATEGORIES_FULLFILLED } from '../constantes';

const categoriesState = {};

function reducer (state=categoriesState, action) {
    switch (action.type) {
        case CATEGORIES_LOAD:        
            return {
                ...state,
                isLoading: action.load
            };
        case CATEGORIES_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        case CATEGORIES_FULLFILLED:
            return {
                ...state,
                categories: action.categories,
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducer;

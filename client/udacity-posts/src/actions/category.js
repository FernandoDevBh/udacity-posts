import { post } from '../utils/request';
import * as query from '../utils/query';
import { CATEGORIES_LOAD, CATEGORIES_FULLFILLED, CATEGORIES_ERROR } from '../constantes';
import { normalizeCategorias } from '../utils/transformData';
import { postsFullfilled } from './post';

const categoriesLoad = (load = false) => ({ type: CATEGORIES_LOAD, load });
const categoriesFullfilled = (categories = []) => ({ type: CATEGORIES_FULLFILLED, categories });
const categoriesError = (error) => ({type: CATEGORIES_ERROR, error });

export const getCategories = () =>{
    return async dispatch => {
        dispatch(categoriesLoad(true));
        try {
            const response = await post(query.allCategories());
            const normalizeData = normalizeCategorias(response);
            const posts = Object.keys(normalizeData)
                .reduce((prev, next) => Object.assign(prev, normalizeData[next].posts), {});
            dispatch(postsFullfilled(posts));
            dispatch(categoriesFullfilled(normalizeData));
        } catch (error) {
            categoriesError(error);
        }        
    }    
}
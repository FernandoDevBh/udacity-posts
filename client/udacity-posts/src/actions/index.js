import { post } from '../utils/request';
import * as query from '../utils/query';
import { normalizeCategorias } from '../utils/transformData';

export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORIES_FULLFILLED = 'CATEGORIES_FULLFILLED';
export const CATEGORIES_ERROR = 'CATEGOREIS_ERROR';

const categoriesLoad = (load = false) => ({ type: CATEGORIES_LOAD, load });
const categoriesFullfilled = (categories = []) => ({ type: CATEGORIES_FULLFILLED, categories });
const categoriesError = (error) => ({type: CATEGORIES_ERROR, error });

export const getCategories = () =>{
    return async dispatch => {
        dispatch(categoriesLoad(true));
        try {
            const response = await post(query.allCategories());            
            dispatch(categoriesFullfilled(normalizeCategorias(response)));
        } catch (error) {
            categoriesError(error);
        }        
    }    
}
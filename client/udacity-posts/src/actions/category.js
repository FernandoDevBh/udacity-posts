import { post } from '../utils/request';
import * as query from '../utils/query';
import { CATEGORIES_LOAD, CATEGORIES_FULLFILLED, CATEGORIES_ERROR } from '../constantes';
import { normalizeCategorias } from '../utils/transformData';

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
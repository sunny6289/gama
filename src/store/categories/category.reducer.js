import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const CATEGORIES_INITIAL_STATE = {
    categoriesArray: [],
}

export const catagoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {})=>{
    const {type, payload} = action;
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATAGORIES:
            return{
                ...state,
                categoriesArray: payload
            }
        default:
            return state;
    }
}
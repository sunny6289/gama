import { createAction } from "../../Utils/createAction/createAction.reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategories = (categoriesArray)=>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATAGORIES, categoriesArray);
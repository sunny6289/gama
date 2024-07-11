import {createSelector} from 'reselect';

const selectCategoryReducer = (state)=>{ 
  return state.categories;}

export const selectCategoryArray = createSelector(
  [selectCategoryReducer],
  (categoriesArraySlice)=>{ 
    return categoriesArraySlice.categoriesArray}
)

export const selectCatagoriesMap = createSelector(
  [selectCategoryArray],
  (categoriesArray)=> {
    return categoriesArray.reduce((acc, category)=>{
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
  },{})}
)

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../Categories-preview/categories-preview.component';
import Category from '../Category/category.component';
import { getCategoriesAndDocuments } from '../../Utils/Firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const getCategories = async()=>{
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    }
    getCategories();
  },[]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop;
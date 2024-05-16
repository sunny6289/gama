import { Route, Routes } from 'react-router-dom'; 
import CategoriesPreview from '../Categories-preview/categories-preview.component';
import Category from '../Category/category.component';
import './shop.styles.scss';

const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop;
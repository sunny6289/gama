import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Fragment } from 'react';
import { selectCatagoriesMap } from '../../store/categories/category.selector';


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCatagoriesMap);
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) =>{ 
          const products = categoriesMap[title];
          return(
            <CategoryPreview key={title} title={title} products={products}/>
          )
        })
      }
    </Fragment>
  )
}

export default CategoriesPreview;
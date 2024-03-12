// import SHOP_DATA from '../../shop-data.json';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../contexts/product.context';
import { useContext } from 'react';
import './shop.styles.scss';

const Shop = ()=>{
    const { products } = useContext(ProductsContext);
    return(
      <div className='products-container'>
        {products.map((product) => {
            return (
                <ProductCard key={product.id} product={product} />
            )
        })}
      </div>
    )
  }
  
  export default Shop;
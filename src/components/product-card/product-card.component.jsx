import { useDispatch, useSelector } from 'react-redux';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({product}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product));
    const {name, price, imageUrl } = product;
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;

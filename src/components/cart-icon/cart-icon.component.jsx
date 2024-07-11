import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const openCart = ()=> dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={openCart}>
            <ShoppingIcon/>
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;

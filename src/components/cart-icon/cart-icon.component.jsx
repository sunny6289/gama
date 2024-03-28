import './cart-icon.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const openCart = ()=> setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={openCart}>
            <ShoppingBag className='shopping-icon'/>
            <span className='item-count'>
                {cartCount}
            </span>
        </div>
    );
}

export default CartIcon;

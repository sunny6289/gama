import './cart-icon.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);
    const openCart = ()=> setCartIsOpen(!cartIsOpen);
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

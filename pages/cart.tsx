import CartStyle from '../styles/Cart.module.css'
import CardCart from '../components/CardCart'

const Cart = () => {
    return (
        <>
            <li>
                <ul>
                    <CardCart />
                </ul>
                <ul>
                    <CardCart />
                </ul>
            </li>
        </>
    )
}

export default Cart;
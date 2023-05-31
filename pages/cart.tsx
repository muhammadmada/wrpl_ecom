import CartStyle from '../styles/Cart.module.css'
import Card_Cart from '../components/Card_Cart'

const Cart = () => {
    return (
        <>
            <li>
                <ul>
                    <Card_Cart />
                </ul>
                <ul>
                    <Card_Cart />
                </ul>
            </li>
        </>
    )
}

export default Cart;
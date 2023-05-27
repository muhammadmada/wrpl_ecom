import CartStyle from '../styles/Cart.module.css'
import Card from '../components/Card'

const Cart = () => {
    return (
        <>
            <li>
                <ul>
                    <Card />
                </ul>
                <ul>
                    <Card />
                </ul>
            </li>
        </>
    )
}

export default Cart;
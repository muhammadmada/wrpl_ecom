import CardStyles from '../styles/Card.module.css';

const Card_Cart = () => {
    return (
        <div className={CardStyles.container}>
            <div className={CardStyles.upper}>
                <h1>Image</h1>
            </div>
            <div className={CardStyles.lower}>
                <h1>content</h1>
            </div>
        </div>
    );
}

export default Card_Cart;
import Card_ProductStyle from '../styles/Card_Product.module.css';

const Card_Product = () => {
    return (
        <div className={Card_ProductStyle.container}>
            <div className={Card_ProductStyle.upper}>
                <h1>Image</h1>
            </div>
            <div className={Card_ProductStyle.lower}>
                <h1>content</h1>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Card_Product;
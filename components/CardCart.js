import CardStyles from '../styles/CardCart.module.css';

const CardCart = () => {
  return (
    <div className={CardStyles.card}>
      <img className={CardStyles.image} src="../WhatsApp Image 2023-05-27 at 11.15.28.jpeg" alt="Product" />
      <h3 className={CardStyles.name}>Product Name</h3>
      <p className={CardStyles.price}>$99.99</p>
      <p className={CardStyles.store}>Store Name</p>
      <div className={CardStyles.rating}>
        <span className={CardStyles.ratingStars}>⭐⭐⭐⭐⭐</span>
        <span className={CardStyles.ratingCount}>(500)</span>
      </div>
    </div>
  );
}

export default CardCart;

import React from 'react';
import { useRouter } from 'next/router';
import CardStyles from '../styles/CardProduct.module.css';

const CardProduct = ({ productId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className={CardStyles.card} onClick={handleClick}>
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
};

export default CardProduct;

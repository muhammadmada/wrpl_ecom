import React from 'react';
import HighlightStyles from '../styles/HighlightProduct.module.css';

const HighlightProduct = () => {
  const products = [
    { id: 1, name: 'Product 1', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
    { id: 2, name: 'Product 2', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
    { id: 3, name: 'Product 3', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
    { id: 4, name: 'Product 4', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
    { id: 5, name: 'Product 5', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
    { id: 6, name: 'Product 6', image: '/WhatsApp Image 2023-05-27 at 11.15.28.jpeg' },
  ];

  return (
    <div className={HighlightStyles.carousel}>
      <div className={HighlightStyles['carousel-track']}>
        {products.map((product) => (
          <div className={HighlightStyles['carousel-item']} key={product.id}>
            <img src={product.image} alt={product.name} className={HighlightStyles['product-image']} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightProduct;

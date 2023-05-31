// import Card_ProductStyle from '../styles/Card_Product.module.css';

// const Card_Product = () => {
//     return (
//         <div className={Card_ProductStyle.container}>
//             <div className={Card_ProductStyle.upper}>
//                 <h1>Image</h1>
//             </div>
//             <div className={Card_ProductStyle.lower}>
//                 <h1>content</h1>
//             </div>
//             <div>
//             </div>
//         </div>
//     );
// }

// export default Card_Product;

import CardStyles from '../styles/Card_Product.module.css';

const Card_Cart = () => {
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

export default Card_Cart;

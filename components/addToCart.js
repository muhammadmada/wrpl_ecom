import CardStyles from '../styles/Card_Cart.module.css';
import { useRouter } from 'next/router';

const ItemCard = () => {
  const router = useRouter();

  const handleCardClick = () => {
    // Redirect to the "Add to Cart" page or trigger the "Add to Cart" functionality
    router.push('/add-to-cart'); // Replace '/add-to-cart' with the actual link or route
  };

  return (
    <a href="#" onClick={handleCardClick} className={CardStyles.card}>
      {/* Card content */}
    </a>
  );
};

export default ItemCard;

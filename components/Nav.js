import { useRef, useEffect } from 'react';
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const handleCartClick = () => {
    // Redirect to the cart page
    router.push('/cart'); // Replace '/cart' with the actual link or route
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Get the search input value and perform search logic
    const searchInput = e.target.elements.search.value;
    // Perform your search logic here
    console.log('Search input:', searchInput);
    // Clear the input field
    e.target.elements.search.value = '';
  };

  const navRef = useRef(null);

  useEffect(() => {
    const setSearchInputWidth = () => {
      // Calculate the width of the space between "Home" and "Cart" buttons
      const homeButton = navRef.current.querySelector('li:first-child');
      const cartButton = navRef.current.querySelector('.cartButton');
      const spaceBetween = cartButton.offsetLeft - (homeButton.offsetLeft + homeButton.offsetWidth);

      // Set the width of the search bar
      const searchInput = navRef.current.querySelector('.searchInput');
      searchInput.style.width = `${spaceBetween}px`;
    };

    // Call the function initially and on window resize
    setSearchInputWidth();
    window.addEventListener('resize', setSearchInputWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', setSearchInputWidth);
    };
  }, []);

  return (
    <nav className={navStyles.nav} ref={navRef}>
      <div className={navStyles.left}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.right}>
        <ul>
          <li>
            <form onSubmit={handleSearch} className={navStyles.searchForm}>
            <input type="text" name="search" placeholder="Search" className={`${navStyles.searchInput} searchInput`} />
              <button type="submit" className={navStyles.searchButton}>
                <img src="search-26241.png" alt="Search" className={navStyles.searchIcon} />
              </button>
            </form>
          </li>
          <li>
            <button onClick={handleCartClick} className={`${navStyles.cartButton} ${navStyles.buttonFontSize} cartButton`}>
              <img src="shopping-cart-20391.png" alt="Cart" className={navStyles.cartIcon} />
            </button>
          </li>
          <li>
            <Link href="/liked">Liked</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

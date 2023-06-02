import Head from 'next/head';
import CardProduct from '@/components/CardProduct';
import home from '@/styles/Home.module.css';
import HighlightProduct from '@/components/HighlightProduct'; // Import the HighlightProduct component

const Index = () => {
  return (
    <>
      <Head>
        {/* Tambahkan judul atau tag head lainnya di sini */}
      </Head>

      <div className={home.container}>
        <div className={home.head}>
          <h1>Products</h1>
        </div>

        <div className={home.carousel}>
          {/* Komponen Carousel */}
          <HighlightProduct /> {/* Render the HighlightProduct component */}
        </div>

        <div>
          <ul className={home.list_outside}>
            <li className={home.list_inside}>
              <CardProduct productId="1" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="2" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="3" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="4" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="5" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="6" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="7" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;

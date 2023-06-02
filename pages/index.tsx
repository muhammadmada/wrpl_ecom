import Head from 'next/head'
import CardProduct from '@/components/CardProduct'
import home from '@/styles/Home.module.css'

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
        <div>
          <ul className={home.list_outside}>
            <li className={home.list_inside}>
              <CardProduct productId="1" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1" />
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1"/>
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1"/>
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1"/>
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1"/>
            </li>
            <li className={home.list_inside}>
              <CardProduct productId="1"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Index

import Head from 'next/head'
import Card_Product from '@/components/CardProduct'
import home from '@/styles/Home.module.css'

const index = () => {
    return (
        <>
        <Head>
        </Head>
        <div className={home.container}>
            <div className={home.head}>
                <h1>Products</h1>
            </div>
            <div>
                <ul className={home.list_outside}>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                    <li className={home.list_inside}>
                        <Card_Product />
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default index
import Script from 'next/script'
import Head from 'next/head'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'

const mainFont = JetBrains_Mono({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mainFont.className}>
      <Layout>
        <Head>
          <title>Ecommerce</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
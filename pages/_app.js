
import Head from "next/head";
import {SSRProvider} from '@react-aria/ssr'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.scss'
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>PCERJ</title>
        <meta name="description" content="Polícia Civil do Rio de Janeiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/api/data" as="fetch" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Footer></Footer>
    </>
  )
}

export default MyApp

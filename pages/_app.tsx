import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store";
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Head>
      <title>Ответы, Прохождение игр.</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="THE ANSWERS.SU - Ответы, Прохождение игр." />
      <meta name="keywords" content="Ответы, Прохождение игр." />
      <meta name="revisit" content="7" />
      <meta name="url" content="https://theanswers.su" />
    </Head>
    <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-LSYP07Q0S2"
    />

    <Script id={"ganalytics"} strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-LSYP07Q0S2');
        `}
    </Script>

    <Component {...pageProps} />
  </Provider>
}

export default MyApp

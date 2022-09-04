import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store";
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>

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

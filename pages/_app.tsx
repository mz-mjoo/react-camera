import '../styles/globals.css';
// import 'normalize.css';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '@emotion/react';
import {theme} from '@/components/utils/theme';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=750, user-scalable=no, target-densitydpi=device-dpi viewport-fit=cover"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

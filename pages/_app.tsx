import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/bootstrap_overrides.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/calculator.css';
import CookieConsentBanner from '../components/CookieConsentBanner';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='With our free online tool, you can effortlessly solve Chinese Remainder Theorem problems in no time.'
        />
        <title>Chinese Remainder Theorem Calculator</title>
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <CookieConsentBanner />
      </ThemeProvider>
    </>
  );
}

export default App;

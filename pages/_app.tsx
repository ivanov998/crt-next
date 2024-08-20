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
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          href='/favicon-32x32.png'
          sizes='32x32'
          type='image/png'
        />
        <link
          rel='icon'
          href='/favicon-64x64.png'
          sizes='64x64'
          type='image/png'
        />
        <link
          rel='icon'
          href='/favicon-72x72.png'
          sizes='72x72'
          type='image/png'
        />
        <link
          rel='icon'
          href='/favicon-96x96.png'
          sizes='96x96'
          type='image/png'
        />
        <link rel='apple-touch-icon' href='/favicon-72x72.png' sizes='72x72' />
        <meta name='msapplication-TileImage' content='/favicon-256x256.png' />
        <meta name='msapplication-TileColor' content='#ffffff' />
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

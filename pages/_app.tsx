import { AppProps } from 'next/app';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import Layout from '../components/Layout';
import { ThemeProvider } from '../contexts/ThemeContext';
import CookieConsentBanner from '../components/CookieConsentBanner';
import '../styles/bootstrap_overrides.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/calculator.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
        />
        <title>Chinese Remainder Theorem Calculator</title>
        <meta
          name='description'
          content='Use our Chinese Remainder Theorem Calculator to solve systems of congruences with detailed step-by-step solutions. Easily find solutions to CRT problems online.'
        />
        <meta
          property='og:title'
          content='Chinese Remainder Theorem Calculator with Steps | CRT Solver'
        />
        <meta
          property='og:description'
          content='Solve Chinese Remainder Theorem problems with our online calculator and get step-by-step explanations. Ideal for students and professionals.'
        />
        <meta
          property='og:image'
          content='https://chinese-remainder-calculator.com/og-256x256.png'
        />
        <meta
          property='og:url'
          content='https://chinese-remainder-calculator.com/'
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Chinese Remainder Theorem Calculator with Steps | CRT Solver'
        />
        <meta
          name='twitter:description'
          content='Solve Chinese Remainder Theorem problems online and get detailed steps with our free calculator. Perfect for learning and problem-solving.'
        />
        <meta
          name='twitter:image'
          content='https://chinese-remainder-calculator.com/og-256x256.png'
        />
        <meta
          name='keywords'
          content='Chinese Remainder Theorem calculator, CRT solver, Chinese Remainder Theorem with steps, solve CRT online, congruence calculator, number theory calculator, math calculator, online math tool, algebra calculator, step by step CRT solutions'
        />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://chinese-remainder-calculator.com/'
        />
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
        <meta name='msapplication-TileImage' content='/og-256x256.png' />
        <meta name='msapplication-TileColor' content='#ffffff' />
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

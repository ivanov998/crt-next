import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

export default function Document() {
  return (
    <Html data-bs-theme='dark'>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Catamaran:500,700,900&amp;display=swap'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

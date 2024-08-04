import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html>
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
}

export default MyDocument;

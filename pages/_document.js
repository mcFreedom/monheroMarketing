import Document, { Html, Head, Main, NextScript } from "next/document";
import { webUrl } from "../utils/constants";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.svg" />
          <link rel="canonical" href={webUrl} />
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

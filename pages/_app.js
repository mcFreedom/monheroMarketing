import Head from "next/head";
import "../css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Monhero</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Monhero. The only private asset manager"
        />
        <meta
          name="keywords"
          content="season, fruit, vegetable, meat, cheese, fish, seafood, mushroom, taste"
        />
        <meta name="author" content="Growings LLC" />
        <meta
          name="p:domain_verify"
          content="015a5bb03cd40099d8d156150671a598"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

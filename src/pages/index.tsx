import Head from "next/head";
import ProductList from "../components/ProductList";
import "../styles/style.scss";

export default () => (
  <>
    <Head>
      <head lang="en">
        <meta charSet="UTF-8" />
        <title className="title-site">Hiếu An</title>
        <meta
          name="viewport"
          id="lp-viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="https://static.ladipage.net/googlefonts/css?family=Open+Sans:400,600,700|Montserrat:300,400,600,700|Roboto+Slab:300,400,700|Roboto:300,400,700&amp;subset=latin-ext,vietnamese"
          media="none"
        />
      </head>
    </Head>
    <div className="body">
      <div>ETB</div>
      <ProductList />
    </div>
  </>
);

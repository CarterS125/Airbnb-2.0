import Head from "next/head";
import "tailwindcss/tailwind.css";
import Router from "next/router";
import "../styles/global.css";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// https://tailwindcss.com/docs/guides/nextjs
// npx create-next-app -e with-tailwindcss my-project

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/layouts";

import NProgress from "nprogress";
import { Router } from "next/router";
import KindProvider from "@/contexts/KindProvider";

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <KindProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </KindProvider>
  );
}

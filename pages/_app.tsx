import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: ReactElement;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

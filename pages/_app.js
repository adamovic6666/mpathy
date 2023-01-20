import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";

import { Roboto } from "@next/font/google";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;

import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={roboto.className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

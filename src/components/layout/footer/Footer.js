import classes from "./Footer.module.css";
import Link from "next/link";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`${classes.Footer} ${roboto.className}`}>
      <div className="container">
        <p>
          <span>Copyright © 2023 Mpathy Apps.</span>
          <span>All rights reserved.</span>
        </p>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

import classes from "./Footer.module.css";
import Link from "next/link";

import SocialMedia from "../sections/SocialMedia";

const Footer = () => {
  return (
    <footer className={`${classes.Footer}`}>
      <div className="container">
        <p>
          <span>Copyright © 2023 Mpathy Apps CIC. </span>
          <span>All rights reserved.</span>
        </p>
        <SocialMedia />
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

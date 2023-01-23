import classes from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../../components/svgs/logo.svg";
import LogoBlue from "../../components/svgs/logo-blue.svg";

const Logo = ({ isWhite }) => {
  return (
    <div
      className={`${classes.Logo} ${
        !isWhite ? classes.RegularColor : classes.White
      }`}
    >
      <Link href="/">{isWhite ? <LogoWhite /> : <LogoBlue />}</Link>
    </div>
  );
};

export default Logo;

import classes from "./Logo.module.css";
import Link from "next/link";
import LogoWhite from "../../components/svgs/logo.svg";
import LogoBlue from "../../components/svgs/logo-blue.svg";

const Logo = ({ isWhite, isOpen }) => {
  console.log(isWhite);
  return (
    <div
      style={{ opacity: isOpen ? "0" : "1" }}
      className={`${classes.Logo} ${
        !isWhite ? classes.RegularColor : classes.White
      }`}
    >
      <Link href="/">{isWhite ? <LogoWhite /> : <LogoBlue />}</Link>
    </div>
  );
};

export default Logo;

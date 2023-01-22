import classes from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ isWhite }) => {
  return (
    <div
      className={`${classes.Logo} ${
        !isWhite ? classes.RegularColor : classes.White
      }`}
    >
      <Link href="/">
        <Image
          src={isWhite ? "/assets/logo.png" : "/assets/mpathy-logo-blue.png"}
          width={isWhite ? 64 : 52}
          height={isWhite ? 64 : 52}
          alt="logo-image"
        />
      </Link>
    </div>
  );
};

export default Logo;

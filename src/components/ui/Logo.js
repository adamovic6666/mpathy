import classes from "./Logo.module.css";
import Image from "next/image";

const Logo = ({ isWhite }) => {
  return (
    <div
      className={`${classes.Logo} ${
        !isWhite ? classes.RegularColor : classes.White
      }`}
    >
      <Image src="/assets/logo.png" width={64} height={64} alt="logo-image" />
    </div>
  );
};

export default Logo;

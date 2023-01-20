import classes from "./Hero.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "../../ui/Link";

const Hero = ({ title, image, description }) => {
  const { pathname } = useRouter();
  const isMainPage = pathname === "/";
  return (
    <div
      className={`container ${classes.Hero} ${
        isMainPage ? classes.HeroExtendedPadding : ""
      }`}
    >
      <div>
        <Image src={image} width={300} height={300} className={classes.Image} />
      </div>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {isMainPage && (
          <div className={classes.LinksWrapper}>
            <Link href="https://www.google.com/">Donate</Link>
            <Link type="transparent" href="https://www.google.com/">
              Join us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

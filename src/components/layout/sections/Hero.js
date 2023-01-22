import classes from "./Hero.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "../../ui/Link";

const Hero = ({ title, image, description }) => {
  const { pathname } = useRouter();
  const isMainPage = pathname === "/";
  const isOurMissionPage = pathname === "/our-mission";
  const isJoinUsPage = pathname === "/join-us";

  return (
    <div
      className={`container ${classes.Hero} ${
        isMainPage ? classes.HeroExtendedPadding : ""
      }`}
    >
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          className={`${isJoinUsPage ? classes.JoinUseImage : ""} ${
            isOurMissionPage ? classes.OurMissionImage : ""
          } ${classes.Image}`}
        />
      </div>
      <div>
        <h1>{title}</h1>
        <div
          className={isMainPage || isJoinUsPage ? classes.MaxWidth : ""}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {(isMainPage || isJoinUsPage) && (
          <div className={classes.LinksWrapper}>
            {!isJoinUsPage && (
              <Link href="https://www.google.com/">Donate</Link>
            )}
            <Link
              type={isMainPage && "transparent"}
              href="https://www.google.com/"
            >
              Join us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

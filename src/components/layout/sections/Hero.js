import classes from "./Hero.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "../../ui/Link";
import HeroSvg from "../../svgs/HeroSvg";
import JoinUsSvg from "../../svgs/JoinUsSvg";

const Hero = ({ title, description, image }) => {
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
        {/* {isMainPage && <HeroSvg />}
        {isJoinUsPage && <JoinUsSvg />} */}
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
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
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

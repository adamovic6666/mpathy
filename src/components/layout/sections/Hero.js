import classes from "./Hero.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "../../ui/Link";
import HeroSvg from "../../svgs/mpathy-hero.svg";
import JoinUsSvg from "../../svgs/mpathy-join-us.svg";
import Title from "../../svgs/mpathy-title.svg";
import OurMissionSvg from "../../svgs/mpathy-our-mission.svg";
import OurCrewSvg from "../../svgs/mpathy-our-crew.svg";

const Hero = ({ title, description, image }) => {
  const { pathname } = useRouter();
  const isMainPage = pathname === "/";
  const isOurMissionPage = pathname === "/our-mission";
  const isJoinUsPage = pathname === "/join-us";
  const isOurCrewPage = pathname === "/our-crew";

  return (
    <div
      className={`container ${classes.Hero} ${
        isMainPage ? classes.HeroExtendedPadding : ""
      } ${isJoinUsPage ? classes.HeroSvgJoinUsPosition : ""} ${
        isOurMissionPage ? classes.HeroSvgOurMissionPosition : ""
      }`}
    >
      <div>
        {isMainPage && <HeroSvg />}
        {isJoinUsPage && <JoinUsSvg />}
        {isOurMissionPage && <OurMissionSvg />}
        {isOurCrewPage && <OurCrewSvg />}
      </div>
      <div>
        {isMainPage && <Title />}{" "}
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

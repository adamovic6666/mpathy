import classes from "./Hero.module.css";
import { useRouter } from "next/router";
import Link from "../../ui/Link";
import HeroSvg from "../../svgs/mpathy-hero.svg";
import JoinUsSvg from "../../svgs/mpathy-join-us.svg";
import Title from "../../svgs/mpathy-title.svg";
import OurMissionSvg from "../../svgs/mpathy-our-mission.svg";
import OurCrewSvg from "../../svgs/mpathy-our-crew.svg";
import MouseScroll from "../../ui/MouseScroll";
import { useEffect, useState } from "react";

const Hero = ({ title, description }) => {
  const { pathname } = useRouter();
  const [removeScroller, setRemoveScroller] = useState(false);
  const isMainPage = pathname === "/";
  const isOurMissionPage = pathname === "/our-mission";
  const isJoinUsPage = pathname === "/join-us";
  const isOurCrewPage = pathname === "/our-team";

  useEffect(() => {
    const handleScroll = () => {
      let height = screen.height;
      let top = window.pageYOffset;
      if (top > height / 4) {
        setRemoveScroller(true);
        return;
      }
      setRemoveScroller(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {isMainPage && <Title className={classes.Title} />}
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
        <div
          className={isMainPage || isJoinUsPage ? classes.MaxWidth : ""}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {(isMainPage || isJoinUsPage) && (
          <div className={classes.LinksWrapper}>
            {!isJoinUsPage && (
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=8XD94W7RRUQMC"
                target="_blank"
              >
                Donate
              </a>
            )}
            {isMainPage && (
              <Link type={isMainPage && "transparent"} href="/join-us">
                Join us
              </Link>
            )}
          </div>
        )}
      </div>
      {!isMainPage && <MouseScroll removeScroller={removeScroller} />}
    </div>
  );
};

export default Hero;

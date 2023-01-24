import { useState, useEffect } from "react";
import NavLink from "../../ui/Navlink";
import Hamburger from "hamburger-react";
import Logo from "../../ui/Logo";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "../../../data/data";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [headerIsVisible, setHeaderIsVisible] = useState(false);
  const router = useRouter();
  const isMainPage = router.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setHeaderIsVisible(window.pageYOffset > 1);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <MobileNav
        isOpen={isOpen}
        setOpen={() => {
          setOpen(false);
        }}
      />
      <header
        className={` ${classes.Header} ${isOpen ? classes.OpenNav : ""}  ${
          isMainPage ? classes.Initial : classes.PrivacyHeader
        } ${headerIsVisible ? classes.Close : ""}`}
      >
        <div className={`${classes.NavWrapper} $ container`}>
          <Logo isWhite={true} />
          <nav className={classes.Nav}>
            <ul className={classes.NavList}>
              {NAV_LINKS.map(({ name, id, href }) => (
                <NavLink href={href} key={id} setOpen={setOpen}>
                  {name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>
      <header
        className={`${classes.Header} ${isOpen ? classes.OpenNav : ""}  ${
          classes.OnScroll
        } ${headerIsVisible ? classes.Open : ""} ${
          headerIsVisible ? "visible-header" : ""
        }`}
      >
        <div className={`${classes.NavWrapper} container`}>
          <Logo isWhite={false} isOpen={isOpen} />
          <nav className={classes.Nav}>
            <ul className={classes.NavList}>
              {NAV_LINKS.map(({ name, id, href }) => (
                <NavLink href={href} key={id} setOpen={setOpen}>
                  {name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;

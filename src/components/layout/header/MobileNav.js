import { NAV_LINKS } from "../../../data/data";
import Logo from "../../ui/Logo";
import NavLink from "../../ui/Navlink";
import SocialMedia from "../sections/SocialMedia";
import classes from "./MobileNav.module.css";
// import LinkedIn from "../../svgs/LinkedIn";
// import Mail from "../../svgs/Mail";

const MobileNav = ({ setOpen, isOpen }) => {
  return (
    <div className={`${classes.MobileNav} ${isOpen ? classes.Open : ""}`}>
      <Logo isWhite={true} />
      <nav className={classes.Nav}>
        <ul className={classes.NavList}>
          {NAV_LINKS.map(({ name, id, href }) => (
            <NavLink href={`${href}`} key={id} setOpen={setOpen}>
              {name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className={classes.LinksWrapper}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default MobileNav;

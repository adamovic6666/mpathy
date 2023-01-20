import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ href, children, type }) => (
  <NextLink href={href}>
    <div
      className={`${type === "transparent" ? classes.Transparent : ""} ${
        classes.Link
      }`}
    >
      {children}
    </div>
  </NextLink>
);

export default Link;

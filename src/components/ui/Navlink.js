import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, setOpen, href }) => {
  const { route } = useRouter();

  return (
    <li
      className={"/" + href === route ? "active-link" : ""}
      onClick={() => setOpen(false)}
    >
      <Link href={`/${href}`}>{children}</Link>
    </li>
  );
};

export default NavLink;

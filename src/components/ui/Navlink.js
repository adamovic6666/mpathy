import Link from "next/link";

const NavLink = ({ children, setOpen, href }) => {
  return (
    <li onClick={() => setOpen(false)}>
      <Link href={`/${href}`}>{children}</Link>
    </li>
  );
};

export default NavLink;

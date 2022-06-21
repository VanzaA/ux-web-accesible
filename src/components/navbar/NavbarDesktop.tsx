import { Item } from "./Navbar";
import { Link } from "react-router-dom";
import cn from "classnames";

const NavItem = ({ text, imgSrc, linkTo, selected }: Item) => (
  <>
    <Link
      to={linkTo}
      className={cn({
        selected,
      })}
    >
      {imgSrc} <span>{text}</span>
    </Link>
  </>
);

type NavbarDesktopProps = {
  items: Item[];
};

const NavbarDesktop = ({ items }: NavbarDesktopProps) => (
  <nav className="navbar-desktop">
    {items.map((item) => (
      <NavItem key={`navbar_item_${item.text}`} {...item} />
    ))}
  </nav>
);

export default NavbarDesktop;

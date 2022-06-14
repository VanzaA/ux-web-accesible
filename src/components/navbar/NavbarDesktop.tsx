import { Item } from "./Navbar";
import { Link } from "react-router-dom";

const NavItem = ({ text, imgSrc, linkTo }: Item) => (
  <>
    <Link to={linkTo}>
      <img src={imgSrc} alt="" /> <span>{text}</span>
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

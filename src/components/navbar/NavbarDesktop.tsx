import { Item } from "./Navbar";

const NavItem = ({ text, imgSrc, linkTo }: Item) => (
  <>
    <a href={linkTo}>
      <img src={imgSrc} alt="" /> <span>{text}</span>
    </a>
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

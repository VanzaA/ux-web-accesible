type Item = {
  text: string;
  linkTo: string;
  imgSrc: string;
};

const NavItem = ({ text, imgSrc, linkTo }: Item) => (
  <>
    <a href={linkTo}>
      <img src={imgSrc} alt="imagen decorativa" /> <span>{text}</span>
    </a>
  </>
);

type NavbarDesktopProps = {
  items: Item[];
};

const NavbarDesktop = ({ items }: NavbarDesktopProps) => (
  <nav className="navbar-desktop">
    {items.map((item) => (
      <NavItem imgSrc={item.imgSrc} text={item.text} linkTo={item.linkTo} />
    ))}
  </nav>
);

export default NavbarDesktop;

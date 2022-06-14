import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Hand from "../../assets/hand.svg";
import Watch from "../../assets/watch.svg";
import User from "../../assets/user.svg";
import "./styles.css";

export type Item = {
  text: string;
  linkTo: string;
  imgSrc: string;
};

const items: Item[] = [
  { imgSrc: Watch, text: "Inundaciones", linkTo: "/" },
  { imgSrc: Hand, text: "Sobre Denuncias", linkTo: "/" },
  { imgSrc: Hand, text: "Informacion util", linkTo: "/" },
  { imgSrc: User, text: "Mi cuenta", linkTo: "/" },
];

const Navbar = () => (
  <>
    <NavbarDesktop items={items} />
    <NavbarMobile items={items} />
  </>
);

export default Navbar;

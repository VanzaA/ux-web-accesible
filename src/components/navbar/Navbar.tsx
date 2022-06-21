import { useLocation } from "react-router";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Hand from "../../assets/hand";
import Watch from "../../assets/watch";
import User from "../../assets/user";
import "./styles.css";

type CommonItemAttributes = {
  text: string;
  linkTo: string;
  selected?: boolean;
};

type NotMappedItem = {
  imgSrc: ({ fill, stroke }: { fill: string; stroke: string }) => JSX.Element;
} & CommonItemAttributes;

export type Item = {
  imgSrc: JSX.Element;
} & CommonItemAttributes;

const svgProps = {
  fill: "#16336b",
  stroke: "#16336b",
};
const selectedSvgProps = {
  fill: "#405818",
  stroke: "#405818",
};

const items: NotMappedItem[] = [
  { imgSrc: Watch, text: "Inundaciones", linkTo: "/" },
  { imgSrc: Hand, text: "Sobre Denuncias", linkTo: "/about" },
  { imgSrc: Hand, text: "Informacion util", linkTo: "/info" },
  { imgSrc: User, text: "Mi cuenta", linkTo: "/profile" },
];

const Navbar = () => {
  const location = useLocation();
  const actualRoute = location.pathname;

  const navItems = items.map((item): Item => {
    if (actualRoute === item.linkTo) {
      return {
        ...item,
        imgSrc: item.imgSrc(selectedSvgProps),
        selected: true,
      };
    }
    return {
      ...item,
      imgSrc: item.imgSrc(svgProps),
    };
  });

  return (
    <>
      <NavbarDesktop items={navItems} />
      <NavbarMobile items={navItems} />
    </>
  );
};

export default Navbar;

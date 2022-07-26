import { useLocation } from "react-router";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Hand from "../../assets/hand";
import Watch from "../../assets/watch";
import User from "../../assets/user";
import Config from "../../assets/config";
import "./styles.css";

type CommonItemAttributes = {
  text: string;
  linkTo: string;
  selected?: boolean;
  alias: string[];
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
  {
    imgSrc: Watch,
    text: "Inundaciones",
    linkTo: "/",
    alias: ["/"],
  },
  {
    imgSrc: Hand,
    text: "Sobre Denuncias",
    linkTo: "/about",
    alias: ["/about", "/list", "/submitIssue"],
  },
  { imgSrc: Hand, text: "Información util", linkTo: "/info", alias: ["/info"] },
  {
    imgSrc: Config,
    text: "Configuración",
    linkTo: "/profile",
    alias: ["/profile"],
  },
  {
    imgSrc: User,
    text: "Administración",
    linkTo: "/login",
    alias: ["/login"],
  },
];

const Navbar = () => {
  const location = useLocation();
  const actualRoute = location.pathname.toLowerCase();

  const navItems = items.map((item): Item => {
    if (item.alias.some((alias) => alias === actualRoute)) {
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

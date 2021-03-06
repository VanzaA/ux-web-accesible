import { useRef, useEffect, useState } from "react";
import cn from "classnames";
import { Item } from "./Navbar";
import Menu from "../../assets/burger-menu.svg";
import Close from "../../assets/close.svg";
import { Link } from "react-router-dom";

type NavbarMobileProps = {
  items: Item[];
};

type ListProps = { onClick: () => void } & NavbarMobileProps;

type DrawerItemProps = {
  onClick: () => void;
} & Item;

const DrawerItem = ({
  imgSrc,
  linkTo,
  text,
  selected,
  onClick,
}: DrawerItemProps) => (
  <>
    <Link
      to={linkTo}
      onClick={onClick}
      className={cn({
        selected,
      })}
    >
      {imgSrc} <span>{text}</span>
    </Link>
  </>
);

const DrawerList = ({ items, onClick }: ListProps) => (
  <>
    {items.map((item) => (
      <DrawerItem
        key={`drawer_item_${item.text}`}
        {...item}
        onClick={onClick}
      />
    ))}
  </>
);

type DrawerProps = {
  open: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
  onClose: () => void;
};

const Drawer = ({ open, children, className, onClose }: DrawerProps) => {
  const position = "left";
  const bodyRef = useRef(document.querySelector("body"));

  useEffect(() => {
    const updatePageScroll = () => {
      if (open) {
        bodyRef.current!.style.overflow = "hidden";
      } else {
        bodyRef.current!.style.overflow = "";
      }
    };
    updatePageScroll();
  }, [open]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const buttonMap = document.querySelector(".leaflet-control-zoom");
    const legendMap = document.querySelector(".leaflet-control-attribution");
    if (open) {
      if (buttonMap) buttonMap.classList.add("hidden");
      if (legendMap) legendMap.classList.add("hidden");
      window.addEventListener("keyup", onKeyPress);
    } else {
      if (buttonMap) buttonMap.classList.remove("hidden");
      if (legendMap) legendMap.classList.remove("hidden");
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={open ? "false" : "true"}
      className={cn("drawer-container", {
        open: open,
        className,
      })}
    >
      <div className={cn("drawer", position)} role="dialog">
        {children}
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};

const NavbarMobile = ({ items }: NavbarMobileProps) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <nav className="navbar-mobile">
      <button type="button" onClick={openDrawer}>
        <img src={Menu} alt="Menu hamburguesa" />
      </button>
      <Drawer open={open} onClose={closeDrawer}>
        <DrawerList items={items} onClick={closeDrawer} />
        <button type="button" onClick={closeDrawer}>
          <img src={Close} alt="Cerrar" />
        </button>
      </Drawer>
      <h1 id="mobile-header">Header</h1>
    </nav>
  );
};

export default NavbarMobile;

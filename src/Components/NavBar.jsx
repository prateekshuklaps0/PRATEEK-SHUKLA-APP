import styles from "../ComponentsCSS/NavBar.module.css";

import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { Context } from "../Contexts/Context";

// Chakra UI Imports **********************************
import {
  Image,
  Heading,
  Spinner,
  Badge,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CheckboxGroup,
  useToast,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Accordion,
  AccordionItem,
  PinInput,
  PinInputField,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CircularProgress,
  CircularProgressLabel,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Skeleton,
  Box,
  Progress,
  Input,
} from "@chakra-ui/react";

// Name Logo ******************************************
function NameLogo() {
  const { LogoFont } = useContext(Context);
  return (
    <NavLink
      style={{ fontFamily: LogoFont }}
      to="/"
      className={styles.NameText}
    >
      Prateek
    </NavLink>
  );
}

// Right Navigations  ******************************************
const NavOptionsList = [
  { title: "About Me", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Let's Talk", to: "/chat" },
];
const RightNavLists = () => {
  return (
    <div className={styles.rightLinksCont}>
      {NavOptionsList.map((item, ind) => (
        <NavLink
          className={styles.NavLinkComp}
          to={item.to}
          data-testid="nav-link"
          key={ind + item.title}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

// Hamburger Menu  ******************************************
function HamburgerMenuCont() {
  return (
    <div className={styles.HamburgerMenu}>
      <HamburgerMenu />
    </div>
  );
}

// Main Container
function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? styles.NavContBlurred : styles.NavCont}>
      <NameLogo />
      <RightNavLists />
      <HamburgerMenuCont />
    </div>
  );
}
export { NavBar };

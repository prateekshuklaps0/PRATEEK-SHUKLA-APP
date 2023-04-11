import styles from "../ComponentsCSS/NavBar.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

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
  return <h1 className={styles.NameText}>Prateek</h1>;
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
        <NavLink to={item.to} data-testid="nav-link" key={ind + item.title}>
          <h1 className="NavLinkItems">{item.title}</h1>
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

function NavBar() {
  return (
    <div className={styles.NavCont}>
      <NameLogo />
      <RightNavLists />
      <HamburgerMenuCont />
    </div>
  );
}
export { NavBar };

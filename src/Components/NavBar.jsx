import styles from "../ComponentsCSS/NavBar.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
function RightNavLists() {
  return (
    <div className={styles.rightLinks}>
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/social">Social</NavLink>
      <NavLink to="/chat">Let's Talk</NavLink>
    </div>
  );
}

// Hamburger Menu  ******************************************
function HamburgerMenu() {
  return <div className={styles.HamburgerMenu}>HamburgerMenu</div>;
}

function NavBar() {
  return (
    <div className={styles.NavCont}>
      <NameLogo />
      <RightNavLists />
      <HamburgerMenu />
    </div>
  );
}
export { NavBar };

import styles from "../ComponentsCSS/NavBar.module.css";
import {
  Drawer,
  Divider,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  useDisclosure,
  Button,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { MenuOutlined } from "@ant-design/icons";
import { MdBlurOn } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DrawerImage from "../Images/BackgroundImages/10.jpg";

const NavOptionsList = [
  { title: "About Me", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Let's Talk", to: "/chat" },
];

const HamburgerMenu = () => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <div>
      {/* Hamburger Icon */}
      <MdBlurOn
        className={styles.HamburgerIcon}
        onClick={() => handleClick("xs")}
        size={40}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />

        {/* Any Styles needed to apply, apply to this drawerContent */}
        <DrawerContent
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: "20px",
            borderTopLeftRadius: "20px",
            backgroundImage: `url(${DrawerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <DrawerHeader onClick={() => onClose()}>
            <ArrowRightIcon color="blue" />
          </DrawerHeader>
          <DrawerBody>
            <div className={styles.HamburgerLinkCont}>
              {NavOptionsList.map((item, ind) => (
                <NavLink
                  disabled={true}
                  className={styles.HamburgerNavLinks}
                  to={item.to}
                  data-testid="nav-link"
                  key={ind + item.title}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;

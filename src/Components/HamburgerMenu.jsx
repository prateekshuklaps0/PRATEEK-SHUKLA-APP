import styles from "../ComponentsCSS/NavBar.module.css";
import {
  Drawer,
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
      <MdBlurOn onClick={() => handleClick("xs")} size={30} color="white" />

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader onClick={() => onClose()}>
            <ArrowRightIcon color="blue" />
          </DrawerHeader>
          <DrawerBody>
            <div
              style={{
                height: "100%",
              }}
            >
              {NavOptionsList.map((item, ind) => (
                <NavLink
                  to={item.to}
                  data-testid="nav-link"
                  key={ind + item.title}
                >
                  <h1 style={{ backgroundColor: "red" }}>{item.title}</h1>
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

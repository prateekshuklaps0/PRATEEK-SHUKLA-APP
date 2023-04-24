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
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../Contexts/Context";

const NavOptionsList = [
  { title: "About Me", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Let's Talk", to: "/chat" },
];

const HamburgerMenu = () => {
  const { DrawerImage, DrawerFont } = useContext(Context);
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
            borderBottomLeftRadius: "15px",
            borderTopLeftRadius: "15px",
            backgroundImage: `url(${DrawerImage.type})`,
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
                  style={{ fontFamily: DrawerFont }}
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

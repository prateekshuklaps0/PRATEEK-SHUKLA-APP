// Libraries *************************************
import styles from "../ComponentsCSS/HomePage.module.css";
import { useState, useEffect } from "react";
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

// Other Components Import ***********************

// Main Function *********************************
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          // backgroundColor: "rgba(69, 155, 254, 0.459)",
        }}
      >
        {new Array(40).fill(1).map((item, ind) => {
          return <h1 key={ind}>This is test Div {ind}</h1>;
        })}
      </div>
    </div>
  );
};
export default HomePage;

// Libraries *************************************
import { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Spinner,
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
import {
  LoadingAnim1,
  LoadingAnim2,
  LoadingAnim3,
} from "../Components/LoadingAnim";
import { NumGenerator } from "../Components/NumGenerator";

// Main Function *********************************
const HomePage = () => {
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading((prev) => true);
    const timer = setTimeout(() => {
      setisloading((prev) => false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  document.title = `Prateek Shukla`;
  return isloading ? (
    <div>{NumGenerator(1) % 2 != 0 ? <LoadingAnim1 /> : <LoadingAnim2 />}</div>
  ) : (
    <Box>
      <Heading as="h1" size="xl">
        THIS IS HOMEPAGE
      </Heading>
    </Box>
  );
};
export default HomePage;

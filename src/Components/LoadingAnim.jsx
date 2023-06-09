import {
  Image,
  Heading,
  Spinner,
  Checkbox,
  Img,
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
  Center,
  ScaleFade,
  Text,
  Slide,
  SlideFade,
  Skeleton,
  Box,
  Progress,
  Input,
} from "@chakra-ui/react";
import { ScrollToTop } from "react-scroll-to-top";
// *************************

import styles from "../ComponentsCSS/LoadingAnim.module.css";

// Import Images
import LoadingImg from "../Images/MyPic/MyPic1.png";
import BackgroundImg from "../Images/BackgroundImages/4.jpg";
import Gif1 from "../Images/Gifs/1.gif";
import Gif2 from "../Images/Gifs/2.gif";
import Gif3 from "../Images/Gifs/3.gif";
import PageNotFoundGif from "../Images/Gifs/PageNotFoundGif.gif";
import { red } from "@mui/material/colors";

const LoadingAnim1 = () => {
  return (
    <div className={styles.animatedDiv}>
      <Center h="100%">
        <img className={styles.Img} src={Gif1} alt="Example GIF" />
      </Center>
    </div>
  );
};

const LoadingAnim2 = () => {
  return (
    <div className={styles.animatedDiv}>
      <Center h="100%">
        <img className={styles.Img} src={Gif2} alt="Example GIF" />
      </Center>
    </div>
  );
};

const LoadingAnim3 = () => {
  return (
    <div className={styles.animatedDiv}>
      <Center h="100%">
        <img className={styles.Img} src={Gif3} alt="Example GIF" />
      </Center>
    </div>
  );
};

const LoadingAnim4 = () => {
  return (
    <div
      className="ImageLoadCont"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "1500px",
      }}
    >
      <Progress height="5px" size="xs" isIndeterminate />
      <div className={styles.animatedDiv}>
        <Center h="100%">
          <Img src={LoadingImg} borderRadius="full" boxSize="150px" />
        </Center>
      </div>
    </div>
  );
};

const PageNotFoundAnim = () => {
  return (
    <div className={styles.animatedDiv}>
      <img className={styles.Img} src={PageNotFoundGif} alt="Example GIF" />
    </div>
  );
};

export {
  LoadingAnim1,
  LoadingAnim2,
  LoadingAnim3,
  LoadingAnim4,
  PageNotFoundAnim,
};

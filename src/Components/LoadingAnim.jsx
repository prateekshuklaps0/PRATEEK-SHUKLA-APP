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
// *************************

import styles from "../ComponentsCSS/LoadingAnim.module.css";

// Import Gifs
import Gif1 from "../Images/Gifs/1.gif";
import Gif2 from "../Images/Gifs/2.gif";
import Gif3 from "../Images/Gifs/3.gif";
import PageNotFoundGif from "../Images/Gifs/PageNotFoundGif.gif";

const LoadingAnim1 = () => {
  return (
    <div className={styles.animatedDiv}>
      <img className={styles.Img} src={Gif1} alt="Example GIF" />
    </div>
  );
};

const LoadingAnim2 = () => {
  return (
    <div className={styles.animatedDiv}>
      <img className={styles.Img} src={Gif2} alt="Example GIF" />
    </div>
  );
};

const LoadingAnim3 = () => {
  return (
    <div className={styles.animatedDiv}>
      <img className={styles.Img} src={Gif3} alt="Example GIF" />
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

export { LoadingAnim1, LoadingAnim2, LoadingAnim3, PageNotFoundAnim };

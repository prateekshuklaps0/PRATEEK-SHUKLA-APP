// Libraries *************************************
import { useState, useEffect } from "react";
import { Image, Box, Heading } from "@chakra-ui/react";

// Main Function ********************
const HomePage = () => {
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading((prev) => true);
    const timer = setTimeout(() => {
      setisloading((prev) => false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return isloading ? (
    <Box>
      <Heading as="h1" size="xl">
        Loading....
      </Heading>
    </Box>
  ) : (
    <Box>
      <Heading as="h1" size="xl">
        THIS IS HOMEPAGE
      </Heading>
    </Box>
  );
};
export default HomePage;

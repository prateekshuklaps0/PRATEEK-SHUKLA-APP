// Libraries *************************************
// import { ScrollToTop } from "react-scroll-to-top";
import { useState, useEffect, useContext } from "react";
import { Image } from "@chakra-ui/react";

// Other Components ******************************
import { Context } from "./Contexts/Context";
import { NavBar } from "./Components/NavBar";
import AllRoutes from "./Routes/Routes";
import {
  LoadingAnim1,
  LoadingAnim2,
  LoadingAnim3,
  LoadingAnim4,
} from "./Components/LoadingAnim";

// *************** Main Function *****************
function App() {
  const { AppBG } = useContext(Context);
  const [showAnim, setAnim] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnim((prev) => false);
    }, 100);
  }, []);

  return (
    <div>
      {showAnim ? (
        <div>
          <LoadingAnim4 />
        </div>
      ) : (
        <div
          className="App"
          style={{
            backgroundImage: `url(${AppBG.type})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            paddingTop: "51px",
          }}
        >
          <NavBar />
          <AllRoutes />
        </div>
      )}
    </div>
  );
}

export default App;

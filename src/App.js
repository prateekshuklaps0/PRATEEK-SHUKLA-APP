// Libraries *************************************
// import { ScrollToTop } from "react-scroll-to-top";
import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";

// Other Components ******************************
import { AuthProvider } from "./Contexts/AuthContext";
import AllRoutes from "./Routes/Routes";
import {
  LoadingAnim1,
  LoadingAnim2,
  LoadingAnim3,
  LoadingAnim4,
} from "./Components/LoadingAnim";
import BackgroundImg from "./Images/BackgroundImages/4.jpg";

// *************** Main Function *****************
function App() {
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
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <AllRoutes />
        </div>
      )}
    </div>
  );
}

export default App;

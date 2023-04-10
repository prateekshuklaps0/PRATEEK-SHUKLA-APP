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
import BackgroundImg from "./Images/BackgroundImages/1.jpg";

// *************** Main Function *****************
function App() {
  const [showAnim, setAnim] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnim((prev) => false);
    }, 3000);
  }, []);

  return (
    <div>
      {showAnim ? (
        <div>
          {/* <ScrollToTop /> */}
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
            height: "1500px",
          }}
        >
          <AllRoutes />
        </div>
      )}
    </div>
  );
}

export default App;

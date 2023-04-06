// Libraries *************************************
import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";

// Other Components ******************************
// import { ImageNames } from "./Data/ImageData";
import { AuthProvider } from "./Contexts/AuthContext";
import AllRoutes from "./Routes/Routes";

// *************** Main Function *****************
function App() {
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(${ImageNames[1]})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      //   backgroundAttachment: "fixed",
      //   height: "1500px",
      // }}
    >
      <AllRoutes />
    </div>
  );
}

export default App;

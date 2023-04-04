// Libraries *************************************
import { useState } from "react";

// Other Components ******************************
import { AuthProvider } from "./Contexts/AuthContext";
import AllRoutes from "./Routes/Routes";

// *************** Main Function *****************
function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;

import FontsArray from "../Fonts.json";

import { createContext, useState, useEffect, useRef } from "react";

// BackGround Images
import BGIMG1 from "../Images/BackgroundImages/1.jpg";
import BGIMG2 from "../Images/BackgroundImages/2.jpg";
import BGIMG3 from "../Images/BackgroundImages/3.jpg";
import BGIMG4 from "../Images/BackgroundImages/4.jpg";
import BGIMG5 from "../Images/BackgroundImages/5.jpg";
import BGIMG6 from "../Images/BackgroundImages/6.jpg";
import BGIMG7 from "../Images/BackgroundImages/7.jpg";
import BGIMG8 from "../Images/BackgroundImages/8.jpg";
import BGIMG9 from "../Images/BackgroundImages/9.jpg";
import BGIMG10 from "../Images/BackgroundImages/10.jpg";
const BackGroundImgArray = [
  <BGIMG1 />,
  <BGIMG2 />,
  <BGIMG3 />,
  <BGIMG4 />,
  <BGIMG5 />,
  <BGIMG6 />,
  <BGIMG7 />,
  <BGIMG8 />,
  <BGIMG9 />,
  <BGIMG10 />,
];

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // App Background Image
  const AppBG = BackGroundImgArray[3];

  const login = () => {
    // perform authentication logic
    setIsAuthenticated(true);
  };

  const logout = () => {
    // perform logout logic
    setIsAuthenticated(false);
  };

  // Logo Font - console.log(FontsArray.length);
  const LogoFont = FontsArray[8];

  return (
    <Context.Provider
      value={{ isAuthenticated, login, logout, LogoFont, AppBG }}
    >
      {children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };

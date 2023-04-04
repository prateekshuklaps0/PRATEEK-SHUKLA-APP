import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// Context API *****************
import { AuthProvider } from "../Contexts/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthProvider);

  return (
    <div></div>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    //   }
    // />
  );
};

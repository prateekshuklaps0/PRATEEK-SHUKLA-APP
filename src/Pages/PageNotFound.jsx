import { PageNotFoundAnim } from "../Components/LoadingAnim";
import { NavLink } from "react-router-dom";
// Main Function *******************

const PageNotFound = () => {
  return (
    <div>
      <PageNotFoundAnim />
      <NavLink to="./">Contact Prateek</NavLink>
    </div>
  );
};
export default PageNotFound;

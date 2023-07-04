import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Profile from "./component/Profile";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Profile />} />
    </RoutesWrapper>
  );
}

export default Routes;

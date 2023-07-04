import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Settings from "./component/Settings";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Settings />} />
    </RoutesWrapper>
  );
}

export default Routes;

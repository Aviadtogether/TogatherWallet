import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Notifications from "./component/Notifications";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Notifications />} />
    </RoutesWrapper>
  );
}

export default Routes;

import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Messages from "./component/Messages";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Messages />} />
    </RoutesWrapper>
  );
}

export default Routes;

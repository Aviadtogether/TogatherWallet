import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Home from "./component/Home";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Home />} />
    </RoutesWrapper>
  );
}

export default Routes;

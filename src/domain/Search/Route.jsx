import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Search from "./component/Search";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/"} element={<Search />} />
    </RoutesWrapper>
  );
}

export default Routes;

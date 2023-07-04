import { Routes as RoutesWrapper, Route } from "react-router-dom";

import TogetherInTheCity from "./privateZone/TogetherInTheCity";
import OrtSchool from "./privateZone/OrtSchool";
import View from "./component/View";
import Register from "./component/Register";

function Routes(props) {
  return (
    <RoutesWrapper>
      <Route path={"/together"} element={<TogetherInTheCity />} />
      <Route path={"/school"} element={<OrtSchool />} />
      <Route path={"/view/:id"} element={<View />} />
      <Route path={"/register/:id"} element={<Register />} />
    </RoutesWrapper>
  );
}

export default Routes;

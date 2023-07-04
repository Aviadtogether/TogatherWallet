import { Routes as RoutesWrapper, Route, Navigate } from "react-router-dom";

import Login from "./component/Login";
import Register from "./component/Register";

function Routes(props) {
  return (
    <RoutesWrapper>
      {/* Do it if not authenticated  */}
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </RoutesWrapper>
  );
}

export default Routes;

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomeRoutes from "../../../Home/Route";
import ActivitiesRoutes from "../../../Activities/Route";
import AuthRoutes from "../../../Auth/Route";
import MessagesRoutes from "../../../Messages/Route";
import NotificationsRoutes from "../../../Notifications/Route";
import ProfileRoutes from "../../../Profile/Route";
import RewardSystemRoutes from "../../../RewardSystem/Route";
import SearchRoutes from "../../../Search/Route";
import SettingsRoutes from "../../../Settings/Route";
import { UserContext } from "../../../../store/userContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && (
        <Routes>
          <Route path="/*" element={<HomeRoutes />} />
          <Route path="/profile/*" element={<ProfileRoutes />} />
          <Route path="/activities/*" element={<ActivitiesRoutes />} />
          <Route path="/reward/*" element={<RewardSystemRoutes />} />
          <Route path="/messages/*" element={<MessagesRoutes />} />
          <Route path="/search/*" element={<SearchRoutes />} />
          <Route path="/notifications/*" element={<NotificationsRoutes />} />
          <Route path="/settings/*" element={<SettingsRoutes />} />
        </Routes>
      )}
      {!isAuthenticated && (
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      )}
    </>
  );
}

export default App;

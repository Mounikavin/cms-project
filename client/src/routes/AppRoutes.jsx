import { Route, Routes } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import DeveloperPage from "../pages/Developerspage";
import About from "../pages/About";

// Layouts
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts";

// CMS Pages
import UserStats from "../pages/CMS/UserStats";
import AddNewItem from "../pages/CMS/AddNewItem";
import DisplayAll from "../pages/CMS/DisplayAll";
import MyFavorites from "../pages/CMS/MyFavorites";

// Optional: Private Route Wrapper
// import PrivateRoute from "./PrivateRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout and Routes */}
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="developer" element={<DeveloperPage />} />
        <Route path="about" element={<About />} />

        {/* Dashboard Layout and Nested CMS Routes */}
        <Route path="dashboard" element={<DashboardLayouts />}>
          <Route path="cms/user-stats" element={<UserStats />} />
          <Route path="cms/add" element={<AddNewItem />} />
          <Route path="cms/display" element={<DisplayAll />} />
          <Route path="cms/favorites" element={<MyFavorites />} />
        </Route>
      </Route>

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

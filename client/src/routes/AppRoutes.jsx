import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Intro from "../pages/dashboard/Intro";
import PrivateRoute from "./PrivateRoute";
import UserStats from "../pages/CMS/UserStats";
import AddNewItem from "../pages/CMS/AddNewItem";
import DisplayAll from "../pages/CMS/DisplayAll";
import MyFavorites from "../pages/CMS/MyFavorites";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayouts />
          </PrivateRoute>)}
      >
        <Route path="/dashboard/intro" element={<Intro />} />
        <Route path='/dashboard/cms/user-stats' element={<UserStats />} />
        <Route path='/dashboard/cms/add' element={<AddNewItem />} />
        <Route path='/dashboard/cms/display' element={<DisplayAll />} />
        <Route path='/dashboard/cms/favorites' element={<MyFavorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

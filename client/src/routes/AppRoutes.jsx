import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts";
import PrivateRoute from "./PrivateRoutes";
import DeveloperPage from "../pages/Developerspage";
import About from "../pages/About";
// import Intro from "../pages/dashboard/Intro";
// import Counter from "../pages/dashboard/Counter";
// import Calculator from "../pages/dashboard/Calculator";
// import TodoList from "../pages/dashboard/TodoList";
// import Profile from "../pages/dashboard/Profile";
// import PrivateRoute from "./PrivateRoute";
// import StopWatch from "../pages/dashboard/StopWatch";
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
                <Route path="/developer" element={<DeveloperPage/>}/>
                <Route path="/about" element={<About/>}/>
               
         <Route path="/dashboard" element={<DashboardLayouts/>}/>


     
        {/* <Route path="/dashboard/intro" element={<Intro />} /> */}
        {/* <Route path="/dashboard/counter" element={<Counter />} />
        <Route path="/dashboard/calc" element={<Calculator />} />
        <Route path="/dashboard/todo-list" element={<TodoList />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/stop-watch" element={<StopWatch />} /> */}
        {/* CMS Project */}
        <Route path='cms/user-stats' element={<UserStats />} />
        <Route path='cms/add' element={<AddNewItem />} />
        <Route path='cms/display' element={<DisplayAll />} />
        <Route path='cms/favorites' element={<MyFavorites />} />
      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

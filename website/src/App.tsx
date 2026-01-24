import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layoutes/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Articles from "./Components/News/Articles";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddArticle from "./Components/News/AddArticle";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AdminRoute from "./Components/ProtectedRoute/AdminRoute";
import { JSX } from "react";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/news" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route path="/addArticle" element={<AddArticle />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layoutes/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import About from "./Components/About/About";
import { JSX } from "react";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={< Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

      </Routes>
    </>
  );
}

export default App;
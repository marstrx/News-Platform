import Header from "./Layoutes/Header/Header";
import Footer from "./Layoutes/Footer/Footer";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layoutes/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import { JSX } from "react";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={< Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
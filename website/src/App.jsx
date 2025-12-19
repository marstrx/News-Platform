import React from "react";
import Header from "./Layoutes/Header/Header.jsx";
import Footer from "./Layoutes/Footer/Footer.jsx";
import Login from "./Components/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
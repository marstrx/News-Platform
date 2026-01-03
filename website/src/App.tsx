import Header from "./Layoutes/Header/Header";
import Footer from "./Layoutes/Footer/Footer";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layoutes/MainLayout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
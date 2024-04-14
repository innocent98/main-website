import { Outlet } from "react-router-dom";
import Footer from "./components/landingpage/footer/Footer";
import Navbar from "./organisms/navbar/NavBar";

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}
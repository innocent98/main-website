import { Outlet } from "react-router-dom";
import Navbar from "./components/landingpage/nav/Navbar";
import Footer from "./components/landingpage/footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
import "./App.scss";
import "../src/scss/_globals.scss";
import Auth from "./atomic/organisms/Auth";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/landingPage/LandingPage";
import SignIn from "./atomic/organisms/authfreme/authforms/SignIn";
import ForgotPassword from "./atomic/organisms/authfreme/forgotpasswordflow/ForgotPassword";
import VerifyEmail from "./atomic/organisms/authfreme/forgotpasswordflow/VerifyEmail";
import NewPassword from "./atomic/organisms/authfreme/forgotpasswordflow/NewPassword";
import Success from "./atomic/organisms/authfreme/forgotpasswordflow/Success";
import Layout from "./Layout";
import About from "./pages/aboutPage/About";
import FaqPage from "./components/faq-frame/FaqPage";
import Affiliate from "./components/affiliate-page/Affiliate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signUp",
        element: <Auth />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "forgot_password/verify_email",
        element: <VerifyEmail />,
      },
      {
        path: "forgot_password/new_password",
        element: <NewPassword />,
      },
      {
        path: "forgot_password/success",
        element: <Success />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/affiliate",
        element: <Affiliate />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

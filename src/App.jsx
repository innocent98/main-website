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
import LandingPage from "./pages/LandingPage";
import SignIn from "./atomic/organisms/authfreme/authforms/SignIn";
import ForgotPassword from "./atomic/organisms/authfreme/forgotpasswordflow/ForgotPassword";
import VerifyEmail from "./atomic/organisms/authfreme/forgotpasswordflow/VerifyEmail";
import NewPassword from "./atomic/organisms/authfreme/forgotpasswordflow/NewPassword";
import Success from "./atomic/organisms/authfreme/forgotpasswordflow/Success";
import Layout from "./Layout";
import About from "./pages/About";
import FaqPage from "./pages/FaqPage";
import AfilliatePage from "./pages/AfilliatePage";
import ContactPage from "./pages/ContactPage";
import ClientDashboard from "./pages/ClientDashboard";



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
        element: <AfilliatePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/clientdashboard",
        element: <ClientDashboard />,
      },
   
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

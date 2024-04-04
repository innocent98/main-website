import "./App.scss";
import Layout from "./Layout";
import "../src/scss/_globals.scss";
import Auth from "./atomic/pages/auth/Auth";
import About from "./pages/aboutPage/About";
import ProfileSetUp from "./atomic/organisms/profile/ProfileSetUp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Intro from "./atomic/organisms/profile/intro/Intro";
import SkillSet from "./atomic/organisms/profile/skillSet/SkillSet";
import UploadImg from "./atomic/organisms/profile/uploadImg/UploadImg";
import FaqPage from "./components/faq-frame/FaqPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Affiliate from "./components/affiliate-page/Affiliate";
import SignIn from "./atomic/organisms/authfreme/authforms/SignIn";
import GetStarted from "./atomic/organisms/profile/getStarted/GetStarted";
import NewPassword from "./atomic/organisms/authfreme/forgotpasswordflow/NewPassword";
import VerifyEmail from "./atomic/organisms/authfreme/forgotpasswordflow/VerifyEmail";
import ForgotPassword from "./atomic/organisms/authfreme/forgotpasswordflow/ForgotPassword";

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
  {
    path: "/setup_profile",
    element: <ProfileSetUp/>,
    children: [
      {
        path:"/setup_profile",
        element: <Intro/>
      },
      {
        path:"select_skills",
        element: <SkillSet/>
      },
      {
        path:"upload_profile_image",
        element: <UploadImg/>
      },
    ],
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
    path: "/get-started",
    element: <GetStarted />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import AfilliatePage from "./pages/landing/AfilliatePage";
import ContactPage from "./pages/landing/ContactPage";

import Layout from "./Layout";
import "../src/scss/_globals.scss";
import Auth from "./atomic/pages/auth/Auth";

import SignIn from "./atomic/organisms/authframe/authforms/SignIn";
import Intro from "./atomic/pages/freelancer/profileSetUp/intro/Intro";
import GetStarted from "./atomic/pages/freelancer/profileSetUp/getStarted/GetStarted";
import SkillSet from "./atomic/pages/freelancer/profileSetUp/skillSet/SkillSet";
import UploadImg from "./atomic/pages/freelancer/profileSetUp/uploadImg/UploadImg";
import VerifyEmail from "./atomic/organisms/authframe/forgotpasswordflow/VerifyEmail";
import NewPassword from "./atomic/organisms/authframe/forgotpasswordflow/NewPassword";
import ForgotPassword from "./atomic/organisms/authframe/forgotpasswordflow/ForgotPassword";
import Preview from "./atomic/pages/freelancer/profileSetUp/preview/Preview";
import Success from "./atomic/pages/freelancer/profileSetUp/success/Success";
import FreelancerDashboard from "./atomic/pages/freelancer/dashboard/dashboardPage/Dashboard";
import About from "./pages/landing/About";
import FaqPage from "./pages/landing/FaqPage";
import ClientIntro from "./pages/client-flow/profileSetUp copy/intro/Intro";
import ClientSkillSet from "./pages/client/profileSetUp copy/skillSet/SkillSet";
import ClientUploadImg from "./pages/client/profileSetUp copy/uploadImg/UploadImg";
import ClientPreview from "./pages/client-flow/profileSetUp copy/preview/Preview";
import ClientSuccess from "./pages/client-flow/profileSetUp copy/success/Success";
import ClientGetStarted from "./pages/client-flow/profileSetUp copy/getStarted/GetStarted";
import Home from "./pages/landing/Home";
import ClientDashboard from "./pages/client-flow/dashboard/ClientDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
  {
    path: "/profile-setup-page1",
    element: <Intro />,
  },
  {
    path: "/profile-setup-page2",
    element: <SkillSet />,
  },
  {
    path: "/profile-setup-page3",
    element: <UploadImg />,
  },
  {
    path: "/setup_profile/preview_profile",
    element: <Preview />,
  },
  {
    path: "/setup_profile/success",
    element: <Success />,
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
  {
    path: "/freelancer-dashboard",
    element: <FreelancerDashboard />,
  },

  //CLIENT PROFILE-FLOW
  {
    path: "/client-profile-setup-page1",
    element: <ClientIntro />,
  },
  {
    path: "/client-get-started",
    element: <ClientGetStarted />,
  },
  {
    path: "/client-profile-setup-page2",
    element: <ClientSkillSet />,
  },
  {
    path: "/client-profile-setup-page3",
    element: <ClientUploadImg />,
  },
  {
    path: "/client-setup_profile/preview_profile",
    element: <ClientPreview />,
  },
  {
    path: "/client-setup_profile/success",
    element: <ClientSuccess />,
  },

  //CLIENT DASHBOARD
  {
    path: "/client-dashboard",
    element: <ClientDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

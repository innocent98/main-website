import "./App.scss";
import AfilliatePage from "./pages/landing/AfilliatePage";
import ContactPage from "./pages/landing/ContactPage";

import Layout from "./Layout";
import "../src/scss/_globals.scss";
import Auth from "./atomic/pages/auth/Auth";

import SignIn from "./atomic/organisms/authframe/authforms/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./atomic/pages/freelancer/profileSetUp/intro/Intro";
import Jobs from "./atomic/pages/freelancer/dashboard/overview/jobs/Jobs";
import Preview from "./atomic/pages/freelancer/profileSetUp/preview/Preview";
import Success from "./atomic/pages/freelancer/profileSetUp/success/Success";
import SkillSet from "./atomic/pages/freelancer/profileSetUp/skillSet/SkillSet";
import ProfilePage from "./atomic/pages/freelancer/dashboard/profile/ProfilePage";
import UploadImg from "./atomic/pages/freelancer/profileSetUp/uploadImg/UploadImg";
import GetStarted from "./atomic/pages/freelancer/profileSetUp/getStarted/GetStarted";
import ForgotPassword from "./atomic/organisms/authframe/forgotpasswordflow/ForgotPassword";
import Dashboard from "./atomic/pages/freelancer/dashboard/overview/dashboardPage/Dashboard";
import VerificationPage from "./atomic/pages/freelancer/dashboard/verification/VerificationPage";
import FreelancerDashboardLayout from "./atomic/pages/freelancer/dashboard/freelancerLayout/FreelancerDashboardLayout";

import About from "./pages/landing/About";
import FaqPage from "./pages/landing/FaqPage";
import ClientIntro from "./pages/client-flow/profileSetUp copy/intro/Intro";
import ClientSkillSet from "./pages/client-flow/profileSetUp copy/skillSet/SkillSet";
import ClientUploadImg from "./pages/client-flow/profileSetUp copy/uploadImg/UploadImg";
import ClientPreview from "./pages/client-flow/profileSetUp copy/preview/Preview";
import ClientSuccess from "./pages/client-flow/profileSetUp copy/success/Success";
import ClientGetStarted from "./pages/client-flow/profileSetUp copy/getStarted/GetStarted";
import Home from "./pages/landing/Home";
import ClientDashboard from "./pages/client-flow/dashboard/ClientDashboard";

import Profile from "./pages/client-flow/freelancer-profile/Profile";
import ContactProfile from "./pages/client-flow/dashboard/dashboardtab/ContactProfile";

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
    path: "/signUp",
    element: <Auth />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
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
    path: "forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },

  {
    path: "/overview",
    element: <FreelancerDashboardLayout />,
    children: [
      {
        path: "/overview",
        element: <Dashboard />,
      },
      {
        path: "/overview/jobs",
        element: <Jobs />,
      },
      {
        path: "/overview/profile",
        element: <ProfilePage />,
      },
      {
        path: "/overview/verification",
        element: <VerificationPage />,
      },
    ],
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
  {
    path: "/freelancer-profile",
    element: <Profile />,
  },
  {
    path: "/contact-profile",
    element: <ContactProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

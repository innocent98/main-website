import "./App.scss";
import Layout from "./Layout";
import About from "./pages/About";
import "../src/scss/_globals.scss";
import FaqPage from "./pages/FaqPage";
import Auth from "./atomic/pages/auth/Auth";
import ContactPage from "./pages/ContactPage";
import AfilliatePage from "./pages/AfilliatePage";
import ClientDashboard from "./pages/ClientDashboard";
import LandingPage from "./pages/landingPage/LandingPage";
import SignIn from "./atomic/organisms/authframe/authforms/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./atomic/pages/freelancer/profileSetUp/intro/Intro";
import Jobs from "./atomic/pages/freelancer/dashboard/overview/jobs/Jobs";
import Preview from "./atomic/pages/freelancer/profileSetUp/preview/Preview";
import Success from "./atomic/pages/freelancer/profileSetUp/success/Success";
import SkillSet from "./atomic/pages/freelancer/profileSetUp/skillSet/SkillSet";
import ProfilePage from "./atomic/pages/freelancer/dashboard/profile/ProfilePage";
import ReviewsPage from "./atomic/pages/freelancer/dashboard/reviews/ReviewsPage";
import UploadImg from "./atomic/pages/freelancer/profileSetUp/uploadImg/UploadImg";
import GetStarted from "./atomic/pages/freelancer/profileSetUp/getStarted/GetStarted";
import VerifyEmail from "./atomic/organisms/authframe/forgotpasswordflow/VerifyEmail";
import NewPassword from "./atomic/organisms/authframe/forgotpasswordflow/NewPassword";
import ForgotPassword from "./atomic/organisms/authframe/forgotpasswordflow/ForgotPassword";
import Dashboard from "./atomic/pages/freelancer/dashboard/overview/dashboardPage/Dashboard";
import VerificationPage from "./atomic/pages/freelancer/dashboard/verification/VerificationPage";
import FreelancerDashboardLayout from "./atomic/pages/freelancer/dashboard/freelancerLayout/FreelancerDashboardLayout";


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
    path: "/overview",
    element: <FreelancerDashboardLayout />,
    children: [
      {
        path: "/overview",
        element: <Dashboard />,
      },
      {
        path: "/overview/jobs",
        element: <Jobs />
      },
      {
        path:"/overview/profile",
        element:<ProfilePage/>
      },
      {
        path:"/overview/verification",
        element:<VerificationPage/>
      },
      {
        path:"/overview/reviews",
        element:<ReviewsPage/>
      }
    ]
  },


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

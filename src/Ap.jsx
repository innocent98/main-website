import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import "../src/scss/_globals.scss";
import Auth from "./atomic/pages/auth/Auth";
import About from "./pages/aboutPage/About";
import FaqPage from "./components/faq-frame/FaqPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Affiliate from "./components/affiliate-page/Affiliate";
import SignIn from "./atomic/organisms/authframe/authforms/SignIn";
import Intro from "./atomic/pages/freelancer/profileSetUp/intro/Intro";
import GetStarted from "./atomic/pages/freelancer/profileSetUp/getStarted/GetStarted"
import SkillSet from "./atomic/pages/freelancer/profileSetUp/skillSet/SkillSet";
import UploadImg from "./atomic/pages/freelancer/profileSetUp/uploadImg/UploadImg";
import VerifyEmail from "./atomic/organisms/authframe/forgotpasswordflow/VerifyEmail";
import NewPassword from "./atomic/organisms/authframe/forgotpasswordflow/NewPassword";
import ForgotPassword from "./atomic/organisms/authframe/forgotpasswordflow/ForgotPassword";
import Preview from "./atomic/pages/freelancer/profileSetUp/preview/Preview";
import Success from "./atomic/pages/freelancer/profileSetUp/success/Success";
import FreelancerDashboard from "./atomic/pages/freelancer/dashboard/dashboardPage/Dashboard";


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
    path: "/profile-setup-page1",
    element: <Intro />,
  },
  {
    path: "/profile-setup-page2",
    element: <SkillSet />
  },
  {
    path: "/profile-setup-page3",
    element: <UploadImg />
  },
  {
    path: "/setup_profile/preview_profile",
    element: <Preview />
  },
  {
    path: "/setup_profile/success",
    element: <Success />
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

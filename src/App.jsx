import "./App.scss";
import Layout from "./Layout";
import "../src/scss/_globals.scss";
import Auth from "./atomic/pages/auth/Auth";
import ContactPage from "./pages/landing/ContactPage";
import AfilliatePage from "./pages/landing/AfilliatePage";
import SignIn from "./atomic/organisms/authframe/authforms/SignIn";
import Intro from "./atomic/pages/freelancer/profileSetUp/intro/Intro";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./atomic/pages/freelancer/dashboard/overview/jobs/Jobs";
import Preview from "./atomic/pages/freelancer/profileSetUp/preview/Preview";
import Success from "./atomic/pages/freelancer/profileSetUp/success/Success";
import SkillSet from "./atomic/pages/freelancer/profileSetUp/skillSet/SkillSet";
import Wallet from "./atomic/pages/freelancer/dashboard/overview/wallet/Wallet";
import ProfilePage from "./atomic/pages/freelancer/dashboard/profile/ProfilePage";
import ReviewsPage from "./atomic/pages/freelancer/dashboard/reviews/ReviewsPage";
import UploadImg from "./atomic/pages/freelancer/profileSetUp/uploadImg/UploadImg";
import NewPassword from "./atomic/organisms/authframe/forgotpasswordflow/NewPassword";
import GetVerificationCode from "./atomic/organisms/authframe/forgotpasswordflow/GetVerificationCode";
import PasswordResetSuccess from "./atomic/organisms/authframe/forgotpasswordflow/PasswordResetSuccess";

import GetStarted from "./atomic/pages/freelancer/profileSetUp/getStarted/GetStarted";
import AccountSettings from "./atomic/pages/freelancer/dashboard/settings/AccountSettings";

import Settings from "./atomic/pages/freelancer/dashboard/settings/settingsLayout/Settings";
import ForgotPassword from "./atomic/organisms/authframe/forgotpasswordflow/ForgotPassword";
import Dashboard from "./atomic/pages/freelancer/dashboard/overview/dashboardPage/Dashboard";
import SecuritySettings from "./atomic/pages/freelancer/dashboard/settings/SecuritySettings";
import EmailVerified from "./atomic/pages/freelancer/verification/emailVerification/EmailVerified";
import NotificationSettings from "./atomic/pages/freelancer/dashboard/settings/NotificationSettings";
import VerificationPage from "./atomic/pages/freelancer/verification/accountVerification/VerificationPage";
import FreelancerDashboardLayout from "./atomic/pages/freelancer/dashboard/freelancerLayout/FreelancerDashboardLayout";

import React from "react";
import Home from "./pages/landing/Home";
import About from "./pages/landing/About";
import { Navigate } from "react-router-dom";
import FaqPage from "./pages/landing/FaqPage";
import useAuthStore from "../zustand/freelancerStore/useAuthStore";
import Logout from "./atomic/pages/freelancer/dashboard/logout/Logout";

import ClientDashboard from "./pages/client-flow/dashboard/ClientDashboard";
import ClientIntro from "./pages/client-flow/profileSetUp copy/intro/Intro";
import ClientPreview from "./pages/client-flow/profileSetUp copy/preview/Preview";
import ClientSuccess from "./pages/client-flow/profileSetUp copy/success/Success";
import ClientSkillSet from "./pages/client-flow/profileSetUp copy/skillSet/SkillSet";
import ClientUploadImg from "./pages/client-flow/profileSetUp copy/uploadImg/UploadImg";
import ClientGetStarted from "./pages/client-flow/profileSetUp copy/getStarted/GetStarted";


import Profile from "./pages/client-flow/freelancer-profile/Profile";
import ContactProfile from "./pages/client-flow/dashboard/dashboardtab/ContactProfile";

import CashAcc from "./atomic/pages/freelancer/dashboard/overview/wallet/walletTabs/CashAcc";
import RefBalance from "./atomic/pages/freelancer/dashboard/overview/wallet/walletTabs/RefBalance";
import CryptoBalance from "./atomic/pages/freelancer/dashboard/overview/wallet/walletTabs/CryptoBalance";
import TransactionHistory from "./atomic/pages/freelancer/dashboard/transactionHistory/TransactionHistory";
import WalletTransactionHistory from "./atomic/pages/freelancer/dashboard/overview/wallet/walletTabs/WalletTransactionHistory";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/signin" replace />;
  }

  return children
};


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
    element: <Intro />
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
    path: "/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/new_password",
    element: <NewPassword />,
  },
  {
    path: "/success",
    element: <PasswordResetSuccess />,
  },
  {
    path: "/verify_email",
    element: <GetVerificationCode />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/verified",
    element: <EmailVerified />,
  },

  {
    path: "/overview",
    element: <FreelancerDashboardLayout />,
    //  <ProtectedRoute>
    // </ProtectedRoute>,
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
      {
        path: "/overview/reviews",
        element: <ReviewsPage />
      },
      {
        path: "/overview/transaction-history",
        element: <TransactionHistory />
      },
      {
        path: "/overview/wallet",
        element: <Wallet />,
        children: [
          {
            index: true,
            element: <CashAcc />
          },
          {
            path: "/overview/wallet/crypto_balance",
            element: <CryptoBalance />
          },
          {
            path: "/overview/wallet/ref_balance",
            element: <RefBalance />
          },
          {
            path: "/overview/wallet/transaction_history",
            element: <WalletTransactionHistory />
          },
        ]

      },
      {
        path: "/overview/settings",
        element: <Settings />,
        children: [
          {
            index: true,
            element: <AccountSettings />
          },
          {
            path: "/overview/settings/security_settings",
            element: <SecuritySettings />
          },
          {
            path: "/overview/settings/notification_settings",
            element: <NotificationSettings />
          },
        ]
      },
      {
        path: "/overview/logout",
        element: <Logout />
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

import { create } from "zustand";
import axios from "axios";
import { baseUrl } from "../../src/utils/baseUrl";

// const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

//Zustand store for managing user authentication state
const useAuthStore = create((set) => ({
  // Initial states
  userEmail: "",
  user: null,
  userName: null,
  verified: null,
  isLoading: false,
  isAuthenticated: false,
  signup_errormessage: null,
  signin_errormessage: null,

  //create user action
  signUp: async (userData, navigate) => {
    set({ isLoading: true, signup_errormessage: null });
    try {
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        userData
      );

      //set states
      const isVerified = response.data.isEmailVerified;
      set({
        isLoading: false,
        isAuthenticated: true,
        verified: isVerified,
      });

      const newUserData = response.data.data;
      set({user: newUserData});
      console.log("new user:", newUserData);
      

      //navigate to profile setup page
      if (userData.userRole === "freelancer") {
        navigate("/profile-setup-page1");
      } else {
        navigate("/client-profile-setup-page1");
      }

      console.log(response.data);
      console.log(user);
    } catch (error) {
      //handle error
      if (error?.response?.status === 400) {
        set({
          isLoading: false,
          signup_errormessage: "User with email already exists",
        });
        return;
      } else if (userData.password.length < 8) {
        set({
          isLoading: false,
          signup_errormessage: "Password must be at least 8 characters long.",
        });
      } else {
        set({
          isLoading: false,
          signup_errormessage: "Unable to create an account. Please try again.",
        });
      }
      console.log(error);

      // timeout to clear the error message after 5 seconds
      let timeoutId = setTimeout(() => {
        set({ signup_errormessage: null });
      }, 3000);
      return clearTimeout(timeoutId);
    }
  },
  //\end code

  // sign in user action
  signIn: async (userData, navigate) => {
    set({ isLoading: true, signin_errormessage: null });

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, userData);

      const currentUser = response.data
      set({ user: currentUser, isLoading: false });

      //save user login token to localstorage
      const token = response.data.data;
      localStorage.setItem("userToken", token);

      console.log("current user:", currentUser );

      //navigate to dashboard on login success
      navigate("/overview");
    } catch (error) {
      if (error?.response?.status === 403) {
        set({
          isLoading: false,
          signin_errormessage:
            "Email not verified. Kindly check your email to verify.",
        });
        return;
      } else if (error?.response?.status === 400) {
        set({
          isLoading: false,
          signin_errormessage:
            "The email or password you entered is incorrect. Please try again.",
        });
      } else {
        set({ signin_errormessage: "An error occured. Please try again." });
      }

      // timeout to clear the error message after 5 seconds
      const timeoutId = setTimeout(() => {
        set({ signin_errormessage: null });
      }, 3000);
      return clearTimeout(timeoutId);
    }
  },
  //\end code

  logout: () => {
    set({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      errorMessage: null,
    });
  },
}));

export default useAuthStore;

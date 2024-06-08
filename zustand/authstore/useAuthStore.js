import { create } from "zustand";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Zustand store for managing user authentication state
const useAuthStore = create((set) => ({
  user: null,
  errormessage: null,
  verified: false,
  isLoading: false,
  setUser: (newUser) => set({ user: newUser }),

  //create user api
  signUp: async (userData, navigate) => {
    set({ isLoading: true, errormessage: null });
    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/register",
        userData
      );
      set({ isLoading: false });

      //redirect to overview page for now!
      alert("sign up successful! Proceed to verify email")
      navigate("/verified");

      set({ user: response.data });
      console.log(response.data);
    } catch (error) {
      //handle error
      console.log("Signup failed:", error);
      if (error.status === 400) {
        set({
          isLoading: false,
          errormessage: "User with email already exists",
        });

        return;
      } else {
        set({
          isLoading: false,
          errormessage: "Unable to create an account. Please try again.",
        });
      }
    }
  },

  // sign in user api
  signIn: async (userData, navigate) => {
    set({ isLoading: true, errormessage: null });

    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/login",
        userData
      );

      set({ isLoading: false });
      set({ user: response.data, isLoading: false });

      navigate("/overview");
    } catch (error) {
      if (error.status === 403) {
        set({ isLoading: false, errormessage: "Email not verified." });
        return;
      } else {
        set({ errormessage: "An error occured. Please tr again." });
        console.error("Signin failed:", error);
      }
    }
  },

  //email verification api
  verifyEmail: async () => {
    set({ isLoading: true });
    try {
      await axios.post(
        "https://api.zealworkers.com/api/v1/auth/verify-email",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set((state) => ({
        user: {
          ...state.user,
        },
        verified: true, // Update user status to verified on verification successful
        isLoading: false,
      }));
    } catch (error) {
      console.error("Email verification failed:", error.message);
    }
  },

  logout: () => {
    set({
      isLoading: false,
      isAuthenticated: false,
      user: null,
      errorMessage: null,
    });
  },
}));

export default useAuthStore;

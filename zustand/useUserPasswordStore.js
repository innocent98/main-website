import {create} from "zustand";
import { baseUrl } from "../src/utils/baseUrl";

//zustand store for managing user password reset
const useUserPasswordStore = create((set)=> ({

      // Initial state for email
  userEmail: "",
  token: "",

  // Initial user for email
  user: null,
  userName: null,
  verified: null,
  isLoading: false,
  errormessage: null,
  isAuthenticated: false,
  setUserEmail: (email) => set({ userEmail: email }),

    
  //email verification action
  verifyEmail: async () => {
    set({ isLoading: true });
    try {
      await axios.post(
        `${baseUrl}/auth/verify-email`,
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

  //forgot password action
  forgotPassword: async (email, navigate) => {
    set({ isLoading: true });

    try {
      const response = await axios.post(
        `${baseUrl}/auth/forgot-password`,
        { email: email }
      );

      set({ isLoading: false });
      setUserEmail(email)
      set((state) => ({
        user: {
          ...state.user,
        },
      }));
      navigate("/verify_email");
      console.log(response);

    } catch (error) {
      
      if (error?.response?.status === 400) {
        set({
          isLoading: false,
          errormessage: "User with email dosen't exist.",
        });
      } else {
        set({
          isLoading: false,
          errormessage: "An error occurred. Please try again later",
        });
      }
      console.log(error);
    }
  },

  //password reset code action
  passwordResetCode: async (code, navigate) => {
    set({ isLoading: true });

    try {
      const response = await axios.post(
        `${baseUrl}/auth/confirm-password-code`,
        { resetCode: code }
      );

      console.log(response.data.data);
      //set token
      const newToken = response?.data?.data;
      set({ token: newToken, isLoading: false });

      //redirect to set password page
      navigate("/new_password");
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },

  //reset password action
  resetPassword: async (newPassword, token, navigate) => {
    set({ isLoading: true, errormessage: null });

    try {
      const response = await axios.put(
        `${baseUrl}/auth/reset-password`,
        { password: newPassword },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      navigate("/success");
      set({ isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        errormessage: error,
      });
    }
  },


}))

export default useUserPasswordStore
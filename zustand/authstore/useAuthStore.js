import { create } from "zustand";
import axios from "axios";

//Zustand store for managing user authentication state
const useAuthStore = create((set) => ({
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
  setUserEmail: (email) => set({ email }),
  setUser: (newUser) => set({ user: newUser }),

  //create user action
  signUp: async (userData, navigate) => {
    set({ isLoading: true, errormessage: null });
    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/register",
        userData
      );

      //set states
      const user_name = response.data.firstName;
      const isVerified = response.data.isEmailVerified;
      set({
        isLoading: false,
        isAuthenticated: true,
        user: response.data,
        verified: isVerified,
        userName: user_name,
      });

      //navigate to profile setup page
      navigate("/profile-setup-page1");

      console.log(response.data);
      console.log(user);
    } catch (error) {
      
      //handle error
      if (error?.response?.data?.status === 400) {
        set({
          isLoading: false,
          errormessage: "User with email already exists",
        });
        return;
      } else if (userData.password.length < 8) {
        set({
          isLoading: false,
          errormessage: "Password must be at least 8 characters long.",
        });
      } else {
        set({
          isLoading: false,
          errormessage: "Unable to create an account. Please try again.",
        });
      }

      // timeout to clear the error message after 5 seconds
      let timeoutId = setTimeout(() => {
        set({ errormessage: null });
      }, 3000);
      return clearTimeout(timeoutId);
    }
  },
  //\end code

  // sign in user action
  signIn: async (userData, navigate) => {
    //timeoutID declaration

    set({ isLoading: true, errormessage: null });

    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/login",
        userData
      );

      set({ user: response.data, isLoading: false, isAuthenticated: true });
      console.log(user);

      navigate("/overview");
    } catch (error) {
      // let timeoutId;
      if (error.response.status === 403) {
        set({
          isLoading: false,
          errormessage:
            "Email not verified. Kindly check your email to verify.",
        });
        return;
      } else if (error.response.status === 400) {
        set({
          isLoading: false,
          errormessage:
            "The email or password you entered is incorrect. Please try again.",
        });
      } else {
        set({ errormessage: "An error occured. Please try again." });
      }

      // timeout to clear the error message after 5 seconds
      const timeoutId = setTimeout(() => {
        set({ errormessage: null });
      }, 3000);
      return clearTimeout(timeoutId);
    }
  },
  //\end code

  //email verification action
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

  //forgot password action
  forgotPassword: async (email, navigate) => {
    set({ isLoading: true });

    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/forgot-password",
        { email: email }
      );

      set({ isLoading: false });
      navigate("/verify_email");
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
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
      console.log(error.response.status);
    }
  },

  //password reset code action
  passwordResetCode: async (code, navigate) => {
    set({ isLoading: true });

    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/confirm-password-code",
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
        "https://api.zealworkers.com/api/v1/auth/reset-password",
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

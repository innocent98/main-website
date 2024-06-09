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
    //declare timeoutId
    let timeoutId = null;


    set({ isLoading: true, errormessage: null });
    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/register",
        userData
      );

      //return loading state to false on request complets
      set({ isLoading: false });

      //ensure password is atleast 8 char long
      if (userData.password.length < 8) {
        set({
          isLoading: false,
          errorMessage: "Password must be at least 8 characters long.",
        });

        // Clear the message after timeout
        const timeoutId = setTimeout(() => {
          set({ errorMessage: null });
        }, 5000);

        // Optionally return the timeoutId for cleanup
        return timeoutId;
      }
      navigate("/profile-setup-page1");

      set({ user: response.data });
      console.log(response.data);
    } catch (error) {
      //handle error
      console.log("Signup failed:", error);
      if (error.response.status === 400) {
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

      // timeout to clear the error message after 5 seconds
      timeoutId = setTimeout(() => {
        set({ errorMessage: null });
      }, 5000);
    } finally {
      //clear timeout if the request completes successfully
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  },
//\end code


  // sign in user api
  signIn: async (userData, navigate) => {
    //timeoutID declaration
    let timeoutId = null;

    set({ isLoading: true, errormessage: null });

    try {
      const response = await axios.post(
        "https://api.zealworkers.com/api/v1/auth/login",
        userData
      );

      set({ user: response.data, isLoading: false });
      console.log(user);

      navigate("/overview");
    } catch (error) {
      if (error.response.status === 403) {
        set({ isLoading: false, errormessage: "Email not verified." });
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
      timeoutId = setTimeout(() => {
        set({ errorMessage: null });
      }, 5000);
    } finally {
      //clear timeout if the request completes successfully
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  },
  //\end code
  

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

  // dummy code to test verification and loading state. PLEASE IGNORE FOR NOW!!
  dummyEmailVerification: () => {
    set({ isLoading: true });

    const timeoutId = setTimeout(() => {
      set((state) => ({
        user: {
          ...state.user,
        },
        verified: true,
        isLoading: false,
      }));
      console.log("Email verification completed (simulated)");
    }, 5000);

    return () => clearTimeout(timeoutId);
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

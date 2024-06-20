import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    user: null,
    setUser: (newUser) => ({user: newUser}),

    
    updateUser: async (newData, userRequest) => {
    const response = await userRequest.put("/user/profile/update", newData);
    console.log(response);
  },
}));

export default useUserProfileStore;

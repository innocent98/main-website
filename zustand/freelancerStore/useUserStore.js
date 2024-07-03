import { create } from "zustand";

const useUserStore = create((set) => ({
    userRole: "freelancer",
    setUserRole: (role) => set({ userRole: role }),
}));

export default useUserStore


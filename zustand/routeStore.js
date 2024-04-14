import { create } from "zustand";

const useRouteStore = create((set) => ({
  currentPage: 1,
  routes: ["setup_profile", "select_skills", "upload_profile_image"],
  nextPage: () =>
    set((state) => ({
      currentPage: (state.currentPage + 1) % state.pages.length,
    })),
  previousPage: () =>
    set((state) => ({
      currentPage:
        (state.currentPage - 1 + state.pages.length) % state.pages.length,
    })),
}));

export default useRouteStore
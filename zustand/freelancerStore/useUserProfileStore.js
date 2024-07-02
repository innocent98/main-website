import { create } from "zustand";
import { persist } from "zustand/middleware";
import requestMethod from "../../src/utils/helper";

const { userRequest } = requestMethod();

const useUserProfileStore = create(
  persist(
    (set, get) => ({
      bio: "",
      skills: [],
      isLoading: false,

      // Track editing state
      editBio: (isEditing) => set({ isEditingBio: isEditing }),
      editSkill: (isEditing) => set({ isEditingSkill: isEditing }),

      //update bio action
      updateBio: (newBio) => {
        set({ bio: newBio });
        get().updateProfile({ bio: newBio, skills: get().skills }, userRequest);
      },

      //update skill action  **********TODO************
      updateSkills: (newSkills) => {
        set({ skills: newSkills });
        get().updateProfile(
          {
            bio: get().bio,
            skills: [...get().skills, newSkills],
          },
          userRequest
        );
      },

      //remove skill action  **********TODO************
      removeSkill: (skillId) => {
        const updatedSkills = get().skills.filter(
          (skill) => skill.id !== skillId
        );
        set({ skills: updatedSkills });
        get().updateProfile(
          { bio: get().bio, skills: updatedSkills },
          userRequest
        );
      },

      //update profile action
      updateProfile: async (data, userRequest) => {
        set({ isLoading: true });
        try {
          await userRequest.put("/user/profile/update", {
            skills: data.skills,
            bio: data.bio,
          });

          set({ isLoading: false });
        } catch (error) {
          console.error("Error updating bio:", error);
        }
      },
    }),
    {
      name: "user-profile-storage",
    }
  )
);

export default useUserProfileStore;

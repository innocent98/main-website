import { create } from 'zustand';
import requestMethod from "../../src/utils/helper";

const { userRequest } = requestMethod();

const useJobStore = create((set) => ({
  jobCategory: '',
  serviceType: '',
  jobTitle: '',
  jobDesc: '',
  requiredSkills: '',
  noToHire: 1,
  budget: '',  
  country: '',
  startDate: '',
  duration: '',
  setJobCategory: (jobCategory) => set({ jobCategory }),
  setServiceType: (serviceType) => set({ serviceType }),
  setJobTitle: (jobTitle) => set({ jobTitle }),
  setJobDesc: (jobDesc) => set({ jobDesc }),
  setRequiredSkills: (requiredSkills) => set({ requiredSkills }),
  setNoToHire: (noToHire) => set({ noToHire }),
  setBudget: (budget) => set({ budget }),
  setCountry: (country) => set({ country }),
  setStartDate: (startDate) => set({ startDate }),
  setDuration: (duration) => set({ duration }),
  postJob: async () => {
    const {
      jobCategory,
      serviceType,
      jobTitle,
      jobDesc,
      requiredSkills,
      noToHire,
      budget,
      country,
      startDate,
      duration,
    } = useJobStore.getState();

    try {
      const response = await userRequest.post('/job/create', {
        jobCategory,
        serviceType,
        jobTitle,
        jobDesc,
        requiredSkills,
        noToHire,
        budget,
        country,
        startDate,
        duration,
      });

      return response.data;
    } catch (error) {
      console.error("Error posting job:", error);
    }
  },
}));

export default useJobStore;

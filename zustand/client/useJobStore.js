import {create} from 'zustand';
import axios from 'axios';
import requestMethod from "../../src/utils/helper.jsx"
import {baseUrl} from "../../src/utils/baseUrl"


const { userRequest } = requestMethod();

const useJobStore = create((set) => ({
  jobCategory: '',
  serviceType: '',
  jobTitle: '',
  jobDesc: '',
  requiredSkills: '',
  noToHire: 1,
  budget: "",  
  country: '',
  startDate: '',
  duration: '',
  token: '',
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
  setToken: (token) => set({ token }),
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
      const response = await axios.post(`${baseUrl}/job/create`,
        {
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
        },  userRequest()
       
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useJobStore;

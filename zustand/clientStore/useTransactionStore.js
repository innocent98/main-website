import create from 'zustand';
import requestMethod from "../../src/utils/helper";

const useTransactionStore = create((set) => ({
  transaction: null,
  error: null,
  loading: false,
  makeTransaction: async (transactionType, currencyType, amount, transferTo, additionalParams = {}) => {
    set({ loading: true, error: null });

    try {
      const { userRequest } = requestMethod();
      const response = await userRequest.post(`/api/v1/transaction/make-transaction?transferTo=${transferTo}`, {
        transactionType,
        currencyType,
        amount,
        ...additionalParams
      });

      set({ transaction: response.data, loading: false });
    } catch (error) {
      set({ error: error.response ? error.response.data.message : error.message, loading: false });
    }
  }
}));

export default useTransactionStore;

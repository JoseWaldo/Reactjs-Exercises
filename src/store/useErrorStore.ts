import { create } from "zustand";

interface ErrorStore {
  error: string;
  loading: boolean;
  actions: {
    setError: (error: string) => void;
    setLoading: (loading: boolean) => void;
    closeError: () => void;
  };
}

const useErrorStore = create<ErrorStore>((set) => ({
  error: "",
  loading: false,
  actions: {
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ loading }),
    closeError: () => set({ error: "" }),
  },
}));

export default useErrorStore;

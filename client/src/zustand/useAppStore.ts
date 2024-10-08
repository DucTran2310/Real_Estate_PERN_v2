import { apiGetProvinces } from "@/apis/externals";
import { create } from "zustand";

interface Province {
  idProvince: string;
  name: string;
}

interface AppState {
  provinces: Province[]; 
  getProvinces: () => void;
}

const useAppStore = create<AppState>((set) => ({
  provinces: [],
  getProvinces: async () => {
    try {
      const response: Province[] = await apiGetProvinces();
      
      if (response?.length > 0) {
        set({ provinces: response })
      } else {
        set({ provinces: [] })
      }
    } catch (error) {
      console.error('Error fetching provinces:', error);
      set({ provinces: [] });
    }
  }
}));

export default useAppStore;
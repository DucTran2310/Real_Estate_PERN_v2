import { create } from "zustand";
import { IInfoGoogleData } from '../types/interfaces/userStore/IUserStore';
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStoreProps {
  token: string | null;
  user: string | null;
  googleData: IInfoGoogleData;
  setToken: (token: string) => void;
  setUser: (user: string) => void;
  setGoogleData: (data: IInfoGoogleData) => void;
}

const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      googleData: {} as IInfoGoogleData,
      setToken: (token: string) => set(() => ({ token })),
      setUser: (user: string) => set(() => ({ user })),
      setGoogleData: (data: IInfoGoogleData) => set(() => ({ googleData: data })),
    }),
    {
      name: 'real-estate/user',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key === 'token' || key === 'user')
        ) as Partial<UserStoreProps>, // Explicitly cast to Partial<UserStoreProps>
    }
  )
);

export default useUserStore;
import { create } from "zustand";
import { IInfoGoogleData, IUser } from '../types/interfaces/user/IUser';
import { createJSONStorage, persist } from "zustand/middleware";
import { apiGetUser } from "@/apis/user";

interface UserStoreProps {
  token: string | null;
  user: IUser | null;
  googleData: IInfoGoogleData;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  setGoogleData: (data: IInfoGoogleData) => void;
  getUser: () => void
  logout: () => void
}

const useUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      googleData: {} as IInfoGoogleData,
      setToken: (token: string) => set(() => ({ token })),
      setUser: (user: IUser) => set(() => ({ user })),
      setGoogleData: (data: IInfoGoogleData) => set(() => ({ googleData: data })),
      getUser: async () => {
        const response = await apiGetUser()

        if (response.data.success) {
          return set(() => ({ user: response.data.infoUser }))
        } else {
          return set(() => ({ user: null, token: null }))
        }
      },
      logout: () => set(() => ({ token: null, user: null }))
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
import { create } from "zustand";

const useUserStore = create((set) => {
  return {
    token: null,
    user: null,
    setToken: (token: string) => set(() => ({ token: token })),
    setUser: (user: string) => set(() => ({ user  }))
  }
})

export default useUserStore

import { IRequestSignWithGoogle } from "@/types/interfaces/auth/IAuth";
import axiosInstance, { endPoints } from "./axiosConfig";

export const apiCheckNewUser = (email: string) => {
  return axiosInstance({
    method: 'get',
    url: endPoints.auth.checkNewUser + email
  })
}

export const apiSignInWithGoogle = (data: IRequestSignWithGoogle) => {
  return axiosInstance({
    method: 'post',
    url: endPoints.auth.signInWithGoogle,
    data
  })
} 

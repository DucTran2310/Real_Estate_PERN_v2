import axiosInstance, { endPoints } from "./axiosConfig";

export const apiGetUser = () => {
  return axiosInstance({
    method: 'get',
    url: endPoints.user.getUser
  })
}
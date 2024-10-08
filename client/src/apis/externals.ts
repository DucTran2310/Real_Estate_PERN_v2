import axios from "axios";
import { endPoints } from "./axiosConfig";

export const apiGetCredentialsFromAccessToken = (accessToken: string) =>
  axios({
    method: 'get',
    url: endPoints.auth.getCredentialFromAccessToken + accessToken
  })

  export const apiGetProvinces = () => {
    return axios({
      method: 'get',
      url: endPoints.external.getProvinces
    }).then(response => response.data); // Assuming response.data is the array of provinces
  }

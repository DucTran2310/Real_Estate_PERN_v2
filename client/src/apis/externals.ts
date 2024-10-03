import axios from "axios";
import { endPoints } from "./axiosConfig";

// Thêm kiểu trả về cho hàm API
export const apiGetCredentialsFromAccessToken = (accessToken: string) =>
  axios({
    method: 'get',
    url: endPoints.auth.getCredentialFromAccessToken + accessToken
  })

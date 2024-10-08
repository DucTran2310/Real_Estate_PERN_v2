export interface IInfoGoogleData {
  email: string,
  avatar: string,
  fullname: string,
  emailVerified: string,
}

export interface IUser {
  avatar: string
  balance: string
  createdAt: string
  email: string
  emailVerified: boolean
  fullname: string
  id: number
  idPricing: null | number
  phone: null | string
  phoneVerified: boolean
  score: number
  updatedAt: string
}
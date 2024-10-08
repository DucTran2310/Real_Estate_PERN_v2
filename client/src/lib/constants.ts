import slugify from "slugify";
import banner1 from '@/assets/jpg/banner-1.jpg'
import banner2 from '@/assets/jpg/banner-2.jpg'
import banner3 from '@/assets/jpg/banner-3.jpg'
import banner4 from '@/assets/jpg/banner-4.jpg'
import hanoi from '@/assets/jpg/hanoi.jpg'
import binhduong from '@/assets/jpg/binhduong.jpg'
import danang from '@/assets/jpg/danang.jpg'
import dongnai from '@/assets/jpg/dongnai.jpg'
import hcm from '@/assets/jpg/hcm.jpg'
import nhatrang from '@/assets/jpg/nhatrang.jpg'

export const postSoldTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác"
].map(el => ({
  name: el,
  pathname: slugify(el)
}))

export const postRentTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghỉ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác"
].map(el => ({
  name: el,
  pathname: slugify(el)
}))

export const SIGNIN = 'SIGNIN'
export const SIGNUP = 'SIGNUP'

export const banner = [
  banner1,
  banner2,
  banner3,
  banner4,
].map((el, index) => ({ id: index, imageUrl: el }))

export const provincesTops = [
  {
    id: 1,
    imageUrl: hanoi,
    label: 'Hà Nội'
  },
  {
    id: 2,
    imageUrl: hcm,
    label: 'Hồ Chí Minh'
  },
  {
    id: 3,
    imageUrl: danang,
    label: 'Đà Nẵng'
  },
  {
    id: 4,
    imageUrl: binhduong,
    label: 'Bình Dương'
  },
  {
    id: 5,
    imageUrl: dongnai,
    label: 'Đồng Nai'
  },
  {
    id: 6,
    imageUrl: nhatrang,
    label: 'Nha Trang' 
  }
]

export const prices = [
  {
    id: -1,
    label: 'Tất cả mức giá',
    value: 'ALL'
  },
  {
    id: 1,
    label: 'Dưới 500 triệu',
    value: JSON.stringify([0, 0.5 * Math.pow(10,9)])
  },
  {
    id: 2,
    label: 'Từ 500 đến 800 triệu',
    value: JSON.stringify([0.5 * Math.pow(10,9), 0.8 * Math.pow(10,9)])
  },
  {
    id: 3,
    label: 'Trên 800 triệu đến 1 tỷ',
    value: JSON.stringify([0.8 * Math.pow(10,9), 1 * Math.pow(10,9)])
  },
  {
    id: 4,
    label: 'Trên 1 tỷ đến 2 tỷ',
    value: JSON.stringify([1 * Math.pow(10,9), 2 * Math.pow(10,9)])
  },
  {
    id: 5,
    label: 'Trên 2 tỷ đến 3 tỷ',
    value: JSON.stringify([2 * Math.pow(10,9), 3 * Math.pow(10,9)])
  },
  {
    id: 6,
    label: 'Trên 3 tỷ đến 5 tỷ',
    value: JSON.stringify([3 * Math.pow(10,9), 5 * Math.pow(10,9)])
  },
  {
    id: 7,
    label: 'Trên 5 tỷ đến 7 tỷ',
    value: JSON.stringify([5 * Math.pow(10,9), 7 * Math.pow(10,9)])
  },
  {
    id: 8,
    label: 'Trên 7 tỷ đến 10 tỷ',
    value: JSON.stringify([7 * Math.pow(10,9), 10 * Math.pow(10,9)])
  },
  {
    id: 9,
    label: 'Trên 10 tỷ',
    value: JSON.stringify(["gte", 10 * Math.pow(10,9)])
  }
]

export const sizes = [
  {
    id: -1,
    label: 'Tất cả diện tích',
    value: 'ALL'
  },
  {
    id: 1,
    label: 'Dưới 30m²',
    value: JSON.stringify([0, 30])
  },
  {
    id: 2,
    label: 'Từ 30m² đến 50m²',
    value: JSON.stringify([30, 50])
  },
  {
    id: 3,
    label: 'Từ 50m² đến 80m²',
    value: JSON.stringify([50, 80])
  },
  {
    id: 4,
    label: 'Từ 80m² đến 100m²',
    value: JSON.stringify([80, 100])
  },
  {
    id: 5,
    label: 'Từ 100m² đến 150m²',
    value: JSON.stringify([100, 150])
  },
  {
    id: 6,
    label: 'Từ 150m² đến 200m²',
    value: JSON.stringify([150, 200])
  },
  {
    id: 7,
    label: 'Từ 200m² đến 250m²',
    value: JSON.stringify([200, 250])
  },
  {
    id: 8,
    label: 'Từ 250m² đến 300m²',
    value: JSON.stringify([250, 300])
  },
  {
    id: 9,
    label: 'Từ 300m² đến 500m²',
    value: JSON.stringify([300, 500])
  },
  {
    id: 10,
    label: 'Trên 500m²',
    value: JSON.stringify(["gte", 500])
  }
]

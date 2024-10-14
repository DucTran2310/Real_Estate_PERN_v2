module.exports = {
  enumData: {
    pricings: ['Thường', 'Bạc', 'Đồng', 'Vàng', 'Kim cương'],
    postStatus: ['Cồn trống', 'Đang đàm phán', 'Đã bàn giao'],
    propertyTypes: [
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
    ],
    listingTypes: [
      "Bán",
      "Cho Thuê"
    ],
    directions: [
      "Đông - Bắc",
      "Tây - Bắc",
      "Đông - Nam",
      "Tây - Nam",
      "Đông",
      "Tây",
      "Nam",
      "Bắc"
    ],
    pricingsData: [
      {
        name: 'Thường',
        isDisplayImmediately: false,
        levelShowDescription: 0.1,
        priority: 1,
        requireScore: 0,
        requireScoreNextLevel: 200000,
        expiredDay: 1,
        price: 0,
        imageUrl: 'gs://admin-shop-6e6a7.appspot.com/base.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Đồng',
        isDisplayImmediately: false,
        levelShowDescription: 0.2,
        priority: 2,
        requireScore: 200000,
        requireScoreNextLevel: 500000,
        expiredDay: 3 ,
        price: 200000,
        imageUrl: 'gs://admin-shop-6e6a7.appspot.com/bronze.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bạc',
        isDisplayImmediately: true,
        levelShowDescription: 0.3,
        priority: 3,
        requireScore: 500000,
        requireScoreNextLevel: 1000000,
        expiredDay: 7,
        price: 500000,
        imageUrl: 'gs://admin-shop-6e6a7.appspot.com/silver.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vàng',
        isDisplayImmediately: true,
        levelShowDescription: 0.4,
        priority: 4,
        requireScore: 1000000,
        requireScoreNextLevel: 2000000,
        expiredDay: 10,
        price: 1000000,
        imageUrl: 'gs://admin-shop-6e6a7.appspot.com/gold.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kim cương',
        isDisplayImmediately: true,
        levelShowDescription: 0.5 ,
        priority: 5,
        requireScore: 2000000,
        requireScoreNextLevel: -1,
        expiredDay: 7,
        price: 2000000,
        imageUrl: 'gs://admin-shop-6e6a7.appspot.com/dinamond.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  }
}
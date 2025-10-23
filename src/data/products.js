// src/data/products.js

const featuredProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX3U-32MR/ES',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-32MR_uwdzgr.webp',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5, // Giá dạng số
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX3U-64MT',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-64MT_uhz0w0.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 3,
    name: 'PLC Mitsubishi FX1S-14MR/ES',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-14MR-ES_t4hpet.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 4,
    name: 'PLC Mitsubishi FX1N-24MR/ES',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1N-24MR-ES_ptmkm4.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 5,
    name: 'PLC Mitsubishi FX2N-16MR/ES',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16MR-ES_hesbb5.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 6,
    name: 'PLC Mitsubishi FX5U-32MR/ES (iQ-F)',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5U-32MR-ES_ojpolr.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 7,
    name: 'PLC Mitsubishi Q03UDECPU',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176586/Q03UDE_asxaz0.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 8,
    name: 'PLC Mitsubishi Q06UDEHCPU',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDEH_n2hw1t.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 9,
    name: 'PLC Mitsubishi Q26UDEHCPU',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDEH_mgki52.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 10,
    name: 'PLC Mitsubishi R04ENCPU',
    category: 'PLC',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R04ENCPU.jog_aeevua.webp',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 101,
    name: 'Biến tần Mitsubishi FR-E720-0.75K',
    category: 'Biến tần',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.75K_jrq3xf.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 102,
    name: 'Biến tần Mitsubishi FR-E720-1.5K',
    category: 'Biến tần',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-1.5K_f4g2vt.png',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 103,
    name: 'Biến tần Mitsubishi FR-A840-0.4K',
    category: 'Biến tần',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.4K_imrve8.png',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 104,
    name: 'Biến tần Mitsubishi FR-D720-0.4K',
    category: 'Biến tần',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.4K_iwfcro.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 105,
    name: 'Biến tần Mitsubishi FR-F820-0.75K',
    category: 'Biến tần',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-F820-0.75K_i7zftz.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 201,
    name: 'Servo driver Mitsubishi MR-J4-10A',
    category: 'Servo',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-A_wyxi60.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 202,
    name: 'Servo driver Mitsubishi  MR-J4-10B ',
    category: 'Servo',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-B_jpg_c7fw0h.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 203,
    name: 'Servo driver Mitsubishi MR-J3-10B',
    category: 'Servo',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J3-10B_mgfkxa.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 204,
    name: 'Motion controller module QD77MS4',
    category: 'Servo',
    model: 'QD77MS4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD77MS4_kp0abv.jpg',
    price: 5,
  },
  {
    id: 205,
    name: 'Positioning module QD75MH4',
    category: 'Servo',
    model: 'QD75MH4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75MH4_yq2sme.jpg',
    price: 5,
  },
  {
    id: 301,
    name: 'Input module FX2N-16EX-ES/UL',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EX-ES-UL_hz7tbh.webp',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 302,
    name: 'Output module FX2N-16EYR-ES/UL',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EYR-ES-UL_s2biev.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 303,
    name: 'Analog input FX2N-4AD',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176533/FX2N-4AD_u4cjtw.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 304,
    name: 'Analog input FX2N-2AD',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2AD_kx58ib.webp',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 305,
    name: 'Analog input FX3U-4AD-ADP',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-4AD-ADP_nml1uq.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 306,
    name: 'Analog input FX5-4AD',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD_got1zi.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 307,
    name: 'Analog input FX3U-4AD',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-4AD_zcwrpo.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 308,
    name: 'Analog output FX2N-2DA',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2DA_j87lpm.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 309,
    name: 'I/O relay FX5-16EYR/ES',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-16EYR-ES_nqxccb.webp',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 310,
    name: 'Input module QX41',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX41_hitrgh.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 311,
    name: 'Output module QY42P',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY42P_n6j07e.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 312,
    name: 'Output module QY10',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY10_kegsoo.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 313,
    name: 'Analog input Q64AD',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64AD_m3nu7g.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 314,
    name: 'Analog output Q64DA',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64DA_whjyiz.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 315,
    name: 'Input module RY10R2-TS',
    category: 'I/O',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY10R2-TS_cblj8a.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 401,
    name: 'HMI Proface GP-4301T',
    category: 'HMI',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 402,
    name: 'HMI Proface GP-4301TM',
    category: 'HMI',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 403,
    name: 'HMI Proface GP-4401T',
    category: 'HMI',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 404,
    name: 'HMI Proface GP-4501T',
    category: 'HMI',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4601T_qbofqz.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 405,
    name: 'HMI Proface GP-4601T',
    category: 'HMI',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4601T_qbofqz.jpg',
    //description: 'Bộ điều khiển lập trình hiệu suất cao, phù hợp cho nhiều ứng dụng công nghiệp.',//
    price: 5500000, // Giá dạng số
  },
  {
    id: 501,
    name: 'Cảm biến sợi quang Keyence FS-N40',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FS-N40_nz2zl6.jpg',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 502,
    name: 'Cảm biến sợi quang Keyence FS-V30',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/FS-V30_hqj3cc.jpg',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 503,
    name: 'Cảm biến quang 100 mm Keyence LR-ZB100CP',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-ZB100CP_w1r3it.jpg',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 504,
    name: 'Cảm biến quang Omron E3Z-D61',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3Z-D61_ikgmfn.jpg',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 505,
    name: 'Cảm biến quang Omron E3Z-R61',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-R61_igscnb.webp',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 506,
    name: 'Cảm biến quang Omron E3Z-T61',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-T61_cdcy3k.webp',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 507,
    name: 'Cảm biến quang Omron E3Z-D82',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-D82_plxva5.avif',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 508,
    name: 'Cảm biến tiệm cận Omron E2B-S08KS02-WP-C1',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2B-S08KS02-WP-C1_wbo1lp.webp',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 509,
    name: 'Cảm biến tiệm cận Omron E2E-X10MY1',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X10MY1_x2mozj.jpg',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
  {
    id: 510,
    name: 'Cảm biến tiệm cận Omron E2E-X14MD1',
    category: 'Cảm biến',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E2E-X14MD1_w7wrsx.webp',
    //description: 'Cảm biến quang học chính xác, phản hồi nhanh và độ bền cao.',
    price: 750000,
  },
];

export default featuredProducts;

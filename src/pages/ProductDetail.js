import React, { useState } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';

// Dữ liệu sản phẩm của bạn
const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX3U-32MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-32MR_uwdzgr.webp',
    description: 'PLC compact MELSEC-F series, hiệu năng cao, tích hợp 16 DI (24 V DC) và 16 relay DO, nguồn AC 100–240 V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240 V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24 V DC) + 16 relay DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '64 K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 35 W' },
      { label: 'Nhiệt độ hoạt động', value: '0 °C đến 55 °C' },
    ],
    features: [
      'Thiết kế compact, dễ dàng lắp đặt DIN-rail',
      'Tốc độ xử lý cao cho ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp',
    ],
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX3U-64MT/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-64MT_uhz0w0.jpg',
    description: 'PLC compact MELSEC-F series với 64 điểm I/O tích hợp, tốc độ xử lý cao và khả năng mở rộng qua CC-Link.',
    specifications: [
      { label: 'I/O tích hợp', value: '32 DI + 32 DO (64 điểm)' },
      { label: 'Bộ nhớ chương trình', value: '64 000 bước' },
      { label: 'Tốc độ xử lý (cơ bản)', value: '≈ 0.065 µs' },
      { label: 'Tốc độ xử lý (ứng dụng)', value: '≈ 0.642 µs' },
      { label: 'Mở rộng I/O tối đa', value: '384 điểm qua CC-Link' },
      { label: 'Nguồn & công suất', value: 'AC 100–240 V, 45 W' },
    ],
    features: [
      'Tích hợp CPU, nguồn & I/O trong một',
      'Xử lý nhanh, phù hợp ứng dụng phức tạp',
      'Hỗ trợ mở rộng linh hoạt qua CC-Link',
      'Bộ nhớ lớn, cho phép chương trình phức tạp',
    ],
  },
  {
    id: 3,
    name: 'PLC Mitsubishi FX1S-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-14MR-ES_t4hpet.jpg',
    description: 'PLC FX1S series dạng brick nhỏ gọn, 8 DI + 6 DO, nguồn AC 85-264 V, phù hợp ứng dụng cơ bản.',
    specifications: [
      { label: 'Nguồn cấp', value: '85–264 VAC' },
      { label: 'I/O tích hợp', value: '8 DI + 6 DO (relay)' },
      { label: 'Điện áp đầu vào', value: '24 VDC (source/sink)' },
      { label: 'Công suất tiêu thụ', value: '25 W' },
      { label: 'Program Capacity', value: '2 000 bước' },
      { label: 'Tốc độ đầu ra xung cao', value: '2 đầu ra 100 kHz' },
    ],
    features: [
      'Kích thước nhỏ, lắp đặt dễ',
      'Đầu ra xung tốc độ cao cho điều khiển cơ bản',
      'Nguồn rộng, dùng linh hoạt',
      'Phù hợp cho các ứng dụng nhỏ, tiết kiệm chi phí',
    ],
  },
  {
    id: 4,
    name: 'PLC Mitsubishi FX1N-24MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1N-24MR-ES_ptmkm4.jpg',
    description: 'PLC FX1N series, 14 DI + 10 DO (relay), nguồn AC 100–240 V, bộ nhớ ~8 000 bước.',
    specifications: [
      { label: 'Nguồn cấp', value: '100–240 VAC' },
      { label: 'I/O tích hợp', value: '14 DI + 10 DO (relay)' },
      { label: 'Bộ nhớ chương trình', value: '≈ 8 000 bước' },
      { label: 'Công suất', value: '30–32 W' },
    ],
    features: [
      'Số I/O vừa phải cho ứng dụng trung bình',
      'Relay output bền, phù hợp điều khiển tải nhỏ',
      'Nguồn AC toàn cầu (World spec)',
      'Chi phí hợp lý cho ứng dụng công nghiệp nhẹ',
    ],
  },
  {
    id: 5,
    name: 'PLC Mitsubishi FX2N-16MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16MR-ES_hesbb5.jpg',
    description: 'PLC FX2N series với 8 DI + 8 DO (relay), nguồn AC 100–240 V, dung lượng đến 8 000 bước.',
    specifications: [
      { label: 'Nguồn cấp', value: '100–240 VAC' },
      { label: 'I/O tích hợp', value: '8 DI + 8 DO (relay)' },
      { label: 'Bộ nhớ chương trình', value: '8 000 bước' },
      { label: 'Công suất', value: '30 VA' },
      { label: 'Kích thước (WxHxD)', value: '130×90×87 mm' },
    ],
    features: [
      'Thiết kế ổn định, độ bền cao',
      'Relay output thích hợp điều khiển cơ bản',
      'Dung lượng chương trình đủ cho nhiều ứng dụng',
    ],
  },
  {
    id: 6,
    name: 'PLC Mitsubishi FX5U-32MR/ES (iQ-F)',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5U-32MR-ES_ojpolr.jpg',
    description: 'PLC đương đại iQ-F FX5U series, 16 DI + 16 DO, thêm 3 kênh analog, Ethernet, RS-485.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240 V' },
      { label: 'I/O tích hợp', value: '16 DI + 16 DO (relay/transistor)' },
      { label: 'Analog IO', value: '3 kênh (2 IN, 1 OUT)' },
      { label: 'Bộ nhớ chương trình', value: '64 K bước (FLASH)' },
      { label: 'Giao tiếp', value: 'Ethernet, RS-485' },
      { label: 'Kích thước (WxHxD)', value: '150×90×83 mm' },
      { label: 'Trọng lượng', value: '0.65 kg' },
      { label: 'Tốc độ xử lý LD', value: '34 ns' },
    ],
    features: [
      'Nền tảng iQ-F hiện đại, nhanh và mạnh',
      'Hỗ trợ analog tích hợp, tăng khả năng điều khiển',
      'Mạng công nghiệp sẵn có: Ethernet, RS-485',
      'Có thể mở rộng tới 512 I/O qua CC-Link/AnyWireASLINK',
    ],
  },
  {
    id: 7,
    name: 'PLC Mitsubishi Q03UDECPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176586/Q03UDE_asxaz0.jpg',
    description: 'CPU mô-đun MELSEC-Q QnU universal, bộ nhớ 30 k bước (~120 kB), hỗ trợ Ethernet, tối đa 4096 I/O.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '30 k bước (~120 kB)' },
      { label: 'I/O tối đa', value: '4096 (local/remote)' },
      { label: 'Tốc độ LD', value: '20 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
    ],
    features: [
      'CPU QnU hiệu suất cao, nhiều bước program',
      'Hỗ trợ I/O lớn, phù hợp hệ thống quy mô vừa',
      'Ethernet tích hợp, dễ kết nối mạng',
      'Tốc độ xử lý nhanh cho ứng dụng phức tạp',
    ],
  },
  {
    id: 8,
    name: 'PLC Mitsubishi Q06UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDEH_n2hw1t.jpg',
    description: 'CPU mô-đun MELSEC-Q Universal, 60 k bước, I/O up to 4096/8192, tốc độ LD 9.5 ns, giao tiếp Ethernet, USB.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '60 k bước (~240 kB)' },
      { label: 'I/O tối đa', value: '4096 (local), 8192 (local+remote)' },
      { label: 'Tốc độ LD', value: '9.5 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
      { label: 'Nguồn đệm', value: 'Battery’ có buffer' },
    ],
    features: [
      'Bộ nhớ lớn, xử lý phức tạp dễ dàng',
      'I/O rất cao, thích hợp ứng dụng công nghiệp quy mô lớn',
      'Ethernet và USB tích hợp thuận tiện giao tiếp',
    ],
  },
  {
    id: 9,
    name: 'PLC Mitsubishi Q26UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDEH_mgki52.jpg',
    description: 'CPU mô-đun MELSEC-Q Universal, 260 k bước, 4096/8192 I/O, tốc độ LD 9.5 ns, Ethernet, USB, buffer battery.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '260 k bước (~1 040 kB)' },
      { label: 'I/O tối đa', value: '4096 (local), 8192 (local+remote)' },
      { label: 'Tốc độ LD', value: '9.5 ns' },
      { label: 'Giao tiếp', value: 'Ethernet, USB' },
      { label: 'Buffer Battery', value: 'Yes' },
    ],
    features: [
      'Dung lượng cực lớn, xử lý chương trình siêu phức tạp',
      'Tỷ lệ I/O cao, phù hợp hệ thống rộng',
      'Giao tiếp linh hoạt và tốc độ xử lý nhanh',
      'Có buffer đảm bảo không mất chương trình khi mất nguồn',
    ],
  },
  {
    id: 10,
    name: 'PLC Mitsubishi R04ENCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R04ENCPU.jog_aeevua.webp',
    description: 'CPU iQ-R series standard, 40 k bước, hỗ trợ CC-Link IE, Ethernet, I/O tới 4096 điểm, nguồn 5 V DC từ rack.',
    specifications: [
      { label: 'Bộ nhớ chương trình', value: '40 k bước (~160 kB)' },
      { label: 'I/O tối đa', value: '4096 (local)' },
      { label: 'Giao tiếp', value: 'Ethernet, CC-Link IE, USB' },
      { label: 'Nguồn cấp', value: '5 V DC (từ iQ-R PSU)' },
    ],
    features: [
      'Thuộc iQ-R thế hệ mới, mạng CC-Link IE tốc độ cao',
      'Dung lượng bộ nhớ đủ cho hệ thống phức tạp',
      'Giao tiếp đa dạng, dễ tích hợp vào hệ thống lớn',
    ],
  },
  {
    id: 11,
    name: 'PLC Mitsubishi FX1S-30MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-30MR-ES_ijrmjl.webp',
    description: 'PLC nhỏ gọn thuộc dòng MELSEC-F, tích hợp 16 ngõ vào số 24V DC và 16 relay ngõ ra, nguồn cấp AC 100–240V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24V DC) + 16 relay DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '32K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 21W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt trên DIN-rail',
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/FX1S-30MR-ES%2FUL']
  },
  {
    id: 12,
    name: 'PLC Mitsubishi FX1N-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FX1N-14MR-ES_k3jvg6.webp',
    description: 'PLC thuộc dòng MELSEC-F, tích hợp 8 ngõ vào số 24V DC và 6 relay ngõ ra, nguồn cấp AC 100–240V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '8 DI (24V DC) + 6 relay DO (14 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '32K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 29W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt trên DIN-rail',
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/FX1N-14MR-ES%2FUL']
  },
  {
    id: 13,
    name: 'PLC Mitsubishi FX2N-32MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-32MR-ES_s3vrcc.jpg',
    description: 'PLC thuộc dòng MELSEC-F, tích hợp 16 ngõ vào số 24V DC và 16 relay ngõ ra, nguồn cấp AC 100–240V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24V DC) + 16 relay DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '32K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 30W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt trên DIN-rail',
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp'
    ],
    source: ['https://us.wiautomation.com/mitsubishi/plc-systems/fx2n32mresul']
  },
  {
    id: 14,
    name: 'PLC Mitsubishi FX3G-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3G-14MR-ES_sjbqzl.jpg',
    description: 'PLC thuộc dòng MELSEC-F, tích hợp 8 ngõ vào số 24V DC và 6 relay ngõ ra, nguồn cấp AC 100–240V.',
    specifications: [
      { label: 'Nguồn cấp', value: 'AC 100–240V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '8 DI (24V DC) + 6 relay DO (14 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '32K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '≈ 0.065 µs/lệnh' },
      { label: 'Công suất tiêu thụ', value: '≈ 30W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt trên DIN-rail',
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, tương thích với FX2N và nhiều module mở rộng',
      'Relay DO chịu tải tốt, phù hợp điều khiển trực tiếp'
    ],
    source: ['https://emea.mitsubishielectric.com/fa/products/cnt/plc/plc_fx/plc-main-unit/fx3g-14mr-es.html']
  },
  {
    id: 15,
    name: 'PLC Mitsubishi FX5UJ-40MT/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UJ-40MT-ES_os66o9.jpg',
    description: 'PLC thuộc dòng MELSEC iQ-F, tích hợp 24 ngõ vào số 24V DC và 16 transistor ngõ ra, hỗ trợ Ethernet và USB.',
    specifications: [
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '24 DI (24V DC) + 16 transistor DO (40 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '48K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: 'LD: 0.034 µs' },
      { label: 'Công suất tiêu thụ', value: '≈ 35W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 256 I/O',
      'Hỗ trợ Ethernet và USB cho kết nối linh hoạt',
      'Chức năng điều khiển vị trí và đếm tốc độ cao'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?category=ex&formNm=FX5-_M-E-_FX5UJ-40MT%2FES_3444&id=spec&kisyu=%2Fplcf&lang=2&word=Motion%2FPositioning+Module']
  },
  {
    id: 16,
    name: 'PLC Mitsubishi FX5UC-32MT/DSS',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MT-DSS_xkevi3.webp',
    description: 'PLC thuộc dòng MELSEC iQ-F, tích hợp 16 ngõ vào số 24V DC và 16 transistor ngõ ra, hỗ trợ Ethernet và USB.',
    specifications: [
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24V DC) + 16 transistor DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '64K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: 'LD: 0.034 µs' },
      { label: 'Công suất tiêu thụ', value: '≈ 35W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 256 I/O',
      'Hỗ trợ Ethernet và USB cho kết nối linh hoạt',
      'Chức năng điều khiển vị trí và đếm tốc độ cao'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/detail.page?category=ex&formNm=FX5-_M-D-_FX5UC-32MT%2FDSS_29&id=spec&kisyu=%2Fplcf&lang=2']
  },
  {
    id: 17,
    name: 'Compact module FX5UC-32MR/DS-TS',
    brand: 'Mitsubishi',
    type: 'Compact PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MR-DS-TS_aiwzqo.jpg',
    description: 'Module mở rộng cho PLC FX5UC, tích hợp 16 ngõ vào số 24V DC và 16 relay ngõ ra, hỗ trợ Ethernet và RS-485.',
    specifications: [
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24V DC) + 16 relay DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '64K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: 'LD: 0.034 µs' },
      { label: 'Công suất tiêu thụ', value: '≈ 35W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tích hợp Ethernet và RS-485 cho kết nối linh hoạt',
      'Khả năng mở rộng cao, hỗ trợ tối đa 256 I/O',
      'Chức năng điều khiển vị trí và đếm tốc độ cao'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/detail.page?category=ex&formNm=FX5-_M-D-_FX5UC-32MR%2FDS-TS_31&id=spec&kisyu=%2Fplcf&lang=2']
  },
  {
    id: 18,
    name: 'Compact module FX5UC-32MT/D',
    brand: 'Mitsubishi',
    type: 'Compact PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MT-DS-TS_bfor4r.jpg',
    description: 'Module mở rộng cho PLC FX5UC, tích hợp 16 ngõ vào số 24V DC và 16 transistor ngõ ra, hỗ trợ Ethernet.',
    specifications: [
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Số ngõ vào/ra tích hợp', value: '16 DI (24V DC) + 16 transistor DO (32 I/O)' },
      { label: 'Bộ nhớ chương trình', value: '64K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: 'LD: 0.034 µs' },
      { label: 'Công suất tiêu thụ', value: '≈ 35W' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tích hợp Ethernet cho kết nối linh hoạt',
      'Khả năng mở rộng cao, hỗ trợ tối đa 256 I/O',
      'Chức năng điều khiển vị trí và đếm tốc độ cao'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/detail.page?category=ex&formNm=FX5-_M-D-_FX5UC-32MT%2FD_27&id=spec&kisyu=%2Fplcf&lang=2']
  },
  {
    id: 19,
    name: 'PLC Mitsubishi Q06UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDV_dtwtlu.webp',
    description: 'PLC thuộc dòng MELSEC-Q, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 60K bước, tốc độ xử lý cơ bản 1.9 ns.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '60K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/detail.page?category=ex&formNm=QnUDVCPU_Q06UDVCPU_3885&id=spec&kisyu=%2Fplcq&lang=2']
  },
  {
    id: 20,
    name: 'PLC Mitsubishi Q13UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q13UDV_y0sgzy.jpg',
    description: 'PLC thuộc dòng MELSEC-Q, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 130K bước, tốc độ xử lý cơ bản 1.9 ns.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '130K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/detail.page?formNm=QnUDVCPU_Q13UDVCPU_3886&kisyu=%2Fplcq&lang=2']
  },
  {
    id: 21,
    name: 'PLC Mitsubishi Q26UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDV_c1u2zh.jpg',
    description: 'PLC thuộc dòng MELSEC iQ-R, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 60K bước, tốc độ xử lý cơ bản 1.9 ns.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '60K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/Q26UDVCPU']
  },
  {
    id: 22,
    name: 'PLC Mitsubishi R08ENCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/R04CPU_drp01c.webp',
    description: 'CPU module thuộc dòng MELSEC iQ-R, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 80K bước, tích hợp CC-Link IE.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '80K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '0.98 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet, CC-Link IE' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB, Ethernet và CC-Link IE',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/R08ENCPU']
  },
  {
    id: 23,
    name: 'PLC Mitsubishi R04CPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R08CPU_aijt8p.jpg',
    description: 'CPU module thuộc dòng MELSEC iQ-R, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 40K bước.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '40K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/R04CPU']
  },
  {
    id: 24,
    name: 'PLC Mitsubishi R08CPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R08ENCPU_hbcjok.webp',
    description: 'CPU module thuộc dòng MELSEC iQ-R, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 80K bước.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '80K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/R08CPU']
  },
  {
    id: 25,
    name: 'PLC Mitsubishi R120SFCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R120SFCPU_tuvu8f.jpg',
    description: 'CPU module thuộc dòng MELSEC iQ-R, hỗ trợ tối đa 4096 điểm I/O, bộ nhớ chương trình 1200K bước, tích hợp chức năng an toàn.',
    specifications: [
      { label: 'Số điểm I/O tối đa', value: '4096' },
      { label: 'Bộ nhớ chương trình', value: '1200K bước' },
      { label: 'Tốc độ xử lý cơ bản', value: '1.9 ns' },
      { label: 'Cổng giao tiếp', value: 'USB, Ethernet' },
      { label: 'Khe cắm thẻ nhớ', value: 'Có' },
      { label: 'Chức năng an toàn', value: 'Tích hợp' },
      { label: 'Nhiệt độ hoạt động', value: '0°C đến 55°C' }
    ],
    features: [
      'Tốc độ xử lý cao, phù hợp với ứng dụng yêu cầu nhanh',
      'Khả năng mở rộng cao, hỗ trợ tối đa 8192 điểm I/O',
      'Hỗ trợ giao tiếp USB và Ethernet',
      'Tích hợp khe cắm thẻ nhớ SD cho việc lưu trữ và sao lưu dữ liệu',
      'Tích hợp chức năng an toàn, phù hợp với các ứng dụng yêu cầu an toàn cao'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/R120SFCPU']
  },
  {
    id: 26,
    name: 'Base unit Q35B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q35B_szhxta.webp',
    description: 'Mô-đun cơ bản MELSEC-Q, 5 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '5' },
      { label: 'Kích thước (C×R×S)', value: '98×245×44.1 mm' },
      { label: 'Trọng lượng', value: '0.27 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'Q6DIN2 (bán rời)' }
    ],
    features: [
      '5 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ UL, cUL, CE(EMC), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnB_Q35B_3836&kisyu=%2Fplcq']
  },
  {
    id: 27,
    name: 'Base unit Q38B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q38B_wfuamg.jpg',
    description: 'Mô-đun cơ bản MELSEC-Q, 8 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '8' },
      { label: 'Kích thước (C×R×S)', value: '98×328×44.1 mm' },
      { label: 'Trọng lượng', value: '0.36 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'Q6DIN1 (bán rời)' }
    ],
    features: [
      '8 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnB_Q38B_3837&kisyu=%2Fplcq']
  },
  {
    id: 28,
    name: 'Base unit Q33B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q33B_hjuqud.jpg',
    description: 'Mô-đun cơ bản MELSEC-Q, 3 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '3' },
      { label: 'Kích thước (C×R×S)', value: '98×189×44.1 mm' },
      { label: 'Trọng lượng', value: '0.21 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'Q6DIN3 (bán rời)' }
    ],
    features: [
      '3 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnB_Q33B_3835&kisyu=%2Fplcq']
  },
  {
    id: 29,
    name: 'Base unit Q312B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/Q312B_wh7njb.jpg',
    description: 'Mô-đun cơ bản MELSEC-Q, 12 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '12' },
      { label: 'Kích thước (C×R×S)', value: '98×439×44.1 mm' },
      { label: 'Trọng lượng', value: '0.47 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'Q6DIN1 (bán rời)' }
    ],
    features: [
      '12 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnB_Q312B_3839&kisyu=%2Fplcq']
  },
  {
    id: 30,
    name: 'Base unit R35B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R35B_tiouhv.jpg',
    description: 'Mô-đun cơ bản MELSEC iQ-R, 5 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '5' },
      { label: 'Kích thước (C×R×S)', value: '101×328×32.5 mm' },
      { label: 'Trọng lượng', value: '0.55 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'R6DIN1 (bán rời)' }
    ],
    features: [
      '5 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=RnB_R35B_3330&kisyu=%2Fplcr']
  },
  {
    id: 31,
    name: 'Base unit R38B',
    brand: 'Mitsubishi',
    type: 'Base Unit',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R38B_mzy1mw.jpg',
    description: 'Mô-đun cơ bản MELSEC iQ-R, 8 khe, có thể gắn DIN-rail.',
    specifications: [
      { label: 'Số khe', value: '8' },
      { label: 'Kích thước (C×R×S)', value: '101×328×32.5 mm' },
      { label: 'Trọng lượng', value: '0.55 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'R6DIN1 (bán rời)' }
    ],
    features: [
      '8 khe mở rộng',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=RnB_R38B_3332&kisyu=%2Fplcr']
  },
  {
    id: 32,
    name: 'Power supply unit Q61P',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q61P_xjmrwq.jpg',
    description: 'Mô-đun nguồn MELSEC-Q, vào DC24V, ra DC5V, gắn DIN-rail.',
    specifications: [
      { label: 'Điện áp vào', value: 'DC24V' },
      { label: 'Điện áp ra', value: 'DC5V' },
      { label: 'Dòng ra', value: '2.0 A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' },
      { label: 'Adapter gắn DIN-rail', value: 'Có' }
    ],
    features: [
      'Cung cấp nguồn ổn định cho Base Unit',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, CE, KC, LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnB_Q61P_3833&kisyu=%2Fplcq']
  },
  {
    id: 33,
    name: 'Power supply unit Q61P-A1',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q61P-A1_pacizy.jpg',
    description: 'Mô-đun nguồn cho dòng MELSEC-Q, vào AC 100–120V, ra DC 5V 6A.',
    specifications: [
      { label: 'Điện áp vào', value: 'AC 100–120V' },
      { label: 'Tần số vào', value: '50/60Hz' },
      { label: 'Dòng ra', value: 'DC 5V 6A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' }
    ],
    features: [
      'Cung cấp nguồn ổn định cho các mô-đun trong dòng MELSEC-Q',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, cUL, CE(EMC), CE(LVD), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnP_Q61P-A1_3920&kisyu=%2Fplcq']
  },
  {
    id: 34,
    name: 'Power supply unit Q62P',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q62P_zafb9p.jpg',
    description: 'Mô-đun nguồn cho dòng MELSEC-Q, vào AC 100–240V, ra DC 5V 3A và DC 24V 0.6A.',
    specifications: [
      { label: 'Điện áp vào', value: 'AC 100–240V' },
      { label: 'Tần số vào', value: '50/60Hz' },
      { label: 'Dòng ra DC 5V', value: '3A' },
      { label: 'Dòng ra DC 24V', value: '0.6A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' }
    ],
    features: [
      'Cung cấp nguồn cho các mô-đun trong dòng MELSEC-Q',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, cUL, CE(EMC), CE(LVD), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnP_Q62P_3839&kisyu=%2Fplcq']
  },
  {
    id: 35,
    name: 'Power supply unit Q63P',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q63P_cd3ipz.jpg',
    description: 'Mô-đun nguồn cho dòng MELSEC-Q, vào DC 24V, ra DC 5V 6A.',
    specifications: [
      { label: 'Điện áp vào', value: 'DC 24V' },
      { label: 'Dòng ra DC 5V', value: '6A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' }
    ],
    features: [
      'Cung cấp nguồn cho các mô-đun trong dòng MELSEC-Q',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, cUL, CE(EMC), CE(LVD), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=QnP_Q63P_3840&kisyu=%2Fplcq']
  },
  {
    id: 36,
    name: 'Power supply unit R61P',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R61P_txafzh.jpg',
    description: 'Mô-đun nguồn cho dòng MELSEC iQ-R, vào AC 100–240V, ra DC 5V 6.5A.',
    specifications: [
      { label: 'Điện áp vào', value: 'AC 100–240V' },
      { label: 'Tần số vào', value: '50/60Hz' },
      { label: 'Dòng ra DC 5V', value: '6.5A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' }
    ],
    features: [
      'Cung cấp nguồn cho các mô-đun trong dòng MELSEC iQ-R',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, cUL, CE(EMC), CE(LVD), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=RnP_R61P_3330&kisyu=%2Fplcr']
  },
  {
    id: 37,
    name: 'Power supply unit R62P',
    brand: 'Mitsubishi',
    type: 'Mô-đun nguồn',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R62P_z7q6dd.webp',
    description: 'Mô-đun nguồn cho dòng MELSEC iQ-R, vào AC 100–240V, ra DC 5V 3.5A và DC 24V 0.6A.',
    specifications: [
      { label: 'Điện áp vào', value: 'AC 100–240V' },
      { label: 'Tần số vào', value: '50/60Hz' },
      { label: 'Dòng ra DC 5V', value: '3.5A' },
      { label: 'Dòng ra DC 24V', value: '0.6A' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.15 kg' }
    ],
    features: [
      'Cung cấp nguồn cho các mô-đun trong dòng MELSEC iQ-R',
      'Hỗ trợ gắn DIN-rail',
      'Tuân thủ các tiêu chuẩn UL, cUL, CE(EMC), CE(LVD), CE(RoHS), KC(EMC), LR, NK, DNV, ABS, RINA, BV'
    ],
    source: ['https://www.mitsubishielectric.com/fa/products/faspec/point.page?formNm=RnP_R62P_3334&kisyu=%2Fplcr']
  },

  {
    id: 101,
    name: 'Biến tần Mitsubishi FR-E720-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.75K_jrq3xf.jpg', // nếu bạn có link ảnh thì mình thêm được
    description: 'Biến tần FREQROL-E700 series của Mitsubishi, 3-phase 200–240 V, compact, hiệu suất cao cho động cơ 0.75 kW.',
    specifications: [
      { label: 'Đầu vào', value: '3-phase 200–240 V' },
      { label: 'Công suất đầu ra', value: '0.75 kW' },
      { label: 'Output capacity (kVA)', value: '2.0 kVA' },
      { label: 'Dòng định mức', value: '5 A' },
      { label: 'Chức năng điều khiển', value: 'Flux vector control, V/F, PWM cao tần, auto-tuning, PID, RS-485' },
      { label: 'Torque', value: '200 % tại 0.5 Hz (≤ 3.7 kW)' },
      { label: 'Môi trường hoạt động', value: '-10 °C đến +50 °C (non-freezing)' },
      { label: 'Bảo vệ quá tải', value: '150 % trong 60 s, 200 % trong 3 s' },
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ lắp đặt trong không gian hạn chế',
      'Khả năng tạo moment xoắn cao ở tốc độ thấp (200 % tại 0.5 Hz)',
      'Nhiều chế độ điều khiển linh hoạt (V/F, flux vector, PWM)',
      'Tự động hiệu chỉnh động cơ (auto tuning), PID, hỗ trợ RS-485',
    ],
    source: [
      'Output Capacity, rated current, functions of FR-E720-0.75K :contentReference[oaicite:0]{index=0}',
      'Torque, control types, environment specs :contentReference[oaicite:1]{index=1}'
    ]
  },
  {
    id: 102,
    name: 'Biến tần Mitsubishi FR-E720-1.5K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-1.5K_f4g2vt.png',
    description: 'Inverter FREQROL-E700 series compact, 3-phase 200–240 V, công suất 1.5 kW, hiệu suất cao.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
      { label: 'Công suất motor', value: '1.5 kW' },
      { label: 'Output capacity', value: '3.2 kVA' },
      { label: 'Dòng định mức đầu ra', value: '8 A' },
      { label: 'Tần số đầu ra', value: '0.2–400 Hz' },
      { label: 'Chống quá tải', value: '150% trong 60 s, 200% trong 3 s' },
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ lắp đặt',
      'Quá tải cao giúp khởi động mạnh mẽ',
      'Hỗ trợ Auto-tuning, nhiều chế độ điều khiển',
    ],
    source: [
      'Thông số đầu ra, công suất, dòng, tần số, quá tải của FR-E720-1.5K :contentReference[oaicite:0]{index=0}',
      'Nguồn đầu vào 200–240 V và nhiều chức năng khác :contentReference[oaicite:1]{index=1}'
    ]
  },
  {
    id: 103,
    name: 'Biến tần Mitsubishi FR-A840-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.4K_imrve8.png',
    description: 'Biến tần FREQROL-A800 series, 3-phase 400-500 V, công suất 0.4 kW, Modbus RTU, RS-232/422/485.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 380–500 VAC' },
      { label: 'Công suất motor', value: '0.4 kW' },
      { label: 'Output rated current', value: '1.5 A' },
      { label: 'Output capacity', value: '1.1 kVA' },
      { label: 'Giao tiếp', value: 'Modbus RTU, RS-232/422/485' },
      { label: 'Kích thước (WxDxH)', value: '150×140×260 mm' },
      { label: 'Trọng lượng', value: '≈ 4 kg' },
    ],
    features: [
      'Đa chuẩn kết nối, dễ tích hợp hệ thống mạng',
      'Thiết kế công nghiệp robust, IP20',
      'Phù hợp ứng dụng motor nhỏ, điều khiển chính xác'
    ],
    source: [
      'Thông số đầu vào, công suất, output current, kích thước, weight của FR-A840-0.4K :contentReference[oaicite:2]{index=2}'
    ]
  },
  {
    id: 104,
    name: 'Biến tần Mitsubishi FR-D720-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.4K_iwfcro.jpg',
    description: 'Inverter FREQROL-D700 series, 3-phase 200–240 V, công suất 0.4 kW, hiệu năng cao, tích hợp bảo vệ an toàn theo chuẩn EU PLd/SIL2.',
    specifications: [
      { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
      { label: 'Công suất motor', value: '0.4 kW' },
      { label: 'Dòng định mức đầu ra', value: '2.5 A' },
      { label: 'Output capacity', value: '≈ 1.0 kVA' },
      { label: 'Bảo vệ quá tải', value: '150 % trong 60 s, 200 % trong 0.5–3 s' },
      { label: 'An toàn chức năng', value: 'EN ISO 13849-1 Cat 3/PLd, EN 62061/IEC 61508 SIL2' },
      { label: 'Chức năng nổi bật', value: 'Magnetic-flux vector control, auto-tuning, mật khẩu bảo vệ tham số' },
    ],
    features: [
      'Thiết kế compact, dễ lắp đặt, tiết kiệm không gian',
      'Torque cao ở tần số thấp – phù hợp băng tải, máy giặt công nghiệp,…',
      'Cổng điều khiển an toàn tích hợp để tắt khẩn cấp hiệu quả',
      'Quản lý tham số qua mật khẩu tránh sai chỉnh không mong muốn',
    ],
    source: [
      'Thông số nguồn, công suất, dòng, an toàn chuẩn PLd/SIL2 và vector control/auto-tuning ([search0]turn0search0[/search0], [search4]turn0search4[/search4])',
      'Output capacity, overload, IP20 ([search2]turn0search2[/search2], [search10]turn0search10[/search10])'
    ]
  },
    {
      id: 105,
      name: 'Biến tần Mitsubishi FR-F820-0.75K',
      brand: 'Mitsubishi',
      type: 'Biến tần',
      price: 'Liên hệ',
      image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-F820-0.75K_i7zftz.jpg',
      description: 'Inverter FREQROL FR-F800 series, 3-phase 200–240 V AC, công suất định mức 0.75 kW, thiết kế phù hợp cho ứng dụng bơm/quạt với tính năng tiết kiệm năng lượng và kết nối linh hoạt.',
      specifications: [
        { label: 'Nguồn đầu vào', value: '3-phase 200–240 VAC' },
        { label: 'Công suất motor', value: '0.75 kW' },
        { label: 'Dòng định mức', value: '4.2 A (LD – light duty)' },
        { label: 'Output capacity', value: '≈ 1.6 kVA' },
        { label: 'Giao tiếp', value: 'RS-232 / RS-422 / RS-485' },
        { label: 'Tần số đầu ra', value: '0.2–590 Hz' },
        { label: 'Bảo vệ IP', value: 'IP20' },
        { label: 'Chiều cao', value: '≈ 260 mm' },
      ],
      features: [
        'Thiết kế tiết kiệm không gian, dễ lắp đặt trong tủ điều khiển',
        'Phù hợp cho ứng dụng quạt và bơm với điều khiển tần số chính xác',
        'Hỗ trợ truyền thông RS-232/422/485 dễ tích hợp vào hệ thống tự động hóa',
        'Hiệu suất cao, tuân thủ tiêu chuẩn CE/UL/CUL',
      ],
      source: [
        'Nguồn đầu vào, công suất, dòng định mức (LD), giao tiếp, IP, output capacity, kích thước ([PLC STORE BD](https://plcstorebd.com/product/fr-f820-0-75k-vfd-inverter-fr-f800-series-mitsubishi-electric/)) :contentReference[oaicite:0]{index=0}',
        'Xác nhận series FR-F800 và tần số đầu ra 0.2–590 Hz :contentReference[oaicite:1]{index=1}'
      ]
  },
  {
    id: 106,
    name: 'Biến tần Mitsubishi FR-E720-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần 3 pha',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.4K_fw1f85.jpg',
    description: 'Biến tần FR-E720-0.4K công suất 0.4kW, điện áp 200~240V, phù hợp điều khiển động cơ nhỏ.',
    specifications: [
      { label: 'Công suất', value: '0.4 kW' },
      { label: 'Điện áp vào', value: '200~240V AC, 3 pha' },
      { label: 'Dòng định mức', value: '3 A (2.5 A)' },
      { label: 'Tần số ra', value: '0.2~400 Hz' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.5 kg' }
    ],
    features: [
      'Điều khiển vector không cảm biến',
      'Khả năng quá tải 150% trong 60 giây, 200% trong 3 giây',
      'Tích hợp bộ lọc EMC',
      'Kết nối truyền thông RS-485, Profibus DP, CC-Link, DeviceNet, LonWorks, ControlNet, Modbus RTU, Metasys N2, EtherNet IP và Modbus TCP/IP'
    ],
    source: ['https://tudonghoahuyhoang.com/detail/bien-tan-mitsubishi-fr-e720-0-4k-0-4kw.html']
  },
  {
    id: 107,
    name: 'Biến tần Mitsubishi FR-A840-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần 3 pha',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.75K_si6thu.jpg',
    description: 'Biến tần FR-A840-0.75K công suất 0.75kW, điện áp 380~500V, dùng cho điều khiển động cơ công nghiệp.',
    specifications: [
      { label: 'Công suất', value: '0.75 kW' },
      { label: 'Điện áp vào', value: '380~500V AC, 3 pha' },
      { label: 'Dòng định mức', value: '2.5 A' },
      { label: 'Tần số ra', value: '0.2~590 Hz' },
      { label: 'Kích thước (C×R×S)', value: '260×150×140 mm' },
      { label: 'Trọng lượng', value: '4.0 kg' }
    ],
    features: [
      'Điều khiển vector không cảm biến',
      'Khả năng quá tải 150% trong 60 giây, 200% trong 3 giây',
      'Tích hợp bộ lọc EMC',
      'Kết nối truyền thông RS-232/422/485'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/FR-A840-0.75K-1']
  },
  {
    id: 108,
    name: 'Biến tần Mitsubishi FR-A840-1.5K',
    brand: 'Mitsubishi',
    type: 'Biến tần 3 pha',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-1.5K_fkosgw.jpg',
    description: 'Biến tần FR-A840-1.5K công suất 1.5kW, điện áp 380~500V, dùng cho động cơ công suất lớn.',
    specifications: [
      { label: 'Công suất', value: '1.5 kW' },
      { label: 'Điện áp vào', value: '380~500V AC, 3 pha' },
      { label: 'Dòng định mức', value: '4 A' },
      { label: 'Tần số ra', value: '0.2~590 Hz' },
      { label: 'Kích thước (C×R×S)', value: '260×150×140 mm' },
      { label: 'Trọng lượng', value: '4.5 kg' }
    ],
    features: [
      'Điều khiển vector không cảm biến',
      'Khả năng quá tải 150% trong 60 giây, 200% trong 3 giây',
      'Tích hợp bộ lọc EMC',
      'Kết nối truyền thông RS-232/422/485'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/FR-A840-1.5K-1']
  },
  {
    id: 109,
    name: 'Biến tần Mitsubishi FR-D720-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần 3 pha',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.75K_hfjl4k.jpg',
    description: 'Biến tần FR-D720-0.75K công suất 0.75kW, điện áp 200~240V, dùng điều khiển động cơ nhỏ.',
    specifications: [
      { label: 'Công suất', value: '0.75 kW' },
      { label: 'Điện áp vào', value: '200~240V AC, 3 pha' },
      { label: 'Dòng định mức', value: '4.2 A' },
      { label: 'Tần số ra', value: '0.2~400 Hz' },
      { label: 'Kích thước (C×R×S)', value: '98×45×100 mm' },
      { label: 'Trọng lượng', value: '0.5 kg' }
    ],
    features: [
      'Điều khiển vector không cảm biến',
      'Khả năng quá tải 150% trong 60 giây, 200% trong 3 giây',
      'Tích hợp bộ lọc EMC',
      'Kết nối truyền thông RS-485'
    ],
    source: ['https://shop1.us.mitsubishielectric.com/products/FR-D720-0.75K']
  },

    // Servo
  {
    id: 201,
    name: 'Servo driver Mitsubishi MR-J4-10A',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-A_wyxi60.jpg',
    description: 'MELSERVO-J4 series, servo amplifier công suất 0.1 kW, giao diện general-purpose, có dynamic brake tích hợp.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–240 V' },
      { label: 'Dòng định mức', value: '≈ 1.1 A' },
      { label: 'Giao diện', value: 'General-purpose (pulse/analog input)' },
      { label: 'Kích thước (W×H×D)', value: '≈ ? (tài liệu chưa ghi chính xác)' },
      { label: 'Dynamic brake', value: 'Tích hợp' },
    ],
    features: [
      'Dễ tích hợp với hầu hết hệ thống nhờ giao diện phổ biến',
      'Tích hợp dynamic brake giúp dừng nhanh, tăng an toàn',
      'Thiết kế phù hợp đa ứng dụng công nghiệp nhỏ nhẹ',
    ],
    source: [
      'Công suất, giao diện, dynamic brake và dòng định mức từ MR-J4-10A NEX Instrument ([turn0search8]:contentReference[oaicite:0]{index=0})',
      'Thông tin general-purpose interface và tích hợp dynamic brake ([turn0search6]:contentReference[oaicite:1]{index=1})',
    ],
  },
  {
    id: 202,
    name: 'Servo driver Mitsubishi MR-J4-10B',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-B_jpg_c7fw0h.jpg',
    description: 'MELSERVO-J4 series, servo amplifier 0.1 kW, giao tiếp SSCNET III/H, dynamic brake tích hợp, kích thước nhỏ gọn.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–240 V' },
      { label: 'Dòng định mức', value: '≈ 1.1 A' },
      { label: 'Giao tiếp', value: 'SSCNET III/H' },
      { label: 'Kích thước (W×H×D)', value: '≈ 40 × 168 × 170 mm' },
      { label: 'Weight', value: '≈ 0.8 kg' },
      { label: 'Dynamic brake', value: 'Tích hợp' },
    ],
    features: [
      'Tốc độ truyền dữ liệu nhanh qua SSCNET III/H, phù hợp đồng bộ multi-axis',
      'Kích thước nhỏ, dễ bố trí trong tủ điều khiển',
      'Dynamic brake tích hợp đảm bảo an toàn khi mất tín hiệu',
    ],
    source: [
      'Thông số kỹ thuật đầy đủ về dòng, công suất, kích thước, dynamic brake từ Mitsubishi Europe ([turn0search24]:contentReference[oaicite:2]{index=2})',
      'Bổ sung chi tiết kích thước và độ nặng từ VenusAutomation ([turn0search12]:contentReference[oaicite:3]{index=3})',
    ],
  },
  {
    id: 203,
    name: 'Servo driver Mitsubishi MR-J3-10B',
    brand: 'Mitsubishi',
    type: 'Servo Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J3-10B_mgfkxa.jpg',
    description: 'MELSERVO-J3 series, servo amplifier 0.1 kW, hỗ trợ Sinusoidal PWM, SSCNET III, công nghệ chống rung cao cấp.',
    specifications: [
      { label: 'Công suất motor', value: '0.1 kW' },
      { label: 'Nguồn cấp', value: '1-phase hoặc 3-phase AC 200–230 V' },
      { label: 'Control system', value: 'Sinusoidal PWM / current control' },
      { label: 'Giao tiếp', value: 'SSCNET III' },
      { label: 'Cooling', value: 'Self-cooling (IP00)' },
      { label: 'Các chức năng nổi bật', value: 'Auto-tuning, chống chế độ cộng hưởng, thiết lập dễ bằng phần mềm' },
    ],
    features: [
      'Độ chính xác cao nhờ Sinusoidal PWM và auto-tuning',
      'Khả năng chống cộng hưởng giúp chuyển động mượt và êm',
      'Giao tiếp tốc độ cao qua SSCNET III, dễ tích hợp vào hệ thống multi-axis',
    ],
    source: [
      'Thông số power, control system, SSCNET III từ NexInstrument ([turn0search5]:contentReference[oaicite:4]{index=4})',
      'Mô tả chi tiết về tính năng nâng cao và auto-tuning từ catalog MR-J3 PDF ([turn0search13]:contentReference[oaicite:5]{index=5})',
    ],
  },
  {
    id: 204,
    name: 'Motion controller module QD77MS4',
    brand: 'Mitsubishi',
    type: 'Motion Controller Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD77MS4_kp0abv.jpg',
    description: 'Module điều khiển chuyển động QD77MS4 cho PLC Mitsubishi, hỗ trợ điều khiển servo đa trục với tốc độ cao và chính xác.',
    specifications: [
      { label: 'Số trục hỗ trợ', value: '4 trục servo' },
      { label: 'Tốc độ xung ra', value: '10 Mpps (Million pulses per second)' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
      { label: 'Kích thước', value: '98 × 27 × 90 mm' },
      { label: 'Giao tiếp', value: 'RS-232/485, Modbus, MELSOFT' },
    ],
    features: [
      'Điều khiển chính xác đa trục servo',
      'Tích hợp trực tiếp với PLC Mitsubishi Q series',
      'Hỗ trợ các lệnh vị trí, tốc độ, gia tốc',
      'Dễ cấu hình và lập trình qua phần mềm MELSOFT',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/motion/qseries/modules/QD77MS4'
    ]
  },
  {
    id: 205,
    name: 'Positioning module QD75MH4',
    brand: 'Mitsubishi',
    type: 'Positioning Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75MH4_yq2sme.jpg',
    description: 'Module định vị QD75MH4 cho PLC Mitsubishi, hỗ trợ điều khiển vị trí nhiều trục với độ chính xác cao, thường dùng cho máy CNC và robot.',
    specifications: [
      { label: 'Số trục', value: '4 trục đồng bộ' },
      { label: 'Tốc độ xung ra', value: '5 Mpps' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
      { label: 'Giao tiếp', value: 'RS-232/485, MELSOFT' },
      { label: 'Kích thước', value: '98 × 27 × 90 mm' },
    ],
    features: [
      'Điều khiển định vị chính xác nhiều trục',
      'Hỗ trợ đồng bộ trục và chạy theo đường cong',
      'Tích hợp trực tiếp với PLC Q series',
      'Cấu hình nhanh với phần mềm MELSOFT',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/motion/qseries/modules/QD75MH4'
    ]
  },
  {  
    id: 206,  
    name: 'Motion controller module QD77MS2',  
    brand: 'Mitsubishi',  
    type: 'Motion Controller Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD77MS2_k0owab.jpg',  
    description: 'Module điều khiển chuyển động QD77MS2 thuộc dòng MELSEC-Q, hỗ trợ điều khiển servo 2 trục, phù hợp cho các ứng dụng định vị và đồng bộ hóa chuyển động tốc độ cao.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '2 trục' },  
      { label: 'Loại điều khiển', value: 'Điều khiển vị trí, tốc độ, mô-men' },  
      { label: 'Chu kỳ quét', value: '0.88 ms/65k bước' },  
      { label: 'Giao tiếp', value: 'SSCNET III/H' },  
    ],  
    features: [  
      'Hỗ trợ đồng bộ chuyển động nhiều trục',  
      'Tích hợp các chức năng nội suy tuyến tính và tròn',  
      'Kết nối dễ dàng với servo Mitsubishi MR-J3/MR-J4',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcq/QD77MS2'],  
  },  

  {  
    id: 207,  
    name: 'Motion controller module RD77MS2',  
    brand: 'Mitsubishi',  
    type: 'Motion Controller Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RD77MS2_ptoeep.jpg',  
    description: 'Module RD77MS2 thuộc dòng MELSEC iQ-R, điều khiển servo 2 trục với độ chính xác cao, hỗ trợ SSCNET III/H.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '2 trục' },  
      { label: 'Chu kỳ quét', value: '0.222 µs/lệnh' },  
      { label: 'Giao tiếp', value: 'SSCNET III/H' },  
    ],  
    features: [  
      'Đồng bộ hóa chuyển động tốc độ cao',  
      'Độ chính xác và ổn định cao cho ứng dụng công nghiệp',  
      'Tích hợp chức năng bảo trì và chẩn đoán dễ dàng',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcr/RD77MS2'],  
  },  

  {  
    id: 208,  
    name: 'Motion controller module RD77MS4',  
    brand: 'Mitsubishi',  
    type: 'Motion Controller Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RD77MS4_bbuv3k.jpg',  
    description: 'Module điều khiển chuyển động RD77MS4 dòng MELSEC iQ-R, hỗ trợ điều khiển 4 trục servo với tốc độ cao và chức năng đồng bộ nâng cao.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '4 trục' },  
      { label: 'Chu kỳ quét', value: '0.222 µs/lệnh' },  
      { label: 'Giao tiếp', value: 'SSCNET III/H' },  
    ],  
    features: [  
      'Hỗ trợ nhiều phương thức điều khiển chuyển động',  
      'Đồng bộ nhiều trục với độ chính xác cao',  
      'Khả năng mở rộng linh hoạt với dòng iQ-R',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcr/RD77MS4'],  
  },  

  {  
    id: 209,  
    name: 'Positioning module QD75D2',  
    brand: 'Mitsubishi',  
    type: 'Positioning Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75D2_mske9g.jpg',  
    description: 'Module định vị QD75D2 dòng MELSEC-Q hỗ trợ điều khiển 2 trục, sử dụng tín hiệu xung tốc độ cao để định vị chính xác.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '2 trục' },  
      { label: 'Ngõ ra xung', value: '200 kpps' },  
      { label: 'Loại tín hiệu', value: 'xung & hướng' },  
    ],  
    features: [  
      'Điều khiển định vị tốc độ cao',  
      'Hỗ trợ chức năng nội suy',  
      'Tích hợp dễ dàng với PLC dòng Q',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcq/QD75D2'],  
  },  

  {  
    id: 210,  
    name: 'Positioning module QD75D4',  
    brand: 'Mitsubishi',  
    type: 'Positioning Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75D4_dw0uqs.jpg',  
    description: 'Module định vị QD75D4 thuộc dòng MELSEC-Q, hỗ trợ điều khiển 4 trục bằng tín hiệu xung tốc độ cao.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '4 trục' },  
      { label: 'Ngõ ra xung', value: '200 kpps' },  
      { label: 'Loại tín hiệu', value: 'xung & hướng' },  
    ],  
    features: [  
      'Hỗ trợ đồng bộ hóa nhiều trục',  
      'Tốc độ xử lý nhanh và ổn định',  
      'Tích hợp nội suy tuyến tính, tròn',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcq/QD75D4'],  
  },  

  {  
    id: 211,  
    name: 'High-speed positioning module FX3U-2HSY-ADP',  
    brand: 'Mitsubishi',  
    type: 'High-speed Positioning Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-2HSY-ADP_nrvlec.webp',  
    description: 'Module định vị tốc độ cao FX3U-2HSY-ADP dùng cho PLC dòng FX3U, hỗ trợ điều khiển 2 trục bằng tín hiệu xung tốc độ cao.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '2 trục' },  
      { label: 'Ngõ ra xung', value: '200 kpps' },  
      { label: 'Loại tín hiệu', value: 'xung & hướng' },  
    ],  
    features: [  
      'Điều khiển định vị tốc độ cao',  
      'Thiết kế nhỏ gọn, dễ lắp đặt',  
      'Phù hợp với nhiều ứng dụng máy móc nhỏ gọn',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcfx/FX3U-2HSY-ADP'],  
  },  

  {  
    id: 212,  
    name: 'Simple Motion Module FX5-40SSC-S',  
    brand: 'Mitsubishi',  
    type: 'Simple Motion Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-40SSC-S_uhyxr8.webp',  
    description: 'Module Simple Motion FX5-40SSC-S thuộc dòng MELSEC iQ-F, hỗ trợ điều khiển tối đa 4 trục servo thông qua SSCNET III/H.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '4 trục' },  
      { label: 'Chu kỳ quét', value: '0.222 µs/lệnh' },  
      { label: 'Giao tiếp', value: 'SSCNET III/H' },  
    ],  
    features: [  
      'Điều khiển nhiều trục với tốc độ cao',  
      'Tích hợp chức năng nội suy và cam điện tử',  
      'Dễ dàng cấu hình với công cụ GX Works3',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcfx/FX5-40SSC-S'],  
  },  

  {  
    id: 213,  
    name: 'Pulse Output Module FX5-20PG-P',  
    brand: 'Mitsubishi',  
    type: 'Pulse Output Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-20PG-P_gt80tq.webp',  
    description: 'Module xuất xung FX5-20PG-P thuộc dòng MELSEC iQ-F, điều khiển tối đa 2 trục với ngõ ra xung tốc độ cao.',  
    specifications: [  
      { label: 'Số trục điều khiển', value: '2 trục' },  
      { label: 'Ngõ ra xung', value: '1 MHz' },  
      { label: 'Loại tín hiệu', value: 'xung & hướng / CW-CCW' },  
    ],  
    features: [  
      'Điều khiển định vị tốc độ cao',  
      'Tích hợp sẵn trong hệ thống iQ-F dễ lập trình',  
      'Phù hợp cho ứng dụng máy đóng gói, CNC nhỏ',  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/point.do?kisyu=/plcfx/FX5-20PG-P'],  
  },  
    // I/O
  {
    id: 301,
    name: 'Input module FX2N-16EX-ES/UL',
    brand: 'Mitsubishi',
    type: 'PLC Module – Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EX-ES-UL_hz7tbh.webp',
    description: 'Mô-đun mở rộng đầu vào kỹ thuật số FX2N, 16 điểm, 24 V DC, tương thích với FX2N, FX1N, FX3U…',
    specifications: [
      { label: 'Số điểm đầu vào', value: '16 DI (24 V DC)' },
      { label: 'Kiểu kết nối', value: 'cọc vặn (screw-clamp)' },
      { label: 'Chọn loại input', value: 'Sink/Source (PNP/NPN)' },
      { label: 'Nguồn cung cấp', value: 'PLC internal power' },
      { label: 'Trọng lượng', value: '≈ 0.3 kg' },
      { label: 'Kích thước (L×W×H)', value: '≈ 90 × 40 × 87 mm' },
      { label: 'Phản hồi đầu vào', value: '≈ 10 ms' },
    ],
    features: [
      'Mở rộng dễ dàng cho các dòng PLC FX cũ và mới',
      'Tùy chọn sink/source linh hoạt, phù hợp nhiều cảm biến',
      'Thiết kế nhỏ gọn, dễ gắn thêm trên thanh DIN',
      'Tín hiệu đầu vào có đèn LED báo hiệu rõ ràng',
    ],
    source: [
      'Thông số kỹ thuật đầu vào, số DI, sink/source, phản hồi thời gian, trọng lượng, kích thước từ trang chính hãng Mitsubishi :contentReference[oaicite:0]{index=0}',
      'Chi tiết 16 điểm đầu vào, screw-clamp term, 24 V DC, kích thước từ RS Components :contentReference[oaicite:1]{index=1}',
    ],
  },
  {
    id: 302,
    name: 'Output module FX2N-16EYR-ES/UL',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EYR-ES-UL_s2biev.jpg',
    description: 'Mô-đun mở rộng đầu ra relay FX2N, 16 điểm (NO), tương thích dòng FX2N, FX3U…',
    specifications: [
      { label: 'Số điểm đầu ra', value: '16 relay NO' },
      { label: 'Tải tối đa', value: '2 A / 240 V AC' },
      { label: 'Nguồn cung cấp', value: 'Relay, từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.26 kg' },
      { label: 'Kiểu nối', value: 'Screw-clamp terminal' },
    ],
    features: [
      'Đầu ra relay mạnh, chịu tải cao',
      'Lắp thêm dễ dàng vào dãy PLC FX2N',
      'Bao gồm tiêu chuẩn UL/CE',
    ],
    source: [
      'Spec kỹ thuật từ Mitsubishi shop1.us và MEE e-shop :contentReference[oaicite:0]{index=0}',
    ],
  },
  {
    id: 303,
    name: 'Analog input FX2N-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176533/FX2N-4AD_u4cjtw.jpg',
    description: 'Mô-đun analog input FX2N, 4 kênh, hỗ trợ tín hiệu ±10 V, ±20 mA / 4–20 mA.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải tín hiệu', value: '-10 đến +10 V, -20 đến +20 mA, 4–20 mA' },
      { label: 'Độ phân giải (voltage)', value: '5 mV (~11-bit)' },
      { label: 'Nguồn cấp', value: '5 V/30 mA hoặc 24 V/55 mA từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.30 kg' },
    ],
    features: [
      'Hỗ trợ nhiều dải tín hiệu, linh hoạt cho cảm biến analog',
      'Độ phân giải cao, đo chính xác',
    ],
    source: [
      'Spec chi tiết nibet trên Nex Instrument :contentReference[oaicite:1]{index=1}',
      'Thông tin bổ sung từ datasheet rs-online :contentReference[oaicite:2]{index=2}',
    ],
  },
  {
    id: 304,
    name: 'Analog input FX2N-2AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2AD_kx58ib.webp',
    description: 'Mô-đun analog input FX2N, 2 kênh, hỗ trợ tín hiệu 0–10 V / 0–5 V / 4–20 mA, 12-bit.',
    specifications: [
      { label: 'Số kênh analog', value: '2 kênh' },
      { label: 'Dải tín hiệu', value: '0–10 V, 0–5 V, 4–20 mA' },
      { label: 'Độ phân giải', value: '12-bit' },
      { label: 'Tốc độ chuyển đổi', value: '≈ 3.6 µs/kênh' },
      { label: 'Nguồn cấp', value: '5 V/20 mA hoặc 24 V/50 mA từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Đa dạng tín hiệu đầu vào, dễ tích hợp',
      'Chuyển đổi nhanh, phù hợp cho ứng dụng đo thời gian thực',
    ],
    source: [
      'Specs từ DoSupply và Nex Instrument :contentReference[oaicite:3]{index=3}',
      'Thông số bổ sung từ Valinonline :contentReference[oaicite:4]{index=4}',
    ],
  },
  {
    id: 305,
    name: 'Analog input FX3U-4AD-ADP',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input Adapter',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-4AD-ADP_nml1uq.jpg',
    description: 'Bộ mở rộng analog input FX3U, 4 kênh, bổ sung tín hiệu analog cho dòng FX3U.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Loại tín hiệu', value: '0-10 V / 4–20 mA (12-bit)' },
      { label: 'Ứng dụng', value: 'Adapter cho PLC FX3U' },
      { label: 'Chịu rung/shock', value: 'Shock: 147 m/s²' },
    ],
    features: [
      'Tăng khả năng đọc analog cho PLC FX3U',
      'Chịu độ rung cao, bền cho môi trường công nghiệp',
    ],
    source: [
      'Info module từ Octopart/manual :contentReference[oaicite:5]{index=5}',
    ],
  },
  {id: 306,
    name: 'Analog input FX5-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD_got1zi.jpg',
    description: 'Mô-đun analog input FX5 series, 4 kênh, chuyển tín hiệu analog sang số, cách ly quang photocoupler.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Nguồn cấp', value: '24 V DC / 5 V DC' },
      { label: 'Tốc độ chuyển đổi', value: '≈ 80 µs/kênh' },
      { label: 'Cách ly', value: 'Photocoupler giữa input và PLC' },
      { label: 'I/O points chiếm', value: '8 points' },
      { label: 'Kích thước (WxHxD)', value: '≈ 17.6×106×89.1 mm' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Độ chính xác cao, cách ly tốt, phù hợp môi trường công nghiệp',
      'Tín hiệu analog dễ đọc qua PLC iQ-F',
    ],
    source: [
      'Chi tiết kỹ thuật từ Nex Instrument và MEE site :contentReference[oaicite:6]{index=6}',
    ],
  },
  {
    id: 307,
    name: 'Analog input FX3U-4AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-4AD_zcwrpo.jpg',
    description: 'Mô-đun analog input FX3U, 4 kênh, hỗ trợ ±10 V và ±20 mA / 4–20 mA, 16-bit độ phân giải.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải tín hiệu', value: '±10 V, ±20 mA, 4–20 mA' },
      { label: 'Độ chính xác', value: '±0.3% at 25 °C; ±0.5% (0–55 °C)' },
      { label: 'Số điểm I/O chiếm', value: '8 points' },
      { label: 'Kích thước (WxHxD)', value: '55×90×87 mm' },
      { label: 'Trọng lượng', value: '≈ 0.2 kg' },
    ],
    features: [
      'Độ chính xác ổn định, phù hợp điều khiển analog cảm biến',
      'Các channel có thể chọn loại tín hiệu độc lập',
    ],
    source: [
      'Thông số chi tiết từ Nex Instrument và MEE website :contentReference[oaicite:7]{index=7}',
    ],
  },
  {
    id: 308,
    name: 'Analog output FX2N-2DA',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2DA_j87lpm.jpg',
    description: 'Mô-đun analog output FX2N, 2 kênh, chuyển giá trị số 12-bit thành tín hiệu analog (voltage/current).',
    specifications: [
      { label: 'Số kênh analog output', value: '2 kênh' },
      { label: 'Tín hiệu đầu ra', value: '0–10 V, 0–5 V, hoặc 4–20 mA (có thể chọn dây nối)' },
      { label: 'Độ phân giải', value: '12-bit' },
      { label: 'I/O points chiếm', value: '8 points' },
      { label: 'Cách ly', value: 'Giữa analog & digital circuits' },
    ],
    features: [
      'Phù hợp xuất analog cho bộ điều khiển tốc độ, van tương tự',
      'Lựa chọn dễ dàng loại tín hiệu output, linh hoạt thiết kế',
    ],
    source: [
      'Tài liệu user guide và datasheet :contentReference[oaicite:8]{index=8}',
    ],
  },
  {
    id: 309,
    name: 'I/O relay FX5-16EYR/ES',
    brand: 'Mitsubishi',
    type: 'PLC Module – Relay Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-16EYR-ES_nqxccb.webp',
    description: 'Mô-đun output relay FX5 series, 16 điểm, relay NO, tương thích FX5U/FX5UC.',
    specifications: [
      { label: 'Số điểm relay', value: '16 DO relay' },
      { label: 'Nguồn ra max', value: '30 V DC hoặc 240 V AC' },
      { label: 'Nguồn cấp module', value: '5 V DC / 24 V DC từ PLC' },
      { label: 'Trọng lượng', value: '≈ 0.25 kg' },
      { label: 'Kiểu kết nối', value: 'Screw-clamp' },
    ],
    features: [
      'Relay chịu tải tốt, dễ điều khiển thiết bị công suất nhỏ',
      'Thiết kế cho dòng iQ-F FX5, dễ mở rộng hệ thống',
    ],
    source: [
      'Specs module từ MEE site & factsheet :contentReference[oaicite:9]{index=9}',
    ],
  },
  {
    id: 310,
    name: 'Input module QX41',
    brand: 'Mitsubishi',
    type: 'PLC Module – Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX41_hitrgh.jpg',
    description: 'MELSEC-Q series digital input module, 32 điểm, 24 V DC (sink type), dùng photocoupler cách ly.',
    specifications: [
      { label: 'Số điểm đầu vào', value: '32 DI' },
      { label: 'Điện áp đầu vào định mức', value: '24 V DC' },
      { label: 'Dòng đầu vào định mức', value: '≈ 4 mA' },
      { label: 'Cách ly', value: 'Photocoupler' },
      { label: 'Response time (OFF→ON / ON→OFF)', value: 'tùy chọn từ 1 ms đến ≤70 ms' },
      { label: 'Giao tiếp', value: '40-pin connector' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.15 kg' },
      { label: 'Bảo vệ', value: 'IP2X' },
    ],
    features: [
      'Tích hợp 32 điểm input, thích hợp mở rộng cho hệ Q-series',
      'Cách ly qua photocoupler tăng độ bền tín hiệu và giảm nhiễu',
      'LED báo tín hiệu dễ theo dõi trạng thái input',
    ],
    source: [
      'Spec chung từ trang sản phẩm Mitsubishi Europe ([turn0search6]([QX41 specs]))',
      'Chi tiết kích thước, trọng lượng, dòng từ Nex Instrument ([turn0search18])',
    ],
  },
  {
    id: 311,
    name: 'Output module QY42P',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY42P_n6j07e.jpg',
    description: 'MELSEC-Q series transistor output module dạng sink, 64 điểm, 12–24 V DC.',
    specifications: [
      { label: 'Số điểm đầu ra', value: '64 transistor outputs (sink type)' },
      { label: 'Điện áp tải', value: '12–24 V DC' },
      { label: 'Dòng per output / common', value: '0.1 A/point, 2 A/common' },
      { label: 'Kết nối', value: 'Screw terminal / 40-pin connector' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.17 kg' },
    ],
    features: [
      'Khối lượng output cao, phù hợp các thiết bị tải nhỏ đến vừa',
      'Dễ lắp đặt với terminal screw chắc chắn',
      'Hỗ trợ cấu hình sink type phổ biến cho hệ Q-series',
    ],
    source: [
      'Spec cơ bản từ Mitsubishi Europe ([turn0search1])',
      'Chi tiết kích thước, dòng, trọng lượng từ Plastlist/NexInstrument ([turn0search43] & [turn0search19])',
    ],
  },
  {
    id: 312,
    name: 'Output module QY10',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY10_kegsoo.jpg',
    description: 'MELSEC-Q series relay output module, 16 điểm, 24 V DC / 240 V AC, 2 A per point.',
    specifications: [
      { label: 'Số điểm đầu ra', value: '16 relay outputs' },
      { label: 'Điện áp tải', value: '24 V DC hoặc 240 V AC' },
      { label: 'Dòng tải tối đa', value: '2 A/point' },
      { label: 'Kích thước (HxWxD)', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.22 kg' },
      { label: 'Kết nối', value: 'Screw terminal' },
    ],
    features: [
      'Relay chất lượng cao, chịu tải linh hoạt trong môi trường đa tải',
      'Thiết kế module tiêu chuẩn cho hệ Q-series',
    ],
    source: [
      'Spec từ Plastlist ([turn0search14], [turn0search38])',
      'Chi tiết kích thước & trọng lượng thêm từ VenusAutomation ([turn0search26])',
    ],
  },
  {
    id: 313,
    name: 'Analog input Q64AD',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Input',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64AD_m3nu7g.jpg',
    description: 'MELSEC-Q series analog input module, 4 channels, có thể nhận cả tín hiệu voltage và current.',
    specifications: [
      { label: 'Số kênh analog', value: '4 kênh' },
      { label: 'Dải đầu vào voltage', value: '-10…+10 V, 0…10 V, 0…5 V, 1…5 V' },
      { label: 'Dải đầu vào current', value: '0…20 mA, 4…20 mA' },
      { label: 'Độ phân giải', value: 'Normal / High resolution (up to ±16383)' },
      { label: 'Sai số', value: '≤ ±0.1 % tại 25 °C' },
      { label: 'Tốc độ A/D', value: '≈ 80 µs/channel' },
      { label: 'Cách ly', value: 'Photocoupler giữa input và PLC' },
      { label: 'Kích thước', value: '≈ 98×27.4×90 mm' },
      { label: 'Trọng lượng', value: '≈ 0.18 kg' },
    ],
    features: [
      'Hỗ trợ nhiều loại tín hiệu analog, linh hoạt cho hệ Q-series',
      'Cách ly quang tăng độ ổn định và hạn chế nhiễu',
    ],
    source: [
      'Chi tiết spec đầy đủ từ trang Mitsubishi ([turn0search3])',
      'Data từ NexInstrument bổ sung số lượng I/O và cấu trúc terminal ([turn0search33])',
    ],
  },
  {
    id: 314,
    name: 'Analog output Q64DA',
    brand: 'Mitsubishi',
    type: 'PLC Module – Analog Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64DA_whjyiz.jpg',
    description: 'MELSEC-Q series D/A converter module, 4 channels, hỗ trợ voltage và current output.',
    specifications: [
      { label: 'Số kênh analog output', value: '4 kênh' },
      { label: 'Dải điện áp output', value: '-10…+10 V DC' },
      { label: 'Dải current output', value: '0…20 mA DC' },
      { label: 'Độ phân giải', value: 'High resolution up to ±12287' },
      { label: 'Tốc độ D/A', value: '≈ 80 µs/channel' },
      { label: 'Cách ly', value: 'Photocoupler giữa output và PLC' },
      { label: 'I/O points chiếm', value: '16 points' },
      { label: 'Kích thước / Trọng lượng', value: '≈ 98×27.4×90 mm, 0.19 kg' },
    ],
    features: [
      'Cho phép xuất tín hiệu analog ra actuators, valves, drives...',
      'Độ phân giải cao, tốc độ đáp ứng nhanh, phù hợp điều khiển chính xác.',
    ],
    source: [
      'Spec ngõ ra analog từ trang Mitsubishi ([turn0search4])',
      'Chi tiết khối lượng & kích thước từ NexInstrument / LanenElectric ([turn0search16], [turn0search28])',
    ],
  },
  {
    id: 315,
    name: 'Input module RY10R2-TS',
    brand: 'Mitsubishi',
    type: 'PLC Module – Output',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY10R2-TS_cblj8a.jpg',
    description: 'iQ-R series relay output module, 16 points, 24 V DC / 240 V AC, 2 A per point, sử dụng spring-clamp terminals.',
    specifications: [
      { label: 'Số điểm output', value: '16 relay outputs' },
      { label: 'Điện áp tải', value: '24 V DC hoặc 240 V AC' },
      { label: 'Dòng tải tối đa', value: '2 A/point' },
      { label: 'Kết nối', value: 'Spring-clamp terminal block' },
      { label: 'Kích thước', value: '≈ 106×27.8×129 mm' },
      { label: 'Trọng lượng', value: '≈ 0.19 kg' },
      { label: 'I/O points chiếm', value: '16 points' },
    ],
    features: [
      'Thiết kế cho hệ iQ-R, relay chịu tải công nghiệp mạnh',
      'Kết nối spring-clamp giúp lắp đặt nhanh và chắc chắn',
    ],
    source: [
      'Spec từ Mitsubishi Europe ([turn0search5])',
      'Chi tiết kích thước, trọng lượng và dòng tiêu thụ từ Misumi / Yunus Computer ([turn0search29])',
    ],
  },
  {  
    id: 316,  
    name: 'Output transistor FX5-16ET/ES',  
    brand: 'Mitsubishi',  
    type: 'Output Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176571/FX5-16ET-ES_xlrmrc.jpg',  
    description: 'Module ngõ ra transistor cho PLC dòng FX5, dùng để điều khiển tốc độ cao, ứng dụng trong điều khiển xung và logic nhanh.',  
    specifications: [  
      { label: 'Số kênh ngõ ra', value: '16 transistor outputs' },  
      { label: 'Điện áp ngõ ra', value: 'DC 5–30 V' },  
      { label: 'Dòng tải', value: '0.5 A/kênh' },  
      { label: 'Tốc độ đáp ứng', value: '≈ 0.2 ms' },  
      { label: 'Kết nối', value: 'Terminal block (screw type)' },  
      { label: 'Nhiệt độ hoạt động', value: '0–55 °C' }  
    ],  
    features: [  
      'Ngõ ra transistor tốc độ cao, phù hợp điều khiển xung',  
      'Độ bền cao, tuổi thọ dài so với relay',  
      'Thiết kế nhỏ gọn, dễ lắp đặt DIN-rail'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=FX5']  
  },  

  {  
    id: 317,  
    name: 'Output relay FX5-32ER/ES',  
    brand: 'Mitsubishi',  
    type: 'Output Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-32ER-ES_zmnbvy.jpg',  
    description: 'Module ngõ ra relay cho PLC dòng FX5, phù hợp tải AC/DC và thiết bị công suất nhỏ.',  
    specifications: [  
      { label: 'Số kênh ngõ ra', value: '32 relay outputs' },  
      { label: 'Điện áp ngõ ra', value: 'AC 250 V hoặc DC 30 V' },  
      { label: 'Dòng tải', value: '2 A/kênh (tối đa 8 A mỗi nhóm)' },  
      { label: 'Tuổi thọ cơ học', value: '10 triệu lần' },  
      { label: 'Tuổi thọ điện', value: '100.000 lần (tải định mức)' },  
      { label: 'Kết nối', value: 'Terminal block' }  
    ],  
    features: [  
      'Ngõ ra relay, phù hợp cả tải AC và DC',  
      'Dễ dàng thay thế và bảo trì',  
      'Độ tin cậy cao cho ứng dụng công nghiệp'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=FX5']  
  },  

  {  
    id: 318,  
    name: 'Analog input FX5-4AD-ADP',  
    brand: 'Mitsubishi',  
    type: 'Analog Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD-ADP_nwmot9.webp',  
    description: 'Module mở rộng analog input cho PLC FX5, cho phép đọc tín hiệu điện áp/dòng từ cảm biến và thiết bị đo.',  
    specifications: [  
      { label: 'Số kênh analog input', value: '4 kênh' },  
      { label: 'Dải điện áp', value: '-10 đến +10 V DC' },  
      { label: 'Dải dòng', value: '0–20 mA, 4–20 mA' },  
      { label: 'Độ phân giải', value: '12 bit (4000 bước)' },  
      { label: 'Thời gian chuyển đổi', value: '≈ 1 ms/kênh' },  
      { label: 'Nhiệt độ hoạt động', value: '0–55 °C' }  
    ],  
    features: [  
      'Đọc tín hiệu analog từ nhiều loại cảm biến',  
      'Độ chính xác cao, độ trễ thấp',  
      'Kích thước nhỏ gọn, dễ mở rộng'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=FX5']  
  },  

  {  
    id: 319,  
    name: 'Analog output FX5-4DA-ADP',  
    brand: 'Mitsubishi',  
    type: 'Analog Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4DA-ADP_hdilei.webp',  
    description: 'Module analog output cho PLC FX5, dùng để điều khiển biến tần, servo và các thiết bị cần tín hiệu analog.',  
    specifications: [  
      { label: 'Số kênh analog output', value: '4 kênh' },  
      { label: 'Dải điện áp', value: '-10 đến +10 V DC' },  
      { label: 'Dải dòng', value: '0–20 mA' },  
      { label: 'Độ phân giải', value: '12 bit' },  
      { label: 'Tải tối thiểu', value: '1 kΩ (điện áp), 500 Ω (dòng)' }  
    ],  
    features: [  
      'Xuất tín hiệu analog điều khiển biến tần và servo',  
      'Hỗ trợ nhiều dải điện áp/dòng',  
      'Độ ổn định cao'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=FX5']  
  },  

  {  
    id: 320,  
    name: 'Input module QX42',  
    brand: 'Mitsubishi',  
    type: 'Input Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX42_e3yrtv.avif',  
    description: 'Module ngõ vào số cho PLC dòng Q, thiết kế công nghiệp với độ ổn định cao.',  
    specifications: [  
      { label: 'Số kênh ngõ vào', value: '64 DI' },  
      { label: 'Điện áp ngõ vào', value: 'DC 24 V' },  
      { label: 'Dòng tiêu thụ', value: '≈ 6 mA/kênh' },  
      { label: 'Cách ly', value: 'Photocoupler' },  
      { label: 'Thời gian đáp ứng', value: '≈ 10 ms' }  
    ],  
    features: [  
      'Số lượng ngõ vào lớn',  
      'Cách ly quang chống nhiễu tốt',  
      'Phù hợp điều khiển máy lớn và hệ thống phức tạp'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=Q']  
  },  

  {  
    id: 321,  
    name: 'Input module QX81',  
    brand: 'Mitsubishi',  
    type: 'Input Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX81_gbuoiv.jpg',  
    description: 'Module ngõ vào số dòng Q, thiết kế nhỏ gọn và đáng tin cậy cho ứng dụng công nghiệp.',  
    specifications: [  
      { label: 'Số kênh ngõ vào', value: '32 DI' },  
      { label: 'Điện áp ngõ vào', value: 'DC 24 V' },  
      { label: 'Cách ly', value: 'Photocoupler' },  
      { label: 'Thời gian đáp ứng', value: '≈ 10 ms' }  
    ],  
    features: [  
      'Ngõ vào ổn định, chống nhiễu công nghiệp',  
      'Thiết kế nhỏ gọn',  
      'Tích hợp trong hệ thống PLC Q series'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=Q']  
  },  

  {  
    id: 322,  
    name: 'Input module QX40',  
    brand: 'Mitsubishi',  
    type: 'Input Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX40_vhfsph.jpg',  
    description: 'Module ngõ vào số cho PLC Mitsubishi Q series, hỗ trợ nhiều kênh vào với cách ly quang.',  
    specifications: [  
      { label: 'Số kênh ngõ vào', value: '32 DI' },  
      { label: 'Điện áp ngõ vào', value: 'DC 24 V' },  
      { label: 'Cách ly', value: 'Photocoupler' },  
      { label: 'Thời gian đáp ứng', value: '≈ 10 ms' }  
    ],  
    features: [  
      'Số kênh trung bình, phù hợp hệ thống vừa và nhỏ',  
      'Chống nhiễu tốt nhờ cách ly quang',  
      'Thiết kế công nghiệp bền bỉ'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=Q']  
  },  

  {  
    id: 323,  
    name: 'Output module QY40P',  
    brand: 'Mitsubishi',  
    type: 'Output Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176603/QY40P_ximvkz.jpg',  
    description: 'Module ngõ ra transistor tốc độ cao cho PLC Q series.',  
    specifications: [  
      { label: 'Số kênh ngõ ra', value: '16 transistor outputs' },  
      { label: 'Điện áp ngõ ra', value: 'DC 5–30 V' },  
      { label: 'Dòng tải', value: '0.5 A/kênh' },  
      { label: 'Tốc độ đáp ứng', value: '≈ 0.2 ms' }  
    ],  
    features: [  
      'Ngõ ra transistor tốc độ cao',  
      'Thiết kế chống nhiễu',  
      'Phù hợp điều khiển xung, tốc độ nhanh'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=Q']  
  },  

  {  
    id: 324,  
    name: 'Output module QY41P',  
    brand: 'Mitsubishi',  
    type: 'Output Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY41_zjomnq.jpg',  
    description: 'Module ngõ ra transistor của Mitsubishi Q series, mở rộng I/O cho hệ thống công nghiệp.',  
    specifications: [  
      { label: 'Số kênh ngõ ra', value: '32 transistor outputs' },  
      { label: 'Điện áp ngõ ra', value: 'DC 5–30 V' },  
      { label: 'Dòng tải', value: '0.5 A/kênh' },  
      { label: 'Tốc độ đáp ứng', value: '≈ 0.2 ms' }  
    ],  
    features: [  
      'Số kênh nhiều hơn QY40P',  
      'Độ ổn định cao cho ứng dụng phức tạp',  
      'Thiết kế phù hợp điều khiển máy móc công nghiệp'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=Q']  
  },  

  {  
    id: 325,  
    name: 'Input module RY10R2',  
    brand: 'Mitsubishi',  
    type: 'Relay Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176622/RY10R2_c47av7.jpg',  
    description: 'Module relay cho PLC dòng R, dùng làm ngõ ra relay điều khiển tải AC/DC.',  
    specifications: [  
      { label: 'Số kênh relay', value: '10 relay outputs' },  
      { label: 'Điện áp tải', value: 'AC 250 V / DC 30 V' },  
      { label: 'Dòng tải', value: '2 A/kênh' },  
      { label: 'Tuổi thọ cơ học', value: '10 triệu lần' }  
    ],  
    features: [  
      'Ngõ ra relay cho tải AC/DC',  
      'Độ tin cậy cao',  
      'Thiết kế module dễ thay thế'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=R']  
  },  

  {  
    id: 326,  
    name: 'Input module RY40PT5P',  
    brand: 'Mitsubishi',  
    type: 'Relay Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY40PT5P_dyhmes.jpg',  
    description: 'Module relay RY40PT5P cho PLC Mitsubishi dòng R, điều khiển nhiều kênh tải AC/DC.',  
    specifications: [  
      { label: 'Số kênh relay', value: '40 relay outputs' },  
      { label: 'Điện áp tải', value: 'AC 250 V / DC 30 V' },  
      { label: 'Dòng tải', value: '2 A/kênh' },  
      { label: 'Tuổi thọ cơ học', value: '10 triệu lần' }  
    ],  
    features: [  
      'Số kênh relay nhiều, phù hợp hệ thống lớn',  
      'Đáp ứng tốt tải AC và DC',  
      'Bảo trì dễ dàng'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=R']  
  },  

  {  
    id: 327,  
    name: 'Output module RY41NT2P',  
    brand: 'Mitsubishi',  
    type: 'Relay Module',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY41NT2P_b35atm.jpg',  
    description: 'Module relay RY41NT2P cho PLC Mitsubishi dòng R, hỗ trợ tải AC/DC, thiết kế công nghiệp.',  
    specifications: [  
      { label: 'Số kênh relay', value: '32 relay outputs' },  
      { label: 'Điện áp tải', value: 'AC 250 V / DC 30 V' },  
      { label: 'Dòng tải', value: '2 A/kênh' },  
      { label: 'Tuổi thọ cơ học', value: '10 triệu lần' }  
    ],  
    features: [  
      'Ngõ ra relay tin cậy cho tải AC/DC',  
      'Độ bền cao, hoạt động ổn định trong môi trường công nghiệp',  
      'Thiết kế dễ lắp đặt, thay thế'  
    ],  
    source: ['https://www.mitsubishielectric.co.jp/fa/products/faspec/detail.page?type=R']  
  }, 

  // HMI
  {
    id: 401,
    name: 'HMI Proface GP-4301T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    description: 'HMI màn hình cảm ứng 5.7 inch, QVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '5.7 inch TFT LCD' },
      { label: 'Độ phân giải', value: '320 x 240 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Màn hình cảm ứng đa chức năng, dễ thao tác',
      'Hỗ trợ nhiều giao thức truyền thông PLC: Mitsubishi, Omron, Siemens, v.v.',
      'Chức năng Data Logging và Alarm Management',
      'Hỗ trợ giám sát từ xa qua Ethernet',
      'Thiết kế gọn nhẹ, bền bỉ, thích hợp cho nhiều ứng dụng công nghiệp',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4301TAD'],
  },
  {
    id: 402,
    name: 'HMI Proface GP-4301TM',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4401T_wcxbki.jpg',
    description: 'HMI màn hình cảm ứng 5.7 inch, QVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '5.7 inch TFT LCD' },
      { label: 'Độ phân giải', value: '320 x 240 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Độ sáng cao, dễ quan sát trong môi trường ánh sáng mạnh',
      'Tương thích nhiều dòng PLC và thiết bị công nghiệp',
      'Hỗ trợ truyền thông đa giao thức',
      'Độ bền cao, phù hợp nhà máy sản xuất và ngoài trời',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGM4301TAD'],
  },
  {
    id: 403,
    name: 'HMI Proface GP-4401T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4401T_wcxbki.jpg',
    description: 'HMI màn hình cảm ứng 7.5 inch, VGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '7.5 inch TFT LCD' },
      { label: 'Độ phân giải', value: '640 x 480 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Màn hình kích thước trung bình, hiển thị rõ ràng',
      'Tương thích nhiều hệ thống PLC công nghiệp',
      'Hỗ trợ Ethernet, USB và nhiều cổng Serial',
      'Tích hợp chức năng Alarm, Data Logging, và giám sát từ xa',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4401TAD'],
  },
  {
    id: 404,
    name: 'HMI Proface GP-4501T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4501T_dbkzyx.jpg',
    description: 'HMI màn hình cảm ứng 10.4 inch, VGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '10.4 inch TFT LCD' },
      { label: 'Độ phân giải', value: '640 x 480 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '16 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Màn hình 10.4 inch rộng rãi, dễ giám sát',
      'Hỗ trợ đa giao thức kết nối PLC và thiết bị ngoại vi',
      'Thiết kế bền bỉ, bảo vệ IP65F chống bụi và nước',
      'Chức năng hiển thị cảnh báo, Data Logging, Recipe',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4501TAD'],
  },
  {
    id: 405,
    name: 'HMI Proface GP-4601T',
    brand: 'Proface',
    type: 'HMI',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4601T_qbofqz.jpg',
    description: 'HMI màn hình cảm ứng 12.1 inch, SVGA, analog touch, DC 24V.',
    specifications: [
      { label: 'Kích thước màn hình', value: '12.1 inch TFT LCD' },
      { label: 'Độ phân giải', value: '800 x 600 pixels' },
      { label: 'Loại cảm ứng', value: 'Analog touch' },
      { label: 'Nguồn cấp', value: 'DC 24V' },
      { label: 'Bộ nhớ ứng dụng', value: '32 MB Flash' },
      { label: 'Bộ nhớ dự phòng', value: '320 KB SRAM' },
      { label: 'Cổng giao tiếp', value: 'RS-232C, RS-422/485, USB Type A' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP65F (mặt trước), IP20 (mặt sau)' },
    ],
    features: [
      'Màn hình lớn 12.1 inch, hiển thị chi tiết và sắc nét',
      'Hỗ trợ Ethernet, USB và Serial đa dạng',
      'Chức năng giám sát từ xa và quản lý dữ liệu',
      'Độ bền cao, phù hợp với môi trường công nghiệp',
    ],
    source: ['https://www.proface.com/en/product/spec/PFXGP4601TAD'],
  },
  {  
    id: 406,  
    name: 'HMI Mitsubishi GOT2000',  
    brand: 'Mitsubishi',  
    type: 'HMI',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/GOT200_hpe2cp.jpg',  
    description: 'Dòng màn hình vận hành GOT2000 của Mitsubishi Electric, giao diện hiện đại, tốc độ xử lý cao, hỗ trợ nhiều kết nối với PLC và thiết bị ngoại vi.',  
    specifications: [  
      { label: 'Kích thước màn hình', value: 'Từ 3.8 inch đến 15 inch (TFT LCD, 65,536 màu)' },  
      { label: 'Độ phân giải', value: 'QVGA, VGA, SVGA, XGA tùy model' },  
      { label: 'Bộ nhớ', value: '128 MB ROM, 32 MB RAM (có thể mở rộng)' },  
      { label: 'Cổng giao tiếp', value: 'Ethernet, USB (Host/Device), RS-232, RS-422/485, SD Card' },  
      { label: 'Nguồn cấp', value: 'DC 24 V (±10%)' },  
      { label: 'Nhiệt độ hoạt động', value: '0 °C đến 55 °C' },  
      { label: 'Chuẩn bảo vệ', value: 'IP67F (mặt trước khi lắp đặt đúng cách)' },  
    ],  
    features: [  
      'Màn hình cảm ứng đa điểm, hỗ trợ thao tác zoom, vuốt như smartphone',  
      'Hiển thị đồ họa sắc nét, dễ quan sát tình trạng thiết bị',  
      'Tích hợp sẵn chức năng giám sát từ xa qua VNC server',  
      'Kết nối đa dạng: PLC Mitsubishi, Modbus, OPC UA, và nhiều hãng khác',  
      'Chức năng cảnh báo, lưu trữ dữ liệu và phân tích lỗi trực tiếp',  
      'Thiết kế bền, chống bụi và chống nước chuẩn IP67F mặt trước',  
    ],  
    source: [  
      'https://www.mitsubishielectric.com/fa/products/hmi/got/got2000/index.html'  
    ],  
  },  

  {  
    id: 407,  
    name: 'HMI Mitsubishi GOT1000',  
    brand: 'Mitsubishi',  
    type: 'HMI',  
    price: 'Liên hệ',  
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/GOT1000_hnwxwd.webp',  
    description: 'Dòng màn hình vận hành GOT1000, thiết kế ổn định, đáp ứng nhu cầu giám sát và điều khiển sản xuất với chi phí hợp lý.',  
    specifications: [  
      { label: 'Kích thước màn hình', value: 'Từ 5.7 inch đến 15 inch (TFT LCD hoặc STN LCD)' },  
      { label: 'Độ phân giải', value: 'QVGA, VGA, SVGA tùy model' },  
      { label: 'Bộ nhớ', value: '9 MB chương trình, hỗ trợ thẻ nhớ CF' },  
      { label: 'Cổng giao tiếp', value: 'RS-232, RS-422/485, Ethernet (tùy model)' },  
      { label: 'Nguồn cấp', value: 'DC 24 V (±10%)' },  
      { label: 'Nhiệt độ hoạt động', value: '0 °C đến 50 °C' },  
      { label: 'Chuẩn bảo vệ', value: 'IP65F mặt trước' },  
    ],  
    features: [  
      'Màn hình cảm ứng dễ sử dụng, hỗ trợ đa ngôn ngữ',  
      'Tương thích với PLC Mitsubishi và nhiều thiết bị công nghiệp',  
      'Tích hợp chức năng hiển thị cảnh báo và lịch sử lỗi',  
      'Hỗ trợ kết nối với nhiều loại mạng công nghiệp',  
      'Giải pháp HMI chi phí thấp nhưng ổn định và bền bỉ',  
    ],  
    source: [  
      'https://www.mitsubishielectric.com/fa/products/hmi/got/got1000/index.html'  
    ],  
  }, 
  // Cảm biến Keyence
  {
    id:501,
    name: 'Cảm biến sợi quang Keyence FS-N40',
    brand: 'Keyence',
    type: 'Sensor – Fiber Optic',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FS-N40_nz2zl6.jpg',
    description: 'Cảm biến quang học sợi quang, phản hồi nhanh, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: 'Tối đa 100 m' },
      { label: 'Thời gian phản hồi', value: '23 µs – 500 µs' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN, PNP' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phản hồi cực nhanh',
      'Độ chính xác cao trong công nghiệp',
    ],
    source: ['https://www.keyence.com/products/sensor/fiber-optic/fs-n40/specs/'],
  },
  {
    id: 502,
    name: 'Cảm biến sợi quang Keyence FS-V30',
    brand: 'Keyence',
    type: 'Sensor – Fiber Amplifier',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/FS-V30_hqj3cc.jpg',
    description: 'Bộ khuếch đại sợi quang, nhiều chế độ hoạt động, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: 'Tối đa 10 m' },
      { label: 'Thời gian phản hồi', value: '193 µs – 16.7 ms' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Dễ lắp đặt',
      'Độ bền cao, chính xác',
    ],
    source: ['https://www.keyence.ca/products/sensor/fiber-optic/fs-v30/models/'],
  },
  {
    id: 503,
    name: 'Cảm biến quang 100 mm Keyence LR-ZB100CP',
    brand: 'Keyence',
    type: 'Sensor – Laser',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-ZB100CP_w1r3it.jpg',
    description: 'Cảm biến laser CMOS tích hợp, PNP output, DC 12–24V.',
    specifications: [
      { label: 'Phạm vi phát hiện', value: '100 mm' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP' },
      { label: 'Tiêu chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Độ chính xác cao',
      'Phát hiện vật thể nhỏ',
    ],
    source: ['https://www.keyence.com/products/sensor/photoelectric/lr-z/models/'],
  },
  {
    id: 504,
    name: 'Cảm biến quang Omron E3Z-D61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Diffuse',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3Z-D61_ikgmfn.jpg',
    description: 'Cảm biến quang khuếch tán, phát hiện vật thể gần, DC 12–24V.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Khuếch tán' },
      { label: 'Khoảng cách cảm biến', value: '100 mm' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Chống nước và bụi',
      'Chế độ Light-ON/Dark-ON',
      'Phản hồi nhanh',
    ],
    source: ['https://www.omron-ap.com/products/family/1231/'],
  },
  {
    id: 505,
    name: 'Cảm biến quang Omron E3Z-R61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Retroreflective',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-R61_igscnb.webp',
    description: 'Cảm biến phản xạ với nền, DC 12–24V, NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Phản xạ' },
      { label: 'Khoảng cách cảm biến', value: '100 mm – 4 m (với phản xạ tấm gương)' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Phát hiện vật có nền sáng/tối khác nhau',
      'Phản hồi nhanh và ổn định',
    ],
    source: ['https://www.omron-ap.com/products/family/1232/'],
  },
  {
    id: 506,
    name: 'Cảm biến quang Omron E3Z-T61',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Through-beam',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-T61_cdcy3k.webp',
    description: 'Cảm biến xuyên qua, DC 12–24V, PNP/NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Xuyên qua' },
      { label: 'Khoảng cách cảm biến', value: '0–2 m' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP/NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Phát hiện vật chắn trực tiếp giữa emitter và receiver',
      'Phản hồi nhanh, ổn định',
    ],
    source: ['https://www.omron-ap.com/products/family/1233/'],
  },
  {
    id: 507,
    name: 'Cảm biến quang Omron E3Z-D82',
    brand: 'Omron',
    type: 'Photoelectric Sensor – Diffuse',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-D82_plxva5.avif',
    description: 'Cảm biến khuếch tán, DC 12–24V, PNP/NPN output.',
    specifications: [
      { label: 'Phương pháp cảm biến', value: 'Khuếch tán' },
      { label: 'Khoảng cách cảm biến', value: '0–2 m' },
      { label: 'Nguồn cấp', value: 'DC 12–24V' },
      { label: 'Đầu ra', value: 'PNP/NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +55°C' },
      { label: 'Kích thước', value: '20 x 10.8 x 33.2 mm' },
    ],
    features: [
      'Độ ổn định cao trong công nghiệp',
      'Phản hồi nhanh và chính xác',
    ],
    source: ['https://www.omron-ap.com/products/family/1234/'],
  },
  {
    id: 508,
    name: 'Cảm biến tiệm cận Omron E2B-S08KS02-WP-C1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2B-S08KS02-WP-C1_wbo1lp.webp',
    description: 'Cảm biến tiệm cận cảm ứng kim loại, DC 10–30V, NPN output.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '8 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1235/'],
  },
  {
    id: 509,
    name: 'Cảm biến tiệm cận Omron E2E-X10MY1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X10MY1_x2mozj.jpg',
    description: 'Cảm biến tiệm cận, DC 10–30V, NPN output, khoảng cách 10mm.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '10 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1236/'],
  },
  {
    id: 510,
    name: 'Cảm biến tiệm cận Omron E2E-X14MD1',
    brand: 'Omron',
    type: 'Proximity Sensor – Inductive',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E2E-X14MD1_w7wrsx.webp',
    description: 'Cảm biến tiệm cận, DC 10–30V, NPN output, khoảng cách 14mm.',
    specifications: [
      { label: 'Khoảng cách cảm biến', value: '14 mm' },
      { label: 'Nguồn cấp', value: 'DC 10–30V' },
      { label: 'Đầu ra', value: 'NPN' },
      { label: 'Cấp bảo vệ', value: 'IP67' },
      { label: 'Nhiệt độ hoạt động', value: '-25°C đến +70°C' },
      { label: 'Vật liệu vỏ', value: 'Thép không gỉ' },
    ],
    features: [
      'Chống bụi và nước',
      'Kích thước nhỏ gọn',
      'Độ bền cao',
    ],
    source: ['https://www.omron-ap.com/products/family/1237/'],
  },
  {
    id: 511,
    name: 'Cảm biến đo khoảng cách laser Keyence GV-H45',
    brand: 'Keyence',
    type: 'Cảm biến laser',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/GV-H45_diqjnr.jpg',
    description: 'Cảm biến khoảng cách laser Keyence GV-H45 với đầu đo nhỏ gọn, cho phép đo chính xác trên nhiều bề mặt khác nhau.',
    specifications: [
      { label: 'Khoảng cách đo', value: '30 đến 500 mm' },
      { label: 'Độ chính xác', value: '±0.1 mm' },
      { label: 'Tín hiệu ra', value: 'NPN/PNP switching' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Đo chính xác trên nhiều loại bề mặt',
      'Đầu đo nhỏ gọn, dễ dàng lắp đặt',
      'Khả năng chống nước và bụi cao',
    ],
    source: [
      'https://www.keyence.com/products/sensor/laser-sensor/gv/models/gv-h45/index.jsp'
    ],
  },
  {
    id: 512,
    name: 'Bộ điều khiển Keyence GV-21P',
    brand: 'Keyence',
    type: 'Bộ điều khiển cảm biến',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/GV-21P_dgrn6g.webp',
    description: 'Bộ điều khiển GV-21P dùng cho cảm biến laser dòng GV, hỗ trợ cài đặt linh hoạt và hiển thị trực quan.',
    specifications: [
      { label: 'Màn hình hiển thị', value: 'LCD 4 số + thanh bar' },
      { label: 'Tín hiệu vào/ra', value: 'NPN/PNP, analog voltage' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Chức năng', value: 'Hiệu chỉnh, giám sát, ngưỡng cảnh báo' },
    ],
    features: [
      'Dễ dàng cài đặt và vận hành',
      'Hiển thị kết quả đo trực quan',
      'Hỗ trợ nhiều chế độ hoạt động',
    ],
    source: [
      'https://www.keyence.com/products/sensor/laser-sensor/gv/models/gv-21p/index.jsp'
    ],
  },
  {
    id: 513,
    name: 'Camera cảm biến màu Keyence IV2-G30',
    brand: 'Keyence',
    type: 'Camera cảm biến',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/IV2-G30_mrrlg6.jpg',
    description: 'Camera cảm biến màu IV2-G30 với khả năng xử lý hình ảnh mạnh mẽ, nhận diện màu sắc và hình dạng chính xác.',
    specifications: [
      { label: 'Độ phân giải', value: '640 × 480 pixels (VGA)' },
      { label: 'Khoảng cách phát hiện', value: '25 mm đến 4000 mm (tùy ống kính)' },
      { label: 'Tốc độ xử lý', value: '50 fps' },
      { label: 'Kết nối', value: 'Ethernet, I/O, RS-232C' },
      { label: 'Nguồn cấp', value: '24 VDC' },
    ],
    features: [
      'Nhận diện màu sắc, hình dạng và vị trí',
      'Xử lý nhanh với nhiều điều kiện ánh sáng',
      'Dễ dàng cấu hình qua phần mềm',
    ],
    source: [
      'https://www.keyence.com/products/vision/vision-sensor/iv2/models/iv2-g30/index.jsp'
    ],
  },
  {
    id: 514,
    name: 'Bộ điều khiển màn hình cảm ứng Keyence IV2-CP50',
    brand: 'Keyence',
    type: 'Bộ điều khiển camera cảm biến',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/IV2-CP50_tzilot.jpg',
    description: 'Bộ điều khiển màn hình cảm ứng IV2-CP50 cho camera cảm biến IV2, hỗ trợ cấu hình, giám sát và lưu trữ dữ liệu.',
    specifications: [
      { label: 'Màn hình', value: 'LCD 5 inch cảm ứng' },
      { label: 'Kết nối', value: 'Ethernet, USB' },
      { label: 'Bộ nhớ trong', value: 'Hỗ trợ lưu nhiều chương trình kiểm tra' },
      { label: 'Nguồn cấp', value: '24 VDC' },
    ],
    features: [
      'Điều khiển trực tiếp camera cảm biến',
      'Màn hình cảm ứng dễ sử dụng',
      'Hỗ trợ giám sát và lưu dữ liệu',
    ],
    source: [
      'https://www.keyence.com/products/vision/vision-sensor/iv2/models/iv2-cp50/index.jsp'
    ],
  },
  {
    id: 515,
    name: 'Cảm biến lưu lượng Keyence FD-Q10C',
    brand: 'Keyence',
    type: 'Cảm biến lưu lượng',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FD-Q10C_qokbjb.png',
    description: 'Cảm biến lưu lượng Keyence FD-Q10C, thiết kế kẹp ngoài đường ống, không tiếp xúc trực tiếp với chất lỏng.',
    specifications: [
      { label: 'Đường kính ống áp dụng', value: '10 – 25 mm' },
      { label: 'Nguyên lý đo', value: 'Siêu âm clamp-on' },
      { label: 'Dải đo', value: '0.25 – 100 L/min' },
      { label: 'Nguồn cấp', value: '24 VDC' },
      { label: 'Chuẩn bảo vệ', value: 'IP64' },
    ],
    features: [
      'Không cần cắt ống, lắp đặt nhanh chóng',
      'Đo chính xác với nhiều loại chất lỏng',
      'Độ bền cao, chống bụi và nước',
    ],
    source: [
      'https://www.keyence.com/products/flow/flow-sensor/fd-q/models/fd-q10c/index.jsp'
    ],
  },
  {
    id: 516,
    name: 'Cảm biến lưu lượng Keyence FD-Q20C',
    brand: 'Keyence',
    type: 'Cảm biến lưu lượng',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FD-Q20C_ifk5aq.jpg',
    description: 'Cảm biến lưu lượng Keyence FD-Q20C, thiết kế kẹp ngoài đường ống lớn, đo không tiếp xúc và dễ dàng bảo trì.',
    specifications: [
      { label: 'Đường kính ống áp dụng', value: '20 – 60 mm' },
      { label: 'Nguyên lý đo', value: 'Siêu âm clamp-on' },
      { label: 'Dải đo', value: '0.5 – 200 L/min' },
      { label: 'Nguồn cấp', value: '24 VDC' },
      { label: 'Chuẩn bảo vệ', value: 'IP64' },
    ],
    features: [
      'Đo không tiếp xúc với chất lỏng',
      'Hỗ trợ nhiều loại ống khác nhau',
      'Bảo trì dễ dàng, độ bền cao',
    ],
    source: [
      'https://www.keyence.com/products/flow/flow-sensor/fd-q/models/fd-q20c/index.jsp'
    ],
  },
  {
    id: 517,
    name: 'Cảm biến nhận diện màu Keyence LR-W500',
    brand: 'Keyence',
    type: 'Cảm biến màu',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-W500_lxqzdd.avif',
    description: 'Cảm biến nhận diện màu LR-W500 với công nghệ LED trắng đa quang phổ, cho khả năng phân biệt màu chính xác.',
    specifications: [
      { label: 'Khoảng cách phát hiện', value: '10 – 65 mm' },
      { label: 'Nguồn sáng', value: 'LED trắng đa quang phổ' },
      { label: 'Tín hiệu ra', value: 'NPN/PNP switching' },
      { label: 'Nguồn cấp', value: '12 – 24 VDC' },
      { label: 'Chuẩn bảo vệ', value: 'IP65/67' },
    ],
    features: [
      'Nhận diện màu chính xác ngay cả với bề mặt khó',
      'Khả năng chống nước và bụi vượt trội',
      'Dễ dàng cấu hình và sử dụng',
    ],
    source: [
      'https://www.keyence.com/products/color-sensor/lr-w/models/lr-w500/index.jsp'
    ],
  },
  {
    id: 518,
    name: 'Cảm biến quang Omron E3FA-TN11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FA-TN11_nk6vmo.webp',
    description: 'Cảm biến quang Omron E3FA-TN11, dạng thu phát, khoảng cách phát hiện dài, thiết kế nhỏ gọn, dễ dàng lắp đặt.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Thu phát (Through-beam)' },
      { label: 'Khoảng cách phát hiện', value: '15 m' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'NPN' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Thiết kế vỏ nhỏ gọn, dễ lắp đặt trong không gian hạn chế',
      'Khả năng chống nước, chống bụi cao (IP67)',
      'Phát hiện chính xác vật thể ở khoảng cách xa',
      'Độ bền cao, phù hợp môi trường công nghiệp khắc nghiệt',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fa'
    ],
  },
  {
    id: 519,
    name: 'Cảm biến quang Omron E3FA-TP11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FA-TP11_v9pxh1.jpg',
    description: 'Cảm biến quang Omron E3FA-TP11, dạng phản xạ gương (Retro-reflective), hoạt động ổn định với vật thể bóng hoặc mờ.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Phản xạ gương (Retro-reflective)' },
      { label: 'Khoảng cách phát hiện', value: '4 m (với gương phản xạ E39-R1)' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'PNP' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phù hợp phát hiện vật thể trong nhiều điều kiện ánh sáng',
      'Thiết kế chắc chắn, tuổi thọ cao',
      'Chịu rung và sốc tốt trong nhà máy',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fa'
    ],
  },
  {
    id: 520,
    name: 'Cảm biến quang Omron E3FA-RP11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FA-RP11_cazcmd.jpg',
    description: 'Cảm biến quang Omron E3FA-RP11, loại phản xạ khuếch tán, phù hợp phát hiện vật thể ở khoảng cách ngắn và trung bình.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Phản xạ khuếch tán (Diffuse-reflective)' },
      { label: 'Khoảng cách phát hiện', value: '1 m' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'PNP' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phát hiện vật thể mà không cần gương phản xạ',
      'Hoạt động ổn định với nhiều loại bề mặt khác nhau',
      'Độ tin cậy cao trong môi trường nhiều bụi và ẩm ướt',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fa'
    ],
  },
  {
    id: 521,
    name: 'Cảm biến quang Omron E3FA-DP11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E3FA-DP11_d12hpr.jpg',
    description: 'Cảm biến quang Omron E3FA-DP11, loại phát hiện khuếch tán dài, dễ dàng lắp đặt trong nhiều ứng dụng tự động hóa.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Khuếch tán (Diffuse-reflective)' },
      { label: 'Khoảng cách phát hiện', value: '0.2 – 2 m' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'PNP' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Khả năng phát hiện vật thể ở khoảng cách dài mà không cần gương',
      'Thiết kế công nghiệp chắc chắn',
      'Dễ lắp đặt và căn chỉnh',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fa'
    ],
  },
  {
    id: 522,
    name: 'Cảm biến quang Omron E3FB-TN11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FB-TN11_mralx6.jpg',
    description: 'Cảm biến quang Omron E3FB-TN11, dòng E3FB với thiết kế hình trụ, độ bền cao, dễ lắp đặt.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Thu phát (Through-beam)' },
      { label: 'Khoảng cách phát hiện', value: '20 m' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'NPN' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Khoảng cách phát hiện dài, chính xác',
      'Vỏ hình trụ, phù hợp với nhiều dạng lắp đặt',
      'Chịu môi trường công nghiệp khắc nghiệt',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fb'
    ],
  },
  {
    id: 523,
    name: 'Cảm biến quang Omron E3FB-TP11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FB-TP11_biwb0z.jpg',
    description: 'Cảm biến quang Omron E3FB-TP11, loại phản xạ gương hình trụ, phù hợp nhiều ứng dụng công nghiệp.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Phản xạ gương (Retro-reflective)' },
      { label: 'Khoảng cách phát hiện', value: '6 m (với gương phản xạ E39-R1)' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'PNP' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phát hiện vật thể hiệu quả với khoảng cách trung bình',
      'Vỏ trụ kim loại, chắc chắn',
      'Hoạt động ổn định trong môi trường khắc nghiệt',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fb'
    ],
  },
  {
    id: 524,
    name: 'Cảm biến quang Omron E3FB-DP11',
    brand: 'Omron',
    type: 'Cảm biến quang',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FB-DP11_msvzfu.jpg',
    description: 'Cảm biến quang Omron E3FB-DP11, loại khuếch tán hình trụ, phát hiện vật thể chính xác trong phạm vi gần.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Khuếch tán (Diffuse-reflective)' },
      { label: 'Khoảng cách phát hiện', value: '0.1 – 1 m' },
      { label: 'Nguồn cấp', value: '12–24 VDC' },
      { label: 'Ngõ ra', value: 'PNP' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Phát hiện vật thể mà không cần gương phản xạ',
      'Thiết kế vỏ trụ chắc chắn, bền bỉ',
      'Phù hợp môi trường bụi bẩn, rung động',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e3fb'
    ],
  },
  {
    id: 525,
    name: 'Cảm biến tiệm cận Omron E2B-M18KN16-WP-C1',
    brand: 'Omron',
    type: 'Cảm biến tiệm cận',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2B-M18KN16-WP-C1_rqcuga.jpg',
    description: 'Cảm biến tiệm cận Omron E2B-M18KN16-WP-C1, loại hình trụ M18, khoảng cách phát hiện xa, độ bền cao, chống nước tốt.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Cảm ứng từ (Inductive)' },
      { label: 'Khoảng cách phát hiện', value: '16 mm' },
      { label: 'Nguồn cấp', value: '10–30 VDC' },
      { label: 'Ngõ ra', value: 'NPN, NO' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Khoảng cách phát hiện lớn, phù hợp nhiều ứng dụng',
      'Thiết kế ren M18 dễ dàng lắp đặt',
      'Chống nước, chống dầu tốt',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e2b'
    ],
  },
  {
    id: 526,
    name: 'Cảm biến tiệm cận Omron E2E-X5MY1',
    brand: 'Omron',
    type: 'Cảm biến tiệm cận',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2E-X5MY1_brsubz.jpg',
    description: 'Cảm biến tiệm cận Omron E2E-X5MY1, loại M12, khoảng cách phát hiện trung bình, hiệu suất ổn định.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Cảm ứng từ (Inductive)' },
      { label: 'Khoảng cách phát hiện', value: '5 mm' },
      { label: 'Nguồn cấp', value: '10–30 VDC' },
      { label: 'Ngõ ra', value: 'PNP, NO' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Thiết kế nhỏ gọn, phù hợp không gian hạn chế',
      'Độ tin cậy cao trong môi trường công nghiệp',
      'Tuổi thọ dài, ít cần bảo trì',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e2e'
    ],
  },
  {
    id: 527,
    name: 'Cảm biến tiệm cận Omron E2E-X3D1-U',
    brand: 'Omron',
    type: 'Cảm biến tiệm cận',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X3D1-U_sj1drg.jpg',
    description: 'Cảm biến tiệm cận Omron E2E-X3D1-U, loại M8, khoảng cách phát hiện ngắn, phù hợp cho các ứng dụng chính xác.',
    specifications: [
      { label: 'Kiểu phát hiện', value: 'Cảm ứng từ (Inductive)' },
      { label: 'Khoảng cách phát hiện', value: '3 mm' },
      { label: 'Nguồn cấp', value: '10–30 VDC' },
      { label: 'Ngõ ra', value: 'NPN, NO' },
      { label: 'Chuẩn bảo vệ', value: 'IP67' },
    ],
    features: [
      'Thiết kế nhỏ gọn, dễ dàng lắp đặt',
      'Phát hiện vật thể kim loại chính xác ở khoảng cách ngắn',
      'Hoạt động ổn định trong môi trường nhiều rung động',
    ],
    source: [
      'https://industrial.omron.eu/en/products/e2e'
    ],
  },

    // Module truyền thông
  {
    id: 601,
    name: 'RS-485 FX3U-485-BD',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-485-BD_qpywwp.jpg',
    description: 'Board mở rộng RS-485 cho PLC Mitsubishi FX3U, cho phép truyền thông theo chuẩn RS-485/422.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'RS-485/RS-422' },
      { label: 'Tốc độ truyền', value: '2.4 kbps – 115.2 kbps' },
      { label: 'Số cổng', value: '1 port' },
      { label: 'Khoảng cách truyền', value: 'Tối đa 1.2 km (tốc độ thấp)' },
      { label: 'Gắn trực tiếp', value: 'Board cắm trên PLC FX3U' }
    ],
    features: [
      'Cho phép PLC FX3U kết nối mạng truyền thông RS-485/422',
      'Hỗ trợ giao thức Modbus RTU Master/Slave',
      'Kết nối nhiều thiết bị qua cấu hình multi-drop',
      'Cài đặt đơn giản, tiết kiệm không gian do dạng board gắn'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx'
    ]
  },
  {
    id: 602,
    name: 'RS-485 module FX5-485ADP',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-485ADP_hkdzwz.webp',
    description: 'Module RS-485 gắn bên hông PLC Mitsubishi FX5, hỗ trợ truyền thông nối tiếp tốc độ cao.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'RS-485/RS-422' },
      { label: 'Tốc độ truyền', value: '2.4 kbps – 115.2 kbps' },
      { label: 'Số cổng', value: '1 port' },
      { label: 'Giao thức hỗ trợ', value: 'Modbus RTU Master/Slave' },
      { label: 'Kết nối', value: 'Gắn bên hông CPU FX5' }
    ],
    features: [
      'Cho phép PLC FX5 kết nối thiết bị ngoại vi qua RS-485',
      'Hỗ trợ cấu hình multi-drop tối đa 32 thiết bị',
      'Tốc độ truyền ổn định, hỗ trợ cáp dài',
      'Lắp đặt nhanh, tiết kiệm không gian'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx5'
    ]
  },
  {
    id: 603,
    name: 'RS-232 module FX3U-232-BD',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-232-BD_sxsc8k.webp',
    description: 'Board mở rộng RS-232 cho PLC FX3U, phục vụ kết nối với thiết bị RS-232.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'RS-232C' },
      { label: 'Tốc độ truyền', value: '2.4 kbps – 19.2 kbps' },
      { label: 'Số cổng', value: '1 port (D-Sub 9 pin)' },
      { label: 'Khoảng cách truyền', value: 'Tối đa 15 m' },
      { label: 'Lắp đặt', value: 'Board gắn trực tiếp trên PLC FX3U' }
    ],
    features: [
      'Kết nối PLC FX3U với HMI, barcode scanner, hoặc máy in',
      'Đơn giản hóa truyền thông điểm-điểm',
      'Cài đặt và lập trình dễ dàng qua GX Works',
      'Thiết kế nhỏ gọn, dạng board gắn'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx'
    ]
  },
  {
    id: 604,
    name: 'RS-232 module FX5-232ADP',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-232ADP_sof6ip.webp',
    description: 'Module RS-232 dành cho PLC FX5, hỗ trợ kết nối với thiết bị RS-232 chuẩn công nghiệp.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'RS-232C' },
      { label: 'Tốc độ truyền', value: '2.4 kbps – 115.2 kbps' },
      { label: 'Số cổng', value: '1 port (D-Sub 9 pin)' },
      { label: 'Khoảng cách truyền', value: 'Tối đa 15 m' },
      { label: 'Gắn kết', value: 'Module ADP gắn bên hông PLC FX5' }
    ],
    features: [
      'Kết nối PLC FX5 với HMI, máy tính, thiết bị RS-232',
      'Hỗ trợ truyền dữ liệu tốc độ cao',
      'Thiết kế module ADP dễ dàng gắn vào PLC',
      'Tích hợp chức năng truyền thông Modbus RTU'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx5'
    ]
  },
  {
    id: 605,
    name: 'Ethernet Communication module FX3U-ENET-ADP',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-ENET-ADP_ju1gb4.jpg',
    description: 'Module Ethernet ADP cho PLC FX3U, cho phép giao tiếp qua mạng LAN.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'Ethernet (10BASE-T/100BASE-TX)' },
      { label: 'Số cổng', value: '1 port RJ45' },
      { label: 'Tốc độ truyền', value: '10/100 Mbps' },
      { label: 'Ứng dụng', value: 'Kết nối SCADA, HMI, PC, hệ thống mạng' },
      { label: 'Gắn kết', value: 'Module ADP bên hông CPU FX3U' }
    ],
    features: [
      'Cho phép PLC FX3U kết nối mạng LAN',
      'Hỗ trợ giao thức MC Protocol, Modbus TCP/IP',
      'Kết nối giám sát dữ liệu từ xa qua SCADA',
      'Thiết kế gọn nhẹ, dễ dàng lắp đặt'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx'
    ]
  },
  {
    id: 606,
    name: 'Ethernet Communication module FX5-ENET',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176558/FX5-ENET_ljuer8.webp',
    description: 'Module Ethernet cho PLC FX5, hỗ trợ đa dạng giao thức mạng công nghiệp.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'Ethernet (10BASE-T/100BASE-TX)' },
      { label: 'Số cổng', value: '1 port RJ45' },
      { label: 'Tốc độ truyền', value: '10/100 Mbps' },
      { label: 'Giao thức hỗ trợ', value: 'MC Protocol, Modbus TCP/IP, SLMP' },
      { label: 'Nguồn cấp', value: 'DC 24V từ PLC' }
    ],
    features: [
      'Kết nối PLC FX5 với mạng LAN/SCADA/HMI',
      'Hỗ trợ truyền thông Modbus TCP/IP',
      'Cho phép giám sát dữ liệu từ xa qua Ethernet',
      'Tốc độ cao, ổn định, dễ triển khai'
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plc_fx5'
    ]
  },
  {
    id: 607,
    name: 'Ethernet communication module QJ71C24N-R2',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QJ71C24N-R2_mhrdol.jpg',
    description: 'Module truyền thông RS-232C/RS-422/RS-485 QJ71C24N-R2 dùng cho PLC Mitsubishi dòng Q, hỗ trợ nhiều chuẩn giao tiếp nối tiếp.',
    specifications: [
      { label: 'Loại giao tiếp', value: 'RS-232C, RS-422, RS-485' },
      { label: 'Tốc độ truyền', value: '0.3 kbps đến 115.2 kbps' },
      { label: 'Số kênh', value: '2 kênh độc lập' },
      { label: 'Khoảng cách truyền', value: 'Tối đa 1.2 km (RS-485)' },
      { label: 'Nguồn cấp', value: 'Lấy từ PLC base unit' },
      { label: 'Kích thước', value: '98 × 27.4 × 90 mm' },
    ],
    features: [
      'Hỗ trợ nhiều chuẩn truyền thông nối tiếp (RS-232C, RS-422, RS-485)',
      'Có thể kết nối thiết bị ngoại vi như HMI, biến tần, cân điện tử',
      'Cấu hình linh hoạt, hỗ trợ nhiều giao thức truyền thông',
      'Độ tin cậy cao, hoạt động ổn định trong môi trường công nghiệp',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/serialcom/qj71c24n-r2'
    ]
  },
  {
    id: 608,
    name: 'Ethernet communication module QJ71E71-100',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QJ71E71-100_xqbgeo.jpg',
    description: 'QJ71E71-100 là module Ethernet 10/100 Mbps cho PLC Mitsubishi Q Series, hỗ trợ kết nối mạng TCP/IP và MC Protocol.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'Ethernet (IEEE802.3, 10BASE-T/100BASE-TX)' },
      { label: 'Tốc độ truyền', value: '10/100 Mbps' },
      { label: 'Số cổng', value: '1 cổng RJ45' },
      { label: 'Giao thức hỗ trợ', value: 'MC Protocol, TCP/UDP, MELSOFT connection' },
      { label: 'Số kết nối đồng thời', value: 'Tối đa 16 kết nối' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
    ],
    features: [
      'Kết nối mạng Ethernet tốc độ cao',
      'Hỗ trợ truy cập từ xa qua TCP/IP',
      'Cho phép giám sát và lập trình PLC qua Ethernet',
      'Được sử dụng rộng rãi trong các ứng dụng công nghiệp lớn',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/ethernet/qj71e71-100'
    ]
  },
  {
    id: 609,
    name: 'Ethernet communication module RJ71EN71',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71EN71_rdaz11.jpg',
    description: 'RJ71EN71 là module Ethernet cho dòng PLC Mitsubishi iQ-R, hỗ trợ giao tiếp tốc độ cao và nhiều giao thức công nghiệp.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'Ethernet (IEEE802.3, 10/100/1000BASE-T)' },
      { label: 'Tốc độ truyền', value: '10/100/1000 Mbps' },
      { label: 'Số cổng', value: '1 cổng RJ45' },
      { label: 'Giao thức hỗ trợ', value: 'MC Protocol, Modbus/TCP, SLMP, MELSOFT' },
      { label: 'Kết nối đồng thời', value: 'Tối đa 256 kết nối' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
    ],
    features: [
      'Hỗ trợ Ethernet Gigabit cho tốc độ truyền nhanh',
      'Đa dạng giao thức: MC Protocol, Modbus/TCP, SLMP',
      'Hỗ trợ tối đa 256 kết nối đồng thời',
      'Phù hợp cho các hệ thống tự động hóa quy mô lớn',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/ethernet/rj71en71'
    ]
  },
  {
    id: 610,
    name: 'CC-Link module QJ61BT11N',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QJ61BT11N_ubrdop.webp',
    description: 'QJ61BT11N là module mạng CC-Link cho PLC Mitsubishi dòng Q, dùng để kết nối các thiết bị trường theo chuẩn CC-Link.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'CC-Link Ver.1.10/2.00' },
      { label: 'Tốc độ truyền', value: '156 kbps đến 10 Mbps' },
      { label: 'Số trạm kết nối', value: 'Tối đa 64 trạm' },
      { label: 'Chế độ hoạt động', value: 'Master/Local station' },
      { label: 'Khoảng cách truyền', value: 'Tối đa 1200 m (156 kbps)' },
      { label: 'Nguồn cấp', value: 'Lấy từ PLC base unit' },
    ],
    features: [
      'Hỗ trợ mạng CC-Link tốc độ cao',
      'Kết nối tối đa 64 thiết bị trên cùng mạng',
      'Chế độ hoạt động linh hoạt: Master hoặc Local',
      'Ứng dụng rộng rãi trong hệ thống sản xuất tự động',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/cclink/qj61bt11n'
    ]
  },
  {
    id: 611,
    name: 'CC-Link IE Field RJ71GF11-T2',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71GF11-T2_fgxygd.jpg',
    description: 'RJ71GF11-T2 là module CC-Link IE Field cho PLC iQ-R, hỗ trợ truyền thông tốc độ cao dựa trên Ethernet công nghiệp.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'CC-Link IE Field' },
      { label: 'Tốc độ truyền', value: '1 Gbps' },
      { label: 'Số cổng', value: '2 cổng RJ45 (Switch tích hợp)' },
      { label: 'Số node kết nối', value: 'Tối đa 254 node' },
      { label: 'Khoảng cách truyền', value: '100 m (mỗi đoạn, có thể mở rộng bằng switch)' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
    ],
    features: [
      'Kết nối tốc độ cao lên đến 1 Gbps',
      'Switch tích hợp 2 cổng, dễ dàng kết nối dạng line hoặc star',
      'Hỗ trợ mạng quy mô lớn với tối đa 254 node',
      'Đáp ứng cho các ứng dụng yêu cầu thời gian thực',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/cclink-ie/rj71gf11-t2'
    ]
  },
  {
    id: 612,
    name: 'CC-Link IE Controller RJ71GP21-SX',
    brand: 'Mitsubishi',
    type: 'Communication Module',
    price: 'Liên hệ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71GP21-SX_logyls.jpg',
    description: 'RJ71GP21-SX là module CC-Link IE Controller cho PLC iQ-R, được thiết kế cho truyền thông tốc độ cao và đồng bộ dữ liệu trong hệ thống lớn.',
    specifications: [
      { label: 'Chuẩn giao tiếp', value: 'CC-Link IE Controller Network' },
      { label: 'Tốc độ truyền', value: '1 Gbps' },
      { label: 'Số cổng', value: '2 cổng RJ45 (Switch tích hợp)' },
      { label: 'Số bộ điều khiển kết nối', value: 'Tối đa 120 bộ điều khiển' },
      { label: 'Khoảng cách truyền', value: '100 m mỗi đoạn (có thể mở rộng qua switch quang)' },
      { label: 'Nguồn cấp', value: 'Từ PLC base unit' },
    ],
    features: [
      'Đáp ứng nhu cầu truyền dữ liệu lớn và đồng bộ thời gian thực',
      'Switch Ethernet 2 cổng tích hợp, hỗ trợ cấu trúc mạng linh hoạt',
      'Tốc độ cao 1 Gbps, phù hợp cho hệ thống tự động hóa phức tạp',
      'Tích hợp nhiều tính năng chuẩn đoán và giám sát mạng',
    ],
    source: [
      'https://www.mitsubishielectric.com/fa/products/cnt/plcnet/cclink-ie/rj71gp21-sx'
    ]
  }

];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === Number(id));

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  if (!product) return <h2 style={{ padding: 20 }}>Không tìm thấy sản phẩm</h2>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) {
      alert('Vui lòng nhập tên và nhận xét.');
      return;
    }
    setReviews(prev => [
      ...prev,
      {
        id: Date.now(),
        ...reviewForm,
        rating: Number(reviewForm.rating),
      }
    ]);
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  // Lấy danh sách sản phẩm tương tự (cùng loại, khác id)
  const similarProducts = allProducts.filter(p => p.type === product.type && p.id !== product.id);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: 100,
          left: 10,
          backgroundColor: '#007bff',       // màu xanh nổi bật
          color: 'white',
          fontWeight: '600',
          fontSize: '16px',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex: 9999,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#0056b3';  // màu xanh đậm hơn khi hover
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 86, 179, 0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.3)';
        }}
      >
        ⇦
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ flex: '1 1 400px', maxWidth: 400, borderRadius: 12, boxShadow: '0 6px 15px rgba(0,0,0,0.15)', objectFit: 'cover' }}
        />

        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ marginBottom: 15 }}>{product.name}</h1>
          <p><strong>Hãng:</strong> {product.brand}</p>
          <p><strong>Loại:</strong> {product.type}</p>
          <p><strong>Giá:</strong> {product.price}</p>
          <p style={{ lineHeight: 1.6, fontSize: 15, color: '#555', marginTop: 15 }}>{product.description}</p>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Thông số kỹ thuật</h3>
          <ul>
            {product.specifications.map((spec, idx) => (
              <li key={idx}><strong>{spec.label}:</strong> {spec.value}</li>
            ))}
          </ul>

          <h3 style={{ marginTop: 30, marginBottom: 10 }}>Tính năng nổi bật</h3>
          <ul>
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <button
            style={{
              marginTop: 30,
              padding: '12px 30px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(40,167,69,0.4)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* Phần đánh giá & nhận xét */}
      <div style={{ marginTop: 50, border: '1px solid #ddd', padding: 20 }}>
        <h2>Đánh giá & Nhận xét</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
          <label>
            Tên: <br />
            <input
              type="text"
              name="name"
              value={reviewForm.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <label>
            Đánh giá: <br />
            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleInputChange}
              style={{ padding: 8, marginBottom: 10, borderRadius: 4, border: '1px solid #ccc' }}
            >
              {[5,4,3,2,1].map(n => (
                <option key={n} value={n}>{n} sao</option>
              ))}
            </select>
          </label>

          <label>
            Nhận xét: <br />
            <textarea
              name="comment"
              value={reviewForm.comment}
              onChange={handleInputChange}
              rows={4}
              required
              style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </label>

          <button type="submit" style={{
            marginTop: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 16,
          }}>
            Gửi đánh giá
          </button>
        </form>

        {reviews.length === 0 ? (
          <p>Chưa có đánh giá nào.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reviews.map(r => (
              <li key={r.id} style={{ marginBottom: 20, borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
                <strong>{r.name}</strong> - {r.rating} sao
                <p style={{ marginTop: 6 }}>{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sản phẩm tương tự */}
      {similarProducts.length > 0 && (
        <div style={{ marginTop: 50 }}>
          <h2>Sản phẩm tương tự</h2>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {similarProducts.map(sp => (
              <Link
                to={`/product/${sp.id}`}
                key={sp.id}
                style={{
                  width: 180,
                  textDecoration: 'none',
                  color: '#333',
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <div style={{ padding: '10px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: 14 }}>{sp.name}</h4>
                  <p style={{ color: '#e63946', fontWeight: 'bold', fontSize: 13 }}>{sp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

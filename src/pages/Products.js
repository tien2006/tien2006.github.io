import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const allProducts = [
  {
    id: 1,
    name: 'PLC Mitsubishi FX3U-32MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX3U-32MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-32MR_uwdzgr.webp',
    price: 5,
  },
  {
    id: 2,
    name: 'PLC Mitsubishi FX3U-64MT/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX3U-64MT/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-64MT_uhz0w0.jpg',
    price: 5,
  },
  {
    id: 3,
    name: 'PLC Mitsubishi FX1S-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX1S-14MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-14MR-ES_t4hpet.jpg',
    price: 5,
  },
  {
    id: 4,
    name: 'PLC Mitsubishi FX1N-24MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX1N-24MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1N-24MR-ES_ptmkm4.jpg',
    price: 5,
  },
  {
    id: 5,
    name: 'PLC Mitsubishi FX2N-16MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX2N-16MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16MR-ES_hesbb5.jpg',
    price: 5,
  },
  {
    id: 6,
    name: 'PLC Mitsubishi FX5U-32MR/ES (iQ-F)',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5U-32MR/ES (iQ-F)',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5U-32MR-ES_ojpolr.jpg',
    price: 5,
  },
  {
    id: 7,
    name: 'PLC Mitsubishi Q03UDECPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q03UDECPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176586/Q03UDE_asxaz0.jpg',
    price: 5,
  },
  {
    id: 8,
    name: 'PLC Mitsubishi Q06UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q06UDEHCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDEH_n2hw1t.jpg',
    price: 5,
  },
  {
    id: 9,
    name: 'PLC Mitsubishi Q26UDEHCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q26UDEHCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDEH_mgki52.jpg',
    price: 5,
  },
  {
    id: 10,
    name: 'PLC Mitsubishi R04ENCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R04ENCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R04ENCPU.jog_aeevua.webp',
    price: 5,
  },
  {
    id: 11,
    name: 'PLC Mitsubishi FX1S-30MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX1S-30MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX1S-30MR-ES_ijrmjl.webp',
    price: 5,
  },
  {
    id: 12,
    name: 'PLC Mitsubishi FX1N-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX1N-14MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FX1N-14MR-ES_k3jvg6.webp',
    price: 5,
  },
  {
    id: 13,
    name: 'PLC Mitsubishi FX2N-32MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX2N-32MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-32MR-ES_s3vrcc.jpg',
    price: 5,
  },
  {
    id: 14,
    name: 'PLC Mitsubishi FX3G-14MR/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX3G-14MR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3G-14MR-ES_sjbqzl.jpg',
    price: 5,
  },
  {
    id: 15,
    name: 'PLC Mitsubishi FX5UJ-40MT/ES',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5UJ-40MT/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UJ-40MT-ES_os66o9.jpg',
    price: 5,
  },
  {
    id: 16,
    name: 'PLC Mitsubishi FX5UC-32MT/DSS',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5UC-32MT/DSS',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MT-DSS_xkevi3.webp',
    price: 5,
  },
  {
    id: 17,
    name: 'Compact module FX5UC-32MR/DS-TS',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5UC-32MR/DS-TS',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MR-DS-TS_aiwzqo.jpg',
    price: 5,
  },
  {
    id: 18,
    name: 'Compact module FX5UC-32MT/DS-TS',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'FX5UC-32MT/DS-TS',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/FX5UC-32MT-DS-TS_bfor4r.jpg',
    price: 5,
  },
  {
    id: 19,
    name: 'PLC Mitsubishi Q06UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q06UDVCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q06UDV_dtwtlu.webp',
    price: 5,
  },
  {
    id: 20,
    name: 'PLC Mitsubishi Q13UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q13UDVCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q13UDV_y0sgzy.jpg',
    price: 5,
  },
  {
    id: 21,
    name: 'PLC Mitsubishi Q26UDVCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q26UDVCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q26UDV_c1u2zh.jpg',
    price: 5,
  },
  {
    id: 22,
    name: 'PLC Mitsubishi R04CPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R04CPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/R04CPU_drp01c.webp',
    price: 5,
  },
  {
    id: 23,
    name: 'PLC Mitsubishi R08CPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R08CPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R08CPU_aijt8p.jpg',
    price: 5,
  },
  {
    id: 24,
    name: 'PLC Mitsubishi R08ENCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R08ENCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R08ENCPU_hbcjok.webp',
    price: 5,
  },
  {
    id: 25,
    name: 'PLC Mitsubishi R120SFCPU',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R120SFCPU',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R120SFCPU_tuvu8f.jpg',
    price: 5,
  },
  {
    id: 26,
    name: 'Base unit Q35B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q35B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q35B_szhxta.webp',
    price: 5,
  },
  {
    id: 27,
    name: 'Base unit Q38B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q38B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q38B_wfuamg.jpg',
    price: 5,
  },
  {
    id: 28,
    name: 'Base unit Q33B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q33B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094656/Q33B_hjuqud.jpg',
    price: 5,
  },
  {
    id: 29,
    name: 'Base unit Q312B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q312B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/Q312B_wh7njb.jpg',
    price: 5,
  },
  {
    id: 30,
    name: 'Base unit R35B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R35B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R35B_tiouhv.jpg',
    price: 5,
  },
  {
    id: 31,
    name: 'Base unit R38B',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R38B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R38B_mzy1mw.jpg',
    price: 5,
  },
  {
    id: 32,
    name: 'Power supply unit Q61P',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q61P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q61P_xjmrwq.jpg',
    price: 5,
  },
  {
    id: 33,
    name: 'Power supply unit Q61P-A1',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q61P-A1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q61P-A1_pacizy.jpg',
    price: 5,
  },
  {
    id: 34,
    name: 'Power supply unit Q62P',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q62P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q62P_zafb9p.jpg',
    price: 5,
  },
  {
    id: 35,
    name: 'Power supply unit Q63P',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'Q63P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q63P_cd3ipz.jpg',
    price: 5,
  },

  {
    id: 36,
    name: 'Power supply unit R61P',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R61P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R61P_txafzh.jpg',
    price: 5,
  },
  {
    id: 37,
    name: 'Power supply unit R62P',
    brand: 'Mitsubishi',
    type: 'PLC',
    category: 'Tự động hóa',
    model: 'R62P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094660/R62P_z7q6dd.webp',
    price: 5,
  },



    //Biến tần
  {
    id: 101,
    name: 'Biến tần Mitsubishi FR-E720-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-E720-0.75K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.75K_jrq3xf.jpg',
    price: 5,
  },
  {
    id: 102,
    name: 'Biến tần Mitsubishi FR-E720-1.5K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-E720-1.5K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-1.5K_f4g2vt.png',
    price: 5,
  },
  {
    id: 103,
    name: 'Biến tần Mitsubishi FR-A840-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-A840-0.4K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.4K_imrve8.png',
    price: 5,
  },
  {
    id: 104,
    name: 'Biến tần Mitsubishi FR-D720-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-D720-0.4K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.4K_iwfcro.jpg',
    price: 5,
  },
  {
    id: 105,
    name: 'Biến tần Mitsubishi FR-F820-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-F820-0.75K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-F820-0.75K_i7zftz.jpg',
    price: 5,
  },
  {
    id: 106,
    name: 'Biến tần Mitsubishi FR-E720-0.4K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-E720-0.4K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FR-E720-0.4K_fw1f85.jpg',
    price: 5,
  },
  {
    id: 107,
    name: 'Biến tần Mitsubishi FR-A840-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-A840-0.75K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-0.75K_si6thu.jpg',
    price: 5,
  },
  {
    id: 108,
    name: 'Biến tần Mitsubishi FR-A840-1.5K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-A840-1.5K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-A840-1.5K_fkosgw.jpg',
    price: 5,
  },
  {
    id: 109,
    name: 'Biến tần Mitsubishi FR-D720-0.75K',
    brand: 'Mitsubishi',
    type: 'Biến tần',
    category: 'Tự động hóa',
    model: 'FR-D720-0.75K',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094650/FR-D720-0.75K_hfjl4k.jpg',
    price: 5,
  },

	// Servo
  {
    id: 201,
    name: 'Servo driver Mitsubishi MR-J4-10A',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'MR-J4-10A',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-A_wyxi60.jpg',
    price: 5,
  },
  {
    id: 202,
    name: 'Servo driver Mitsubishi MR-J4-10B',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'MR-J4-10B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J4-B_jpg_c7fw0h.jpg',
    price: 5,
  },
  {
    id: 203,
    name: 'Servo driver Mitsubishi MR-J3-10B',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'MR-J3-10B',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/MR-J3-10B_mgfkxa.jpg',
    price: 5,
  },
  {
    id: 204,
    name: 'Motion controller module QD77MS4',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'QD77MS4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD77MS4_kp0abv.jpg',
    price: 5,
  },
  {
    id: 205,
    name: 'Positioning module QD75MH4',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'QD75MH4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75MH4_yq2sme.jpg',
    price: 5,
  },
  {
    id: 206,
    name: 'Motion controller module QD77MS2',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'QD77MS2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD77MS2_k0owab.jpg',
    price: 5,
  },
  {
    id: 207,
    name: 'Motion controller module RD77MS2',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'RD77MS2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RD77MS2_ptoeep.jpg',
    price: 5,
  },
  {
    id: 208,
    name: 'Motion controller module RD77MS4',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'RD77MS4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RD77MS4_bbuv3k.jpg',
    price: 5,
  },
  {
    id: 209,
    name: ' Positioning module QD75D2',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'QD75D2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75D2_mske9g.jpg',
    price: 5,
  },
  {
    id: 210,
    name: 'Positioning module QD75D4',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'QD75D4',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QD75D4_dw0uqs.jpg',
    price: 5,
  },
  {
    id: 211,
    name: 'High-speed positioning module FX3U-2HSY-ADP',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'FX3U-2HSY-ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-2HSY-ADP_nrvlec.webp',
    price: 5,
  },
  {
    id: 212,
    name: 'Simple Motion Module FX5-40SSC-S',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'FX5-40SSC-S',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-40SSC-S_uhyxr8.webp',
    price: 5,
  },
  {
    id: 213,
    name: 'High-Speed Pulse Output Module FX5-20PG-P',
    brand: 'Mitsubishi',
    type: 'Servo',
    category: 'Tự động hóa',
    model: 'FX5-20PG-P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-20PG-P_gt80tq.webp',
    price: 5,
  },

	  //I/O module
  {
    id: 301,
    name: 'Input module FX2N-16EX-ES/UL ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX2N-16EX-ES/UL',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EX-ES-UL_hz7tbh.webp',
    price: 5,
  },
  {
    id: 302,
    name: 'Output module FX2N-16EYR-ES/UL',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX2N-16EYR-ES/UL',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX2N-16EYR-ES-UL_s2biev.jpg',
    price: 5,
  },

  {
    id: 303,
    name: 'Analog input FX2N-4AD ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX2N-4AD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176533/FX2N-4AD_u4cjtw.jpg',
    price: 5,
  },

  {
    id: 304,
    name: 'Analog input FX2N-2AD ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX2N-2AD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2AD_kx58ib.webp',
    price: 5,
  },

  {
    id: 305,
    name: 'Analog input FX3U-4AD-ADP ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX3U-4AD-ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-4AD-ADP_nml1uq.jpg',
    price: 5,
  },

  {
    id: 306,
    name: 'Analog input FX5-4AD ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-4AD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD_got1zi.jpg',
    price: 5,
  },

  {
    id: 307,
    name: 'Analog input FX3U-4AD ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX3U-4AD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094652/FX3U-4AD_zcwrpo.jpg',
    price: 5,
  },

  {
    id: 308,
    name: 'Analog output FX2N-2DA ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX2N-2DA',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094651/FX2N-2DA_j87lpm.jpg',
    price: 5,
  },

  {
    id: 309,
    name: 'I/O relay FX5-16EYR/ES ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-16EYR/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-16EYR-ES_nqxccb.webp',
    price: 5,
  },

  {
    id: 310,
    name: 'Input module QX41 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QX41 ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX41_hitrgh.jpg',
    price: 5,
  },

  {
    id: 311,
    name: 'Output module QY42P ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QY42P ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY42P_n6j07e.jpg',
    price: 5,
  },

  {
    id: 312,
    name: 'Output module QY10 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QY10 ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY10_kegsoo.jpg',
    price: 5,
  },

  {
    id: 313,
    name: 'Analog input Module Q64AD ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'Q64AD ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64AD_m3nu7g.jpg',
    price: 5,
  },

  {
    id: 314,
    name: 'Analog output Module Q64DA ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'Q64DA ',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094657/Q64DA_whjyiz.jpg',
    price: 5,
  },

  {
    id: 315,
    name: 'Input module RY10R2-TS ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'RY10R2-TS',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY10R2-TS_cblj8a.jpg',
    price: 5,
  },

  {
    id: 316,
    name: 'Output transistor FX5-16ET/ES ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-16ET/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176571/FX5-16ET-ES_xlrmrc.jpg',
    price: 5,
  },

  {
    id: 317,
    name: 'Output relay FX5-32ER/ES ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-32ER/ES',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-32ER-ES_zmnbvy.jpg',
    price: 5,
  },

  {
    id: 318,
    name: 'Analog input FX5-4AD-ADP ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-4AD-ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4AD-ADP_nwmot9.webp',
    price: 5,
  },

  {
    id: 319,
    name: 'Analog output FX5-4DA-ADP ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'FX5-4DA-ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX5-4DA-ADP_hdilei.webp',
    price: 5,
  },

  {
    id: 320,
    name: 'Input module QX42 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QX42',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX42_e3yrtv.avif',
    price: 5,
  },
  {
    id: 321,
    name: 'Input module QX81 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QX81',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX81_gbuoiv.jpg',
    price: 5,
  },
  {
    id: 322,
    name: 'Input module QX40 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QX40',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QX40_vhfsph.jpg',
    price: 5,
  },
  {
    id: 323,
    name: 'Output module QY40P ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QY40P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176603/QY40P_ximvkz.jpg',
    price: 5,
  },
  {
    id: 324,
    name: 'Output module QY41P ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'QY41P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QY41_zjomnq.jpg',
    price: 5,
  },
  {
    id: 325,
    name: 'Input module RY10R2 ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'RY10R2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176622/RY10R2_c47av7.jpg',
    price: 5,
  },
  {
    id: 326,
    name: 'Input module RY40PT5P ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'RY40PT5P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY40PT5P_dyhmes.jpg',
    price: 5,
  },
  {
    id: 327,
    name: 'Output module RY41NT2P ',
    brand: 'Mitsubishi',
    type: 'I/O',
    category: 'Tự động hóa',
    model: 'RY41NT2P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RY41NT2P_b35atm.jpg',
    price: 5,
  },

	  //HMI
  {
    id: 401,
    name: 'HMI Proface GP-4301T',
    brand: 'Proface',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GP-4301T',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/GP-4301T_ovyvu4.jpg',
    price: 5,
  },
  {
    id: 402,
    name: 'HMI Proface GP-4301TM',
    brand: 'Proface',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GP-4301TM',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4401T_wcxbki.jpg',
    price: 5,
  },
  {
    id: 403,
    name: 'HMI Proface GP-4401T',
    brand: 'Proface',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GP-4401T',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4401T_wcxbki.jpg',
    price: 5,
  },
  {
    id: 404,
    name: 'HMI Proface GP-4501T',
    brand: 'Proface',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'HMI Proface GP-4501T',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4501T_dbkzyx.jpg',
    price: 5,
  },
  {
    id: 405,
    name: 'HMI Proface GP-4601T',
    brand: 'Proface',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GP-4601T',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/GP-4601T_qbofqz.jpg',
    price: 5,
  },
  {
    id: 406,
    name: 'HMI Mitsubishi GOT2000',
    brand: 'Mitsubishi',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GOT2000',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/GOT200_hpe2cp.jpg',
    price: 5,
  },
  {
    id: 407,
    name: 'HMI Mitsubishi GOT1000',
    brand: 'Mitsubishi',
    type: 'HMI',
    category: 'Tự động hóa',
    model: 'GOT1000',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094655/GOT1000_hnwxwd.webp',
    price: 5,
  },

	//Cảm biến
  {
    id: 501,
    name: 'Cảm biến sợi quang Keyence FS-N40',
    brand: 'Keyence',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'FS-N40',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FS-N40_nz2zl6.jpg',
    price: 5,
  },
  {
    id: 502,
    name: 'Cảm biến sợi quang Keyence FS-V30',
    brand: 'Keyence',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'FS-V30',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/FS-V30_hqj3cc.jpg',
    price: 5,
  },

  {
    id: 503,
    name: 'Cảm biến quang 100 mm Keyence LR-ZB100CP',
    brand: 'Keyence',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'LR-ZB100CP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-ZB100CP_w1r3it.jpg',
    price: 5,
  },


  {
    id: 504,
    name: 'Cảm biến quang Omron E3Z-D61',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3Z-D61',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3Z-D61_ikgmfn.jpg',
    price: 5,
  },
  {
    id: 505,
    name: 'Cảm biến quang Omron E3Z-R61',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3Z-R61',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-R61_igscnb.webp',
    price: 5,
  },
  {
    id: 506,
    name: 'Cảm biến quang Omron E3Z-T61',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3Z-T61',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-T61_cdcy3k.webp',
    price: 5,
  },
  {
    id: 507,
    name: 'Cảm biến quang Omron E3Z-D82',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3Z-D82',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E3Z-D82_plxva5.avif',
    price: 5,
  },
  {
    id: 508,
    name: 'Cảm biến tiệm cận Omron E2B-S08KS02-WP-C1',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2B-S08KS02-WP-C1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2B-S08KS02-WP-C1_wbo1lp.webp',
    price: 5,
  },
  {
    id: 509,
    name: 'Cảm biến tiệm cận Omron E2E-X10MY1',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2E-X10MY1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X10MY1_x2mozj.jpg',
    price: 5,
  },
  {
    id: 510,
    name: 'Cảm biến tiệm cận Omron E2E-X14MD1',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2E-X14MD1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E2E-X14MD1_w7wrsx.webp',
    price: 5,
  },
  {
    id: 511,
    name: 'Cảm biến đo khoảng cách laser Keyence GV-H45',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'GV-H45',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/GV-H45_diqjnr.jpg',
    price: 5,
  },
  {
    id: 512,
    name: 'Bộ điều khiển Keyence GV-21P',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'GV-21P',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/GV-21P_dgrn6g.webp',
    price: 5,
  },
  {
    id: 513,
    name: 'Camera cảm biến màu Keyence IV2-G30',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'IV2-G30',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/IV2-G30_mrrlg6.jpg',
    price: 5,
  },
  {
    id: 514,
    name: 'Bộ điều khiển màn hình cảm ứng Keyence IV2-CP50',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'IV2-CP50',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/IV2-CP50_tzilot.jpg',
    price: 5,
  },
  {
    id: 515,
    name: 'cảm biến lưu lượng Keyence FD-Q10C',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'FD-Q10C',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FD-Q10C_qokbjb.png',
    price: 5,
  },
  {
    id: 516,
    name: 'cảm biến lưu lượng Keyence FD-Q20C',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'FD-Q20C',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/FD-Q20C_ifk5aq.jpg',
    price: 5,
  },
  {
    id: 517,
    name: 'Cảm biến nhận diện màu Keyence LR-W500',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'LR-W500',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267158/LR-W500_lxqzdd.avif',
    price: 5,
  },
  {
    id: 518,
    name: 'Cảm biến quang Omron E3FA-TN11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FA-TN11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FA-TN11_nk6vmo.webp',
    price: 5,
  },
  {
    id: 519,
    name: 'Cảm biến quang Omron E3FA-TP11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FA-TP11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FA-TP11_v9pxh1.jpg',
    price: 5,
  },
  {
    id: 520,
    name: 'Cảm biến quang Omron E3FA-RP11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FA-RP11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FA-RP11_cazcmd.jpg',
    price: 5,
  },
  {
    id: 521,
    name: 'Cảm biến quang Omron E3FA-DP11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FA-DP11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E3FA-DP11_d12hpr.jpg',
    price: 5,
  },
  {
    id: 522,
    name: 'Cảm biến quang Omron E3FB-TN11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FB-TN11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FB-TN11_mralx6.jpg',
    price: 5,
  },
  {
    id: 523,
    name: 'Cảm biến quang Omron E3FB-TP11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FB-TP11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267157/E3FB-TP11_biwb0z.jpg',
    price: 5,
  },
  {
    id: 524,
    name: 'Cảm biến quang Omron E3FB-DP11',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E3FB-DP11',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267156/E3FB-DP11_msvzfu.jpg',
    price: 5,
  },
  {
    id: 525,
    name: 'Cảm biến tiệm cận Omron E2B-M18KN16-WP-C1',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2B-M18KN16-WP-C1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2B-M18KN16-WP-C1_rqcuga.jpg',
    price: 5,
  },
  {
    id: 526,
    name: 'Cảm biến tiệm cận Omron E2E-X5MY1',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2E-X5MY1',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267154/E2E-X5MY1_brsubz.jpg',
    price: 5,
  },
  {
    id: 527,
    name: 'Cảm biến tiệm cận Omron E2E-X3D1-U',
    brand: 'Omron',
    type: 'Cảm biến',
    category: 'Cảm biến',
    model: 'E2E-X3D1-U',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755267155/E2E-X3D1-U_sj1drg.jpg',
    price: 5,
  },

	// Module truyền thông
  {
    id: 601,
    name: 'RS-485 FX3U-485-BD',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX3U-485-BD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-485-BD_qpywwp.jpg',
    price: 5,
  },
  {
    id: 602,
    name: 'RS-485 FX5-485ADP',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX5-485ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-485ADP_hkdzwz.webp',
    price: 5,
  },
  {
    id: 603,
    name: 'RS-232 module FX3U-232-BD',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX3U-232-BD',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-232-BD_sxsc8k.webp',
    price: 5,
  },
  {
    id: 604,
    name: 'RS-232 module FX5-232ADP',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX5-232ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094654/FX5-232ADP_sof6ip.webp',
    price: 5,
  },
  {
    id: 605,
    name: 'Ethernet Communication module FX3U-ENET-ADP',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX3U-ENET-ADP',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094653/FX3U-ENET-ADP_ju1gb4.jpg',
    price: 5,
  },
  {
    id: 606,
    name: 'Ethernet Communication module FX5-ENET',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'FX5-ENET',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755176558/FX5-ENET_ljuer8.webp',
    price: 5,
  },

  {
    id: 607,
    name: 'Ethernet communication module QJ71C24N-R2',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'QJ71C24N-R2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QJ71C24N-R2_mhrdol.jpg',
    price: 5,
  },
  {
    id: 608,
    name: 'Ethernet communication module QJ71E71-100',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'QJ71E71-100',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094659/QJ71E71-100_xqbgeo.jpg',
    price: 5,
  },
  {
    id: 609,
    name: 'Ethernet/IP module RJ71EN71',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'RJ71EN71',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71EN71_rdaz11.jpg',
    price: 5,
  },
  {
    id: 610,
    name: 'CC-Link module QJ61BT11N',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'QJ61BT11N',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094658/QJ61BT11N_ubrdop.webp',
    price: 5,
  },

  {
    id: 611,
    name: 'CC-Link IE Field module RJ71GF11-T2',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'RJ71GF11-T2',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71GF11-T2_fgxygd.jpg',
    price: 5,
  },
  {
    id: 612,
    name: 'CC-Link IE Controller module RJ71GP21-SX',
    brand: 'Mitsubishi',
    type: 'Module truyền thông',
    category: 'Tự động hóa',
    model: 'RJ71GP21-SX',
    image: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1755094661/RJ71GP21-SX_logyls.jpg',
    price: 5,
  },

];

const formatVNĐ = (number) => {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const CartIcon = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <div
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        cursor: 'pointer',
        zIndex: 1000,
        color: '#007bff',
      }}
      title="Xem giỏ hàng"
    >
      <FaShoppingCart size={30} />
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -5,
            right: -5,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

// === ProductCard component với hover effect ===
const ProductCard = ({ product, handleAddToCart }) => {
  const [hover, setHover] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: hover ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',        // rộng bằng khung chứa
              height: '150px',      // chiều cao khung ảnh cố định
              objectFit: 'contain', // ảnh vừa khung, giữ tỉ lệ
              padding: '10px',      // khoảng cách biên
              boxSizing: 'border-box', // padding không tràn khung
            }}
          />
          <h3 style={{ fontSize: '12px', margin: '0 0 4px 0', textAlign: 'center' }}>{product.name}</h3>
        </div>
      </Link>

      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#e63946' }}>
          {formatVNĐ(product.price)}
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
          style={{
            backgroundColor: hoverButton ? '#1c7430' : '#50c36b', // màu đậm hơn khi hover
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '12px',           // font size chữ trên nút
            transition: 'background-color 0.2s', // chuyển màu mượt
          }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const { category,brand, type, model } = useParams(); // Lấy param từ url

  const [brandFilter, setBrandFilter] = useState('Tất cả');
  const [categoryFilter, setCategoryFilter] = useState(category || 'Tất cả');
  const [typeFilter, setTypeFilter] = useState(type || 'Tất cả');
  const [modelFilter, setModelFilter] = useState(model || 'Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const [columns, setColumns] = useState(5);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(2);
      } else {
        setColumns(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCategoryFilter(category || 'Tất cả');
    setBrandFilter(brand || 'Tất cả');
    setTypeFilter(type || 'Tất cả');
    setModelFilter(model || 'Tất cả');
  }, [category,brand, type, model]);

  const categories = ['Tất cả', ...new Set(allProducts.map((p) => p.category).filter(c => c))];
  const brands = ['Tất cả', ...new Set(allProducts.map((p) => p.brand).filter(c => c))];
  const types = ['Tất cả', ...new Set(allProducts.map((p) => p.type).filter(c => c))];
  const modelsForTypePLC = ['Tất cả', ...new Set(allProducts.filter(p => p.type === 'PLC').map(p => p.model).filter(m => m))];

  const filteredProducts = allProducts.filter((product) => {
    const matchesBrand = brandFilter === 'Tất cả' || product.brand === brandFilter;
    const matchesType = typeFilter === 'Tất cả' || product.type === typeFilter;
    const matchesCategory = categoryFilter === 'Tất cả' || product.category === categoryFilter;
    const matchesModel = modelFilter === 'Tất cả' || product.model === modelFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesType && matchesCategory && matchesModel && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const typesToShow = ['PLC','Biến tần','Servo','I/O', 'HMI', 'Cảm biến', 'Module truyền thông',  'Industrial PC'];

  return (
    <div style={{ padding: '20px', position: 'relative', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <CartIcon />

      <h1>Danh sách sản phẩm</h1>

      {/* Filters */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <label>
          Danh mục:&nbsp;
          <select
            value={categoryFilter}
            onChange={e => {
              setCategoryFilter(e.target.value);
              setModelFilter('Tất cả');
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Hãng:&nbsp;
          <select
            value={brandFilter}
            onChange={e => {
              setBrandFilter(e.target.value);
              setModelFilter('Tất cả');
            }}
          >
            {brands.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

         <label>
          Loại:&nbsp;
          <select
            value={typeFilter}
            onChange={e => {
              setTypeFilter(e.target.value);
              setModelFilter('Tất cả');
            }}
          >
            {types.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        {typeFilter === 'PLC' && (
          <label>
            Dòng sản phẩm:&nbsp;
            <select value={modelFilter} onChange={(e) => setModelFilter(e.target.value)}>
              {modelsForTypePLC.map((model) => (
                <option key={model} value={model}>{model || 'Tất cả'}</option>
              ))}
            </select>
          </label>
        )}

        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '6px 10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            minWidth: '200px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Container trắng */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {typesToShow.map((typeCategory) => {
          const productsByType = filteredProducts.filter(p => p.type === typeCategory);
          if (productsByType.length === 0) return null;

          return (
            <div key={typeCategory} style={{ marginBottom: '30px' }}>
              <h2 style={{ marginBottom: '15px', borderBottom: '2px solid #007bff', paddingBottom: '5px' }}>
                {typeCategory}
              </h2>

              <div
                style={{
                  display: 'grid',
                  gap: '20px',
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
              >
                {productsByType.map((product) => (
                  <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

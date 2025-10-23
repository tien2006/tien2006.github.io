import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003366', color: 'white', padding: '40px 20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo và địa chỉ */}
        <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <img src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896859/logo192_prxrmp.png" alt="Logo" style={{ height: '50px', marginBottom: '10px' }} />
          <h3>CÔNG TY CỔ PHẦN GIẢI PHÁP TỰ ĐỘNG HÓA TTA</h3>
          <p>
            Trụ sở chính: Liên Chiểu, Đà Nẵng<br />
            Chi nhánh HCM: Tân Thới Hiệp, TP.HCM<br />
            VP Vinh: TP. Vinh, Nghệ An<br />
            Hotline: (+84)889322577 (Call, Zalo, WhatsApp)<br />
            Mr. Tiến: (+84)889322577<br />
            Email: tien200620@gmail.com
          </p>
        </div>

        {/* Các cột khác */}
        <div style={{ flex: '1 1 150px' }}>
          <h4>Lĩnh vực kinh doanh</h4>
          <ul>
            <li>Thiết bị điện công nghiệp</li>
            <li>Đào tạo Tự động hóa - Robot</li>
            <li>Thiết bị chiết rót</li>
            <li>Thiết bị bán dẫn</li>
            <li>Hệ sinh thái TTA</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4>Liên kết nhanh</h4>
          <ul>
            <li>Câu chuyện thành công</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <h4>Fanpage</h4>
          <ul>
            <li><a href="https://facebook.com" style={{ color: 'white' }}>Facebook</a></li>
          </ul>
        </div>
      </div>

      {/* Bản quyềnn */}
      <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #ccc', marginTop: '30px' }}>
        © Bản quyền thuộc về TTA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

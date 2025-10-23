import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Ảnh banner */}
      <img
        src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896856/banner_p5beau.png"
        alt="Banner"
        style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
      />

      {/* Nội dung dưới ảnh */}
      <div style={{ padding: '30px 20px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px' }}>
          Giải pháp tự động hóa thông minh kkk
        </h1>

        <p style={{ fontSize: '18px', marginBottom: '25px', color: '#555' }}>
          Nâng cao hiệu suất sản xuất với thiết bị công nghiệp chất lượng
        </p>

        <Link
          to="/products"
          style={{
            backgroundColor: '#007bff',
            padding: '12px 28px',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,123,255,0.6)'
          }}
        >
          Xem sản phẩm
        </Link>
      </div>
    </div>
  );
};

export default Banner;

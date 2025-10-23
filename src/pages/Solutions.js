// src/pages/Solutions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const solutions = [
  {
    id: 'automation',
    title: 'Tự động hóa nhà máy',
    description:
      'Giải pháp tự động hóa toàn diện cho nhà máy giúp tăng hiệu quả sản xuất, giảm chi phí vận hành và cải thiện chất lượng sản phẩm.',
    icon: '⚙️',
  },
  {
    id: 'remote-control',
    title: 'Điều khiển và giám sát từ xa',
    description:
      'Hệ thống điều khiển và giám sát giúp quản lý thiết bị, quy trình sản xuất từ xa, nâng cao khả năng phản ứng và bảo trì.',
    icon: '📡',
  },
  {
    id: 'iot-integration',
    title: 'Tích hợp IoT trong sản xuất',
    description:
      'Kết nối các thiết bị thông minh, cảm biến qua mạng IoT để thu thập dữ liệu, phân tích và tối ưu hóa quy trình.',
    icon: '🌐',
  },
  {
    id: 'data-analysis',
    title: 'Phân tích dữ liệu sản xuất',
    description:
      'Sử dụng Big Data và AI để phân tích dữ liệu sản xuất, dự báo sự cố và nâng cao hiệu suất.',
    icon: '📊',
  },
];

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        paddingBottom: '60px',
      }}
    >
      {/* Hero banner */}
      <section
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          Giải pháp tự động hóa doanh nghiệp
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginTop: '60px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
          }}
        >
          Chúng tôi cung cấp các giải pháp tối ưu hóa sản xuất và vận hành cho doanh nghiệp hiện đại.
        </p>
      </section>

      {/* Solutions list */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: 'auto' }}>
        <h2
          style={{
            fontSize: '2rem',
            color: '#007bff',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Các giải pháp của chúng tôi
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '30px',
          }}
        >
          {solutions.map(({ id, title, description, icon }, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '30px 20px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/solutions/${id}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/solutions/${id}`);
                }
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                }}
              >
                {icon}
              </div>
              <h3 style={{ marginBottom: '15px', color: '#007bff' }}>{title}</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;

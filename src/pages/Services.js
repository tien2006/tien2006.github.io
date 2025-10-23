// pages/Solutions.js
import React, { useState } from 'react';

const solutionItems = [
  {
    id: 'rpa',
    title: 'RPA (Robotic Process Automation)',
    description: 'Tự động hóa các tác vụ lặp đi lặp lại trong quy trình văn phòng, giúp giảm sai sót và tăng hiệu suất.',
  },
  {
    id: 'ai',
    title: 'AI trong Tự Động Hóa',
    description: 'Ứng dụng trí tuệ nhân tạo để phân tích dữ liệu và ra quyết định tự động trong quy trình sản xuất và kinh doanh.',
  },
  {
    id: 'iot',
    title: 'IoT trong Sản Xuất',
    description: 'Kết nối thiết bị và cảm biến để giám sát và điều khiển quy trình sản xuất theo thời gian thực.',
  },
  {
    id: 'erp',
    title: 'ERP Tích Hợp',
    description: 'Hệ thống quản lý nguồn lực doanh nghiệp giúp tối ưu hóa các quy trình kinh doanh và quản lý hiệu quả hơn.',
  },
];

const benefits = [
  'Giảm thiểu chi phí vận hành',
  'Tăng cường độ chính xác và giảm thiểu sai sót',
  'Nâng cao trải nghiệm khách hàng',
  'Tối ưu hóa thời gian và nguồn lực',
];

const projects = [
  {
    id: 'project1',
    title: 'Dự án tự động hóa dây chuyền sản xuất A',
    description: 'Áp dụng IoT và AI để giám sát và tối ưu năng suất dây chuyền.',
    image: '/images/projects/project1.jpg',
  },
  {
    id: 'project2',
    title: 'Tự động hóa quy trình văn phòng bằng RPA',
    description: 'Giảm thời gian xử lý hồ sơ và tăng hiệu quả làm việc nhân viên.',
    image: '/images/projects/project2.jpg',
  },
  {
    id: 'project3',
    title: 'Tích hợp ERP cho doanh nghiệp sản xuất B',
    description: 'Quản lý tài nguyên và sản xuất hiệu quả, giảm lãng phí nguyên vật liệu.',
    image: '/images/projects/project3.jpg',
  },
];

const customers = [
  { id: 1, name: 'Công ty ABC', logo: '/images/customers/abc.png' },
  { id: 2, name: 'Tập đoàn XYZ', logo: '/images/customers/xyz.png' },
  { id: 3, name: 'Doanh nghiệp DEF', logo: '/images/customers/def.png' },
];

const Solutions = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây bạn có thể gửi dữ liệu lên server hoặc API
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333', maxWidth: 1100, margin: 'auto', padding: '20px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'url(/images/automation-hero.jpg) center/cover no-repeat',
        color: 'white',
        padding: '120px 20px 80px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 2000px rgba(0,123,255,0.75)',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Giải Pháp Tự Động Hóa Toàn Diện Cho Doanh Nghiệp
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '700px', margin: 'auto' }}>
          Nâng cao hiệu suất, giảm chi phí và tối ưu quy trình với các giải pháp tự động hóa tiên tiến.
        </p>
        <a href="#solutions" style={{
          backgroundColor: '#ffc107',
          color: '#333',
          padding: '14px 28px',
          borderRadius: '30px',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '1.1rem',
          boxShadow: '0 4px 12px rgba(255,193,7,0.6)',
          transition: 'background-color 0.3s ease',
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0a800'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffc107'}
        >
          Khám Phá Giải Pháp
        </a>
      </section>

      {/* Introduction */}
      <section style={{ marginTop: '60px', textAlign: 'center', padding: '0 15px' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#007bff', marginBottom: '20px' }}>Giải Pháp Tự Động Hóa Là Gì?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: 800, margin: 'auto', color: '#555' }}>
          Tự động hóa doanh nghiệp là việc sử dụng các công nghệ hiện đại để tự động hóa các quy trình kinh doanh và sản xuất,
          giúp tiết kiệm thời gian, giảm thiểu sai sót và nâng cao hiệu quả hoạt động.
        </p>
      </section>

      {/* Solutions List */}
      <section id="solutions" style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>Các Giải Pháp Nổi Bật</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          {solutionItems.map(({ id, title, description }) => (
            <div
              key={id}
              style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '25px',
                width: '250px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ color: '#007bff', marginBottom: '12px' }}>{title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ marginTop: '70px', backgroundColor: '#e9f5ff', padding: '40px 20px', borderRadius: '12px' }}>
        <h2 style={{ textAlign: 'center', color: '#007bff', fontSize: '2rem', marginBottom: '40px' }}>Lợi Ích Khi Áp Dụng</h2>
        <ul style={{ maxWidth: 700, margin: 'auto', fontSize: '1.1rem', color: '#333', listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
          {benefits.map((benefit, idx) => (
            <li key={idx} style={{ marginBottom: '15px' }}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginTop: '70px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '40px' }}>Dự Án Thành Công</h2>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map(({ id, title, description, image }) => (
            <div key={id} style={{ maxWidth: '300px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden', backgroundColor: 'white' }}>
              <img src={image} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '12px', color: '#007bff' }}>{title}</h3>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customers */}
      <section style={{ marginTop: '70px', backgroundColor: '#f8f9fa', padding: '40px 20px', borderRadius: '12px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#007bff', marginBottom: '40px' }}>Khách Hàng & Đối Tác</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
          {customers.map(({ id, logo, name }) => (
            <img key={id} src={logo} alt={name} style={{ height: '70px', objectFit: 'contain', filter: 'grayscale(0.5)', transition: 'filter 0.3s' }} 
              onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0)'} 
              onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(0.5)'}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ marginTop: '70px', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#007bff', marginBottom: '40px' }}>Liên Hệ Tư Vấn</h2>
        {submitted && (
          <p style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}>
            Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ liên hệ lại sớm nhất.
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            name="name"
            type="text"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Nội dung yêu cầu"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Gửi Yêu Cầu
          </button>
        </form>
      </section>

      <div style={{ height: '60px' }}></div>
    </div>
  );
};

const inputStyle = {
  padding: '12px 15px',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  outline: 'none',
  transition: 'border-color 0.3s',
};

export default Solutions;

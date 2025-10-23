import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // lấy id trong hash (bỏ dấu #)
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        // scroll mượt đến phần có id tương ứng
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // nếu không có hash thì scroll lên đầu trang
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div style={{ maxWidth: 1200, margin: '20px auto', padding: '0 15px', fontFamily: 'Arial, sans-serif' }}>
      {/* Ảnh nhà máy đầu trang */}
      <img
        src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896860/maymoc_rntajn.png"
        alt="Nhà máy Tự động hóa Thăng Tiến"
        style={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 8,
          marginBottom: 30,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      <h1>Giới thiệu về Tự động hóa Thăng Tiến</h1>

      <section id="general" style={{ marginBottom: 30, scrollMarginTop: '90px' }}>
        <h2>1. Giới thiệu chung về công ty</h2>
        <p>
          <strong>Tự động hóa Thăng Tiến</strong> là nhà máy chuyên sản xuất và cung cấp các thiết bị tự động hóa hàng đầu Việt Nam. Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến các giải pháp công nghệ hiện đại, hiệu quả, giúp khách hàng tối ưu hóa quy trình sản xuất và nâng cao năng suất lao động.
        </p>
      </section>

      <section id="history" style={{ marginBottom: 30, scrollMarginTop: '90px' }}>
        <h2>2. Lịch sử hình thành</h2>
        <p>
          Được thành lập từ năm 2013, Tự động hóa Thăng Tiến bắt đầu với đội ngũ kỹ sư nhiệt huyết và đam mê công nghệ. Qua nhiều năm phát triển, chúng tôi đã mở rộng quy mô nhà máy, đầu tư dây chuyền sản xuất hiện đại, đồng thời hợp tác với nhiều đối tác quốc tế để mang lại sản phẩm chất lượng cao.
        </p>
      </section>

      <section id="vision" style={{ marginBottom: 30, scrollMarginTop: '90px' }}>
        <h2>3. Sứ mệnh - Tầm nhìn</h2>
        <ul>
          <li><strong>Sứ mệnh:</strong> Cung cấp các giải pháp tự động hóa tiên tiến, góp phần nâng cao hiệu quả sản xuất và thúc đẩy phát triển công nghiệp tại Việt Nam.</li>
          <li><strong>Tầm nhìn:</strong> Trở thành nhà cung cấp thiết bị tự động hóa hàng đầu khu vực Đông Nam Á, tạo dựng thương hiệu uy tín và bền vững.</li>
        </ul>
      </section>

      <section id="team" style={{ marginBottom: 30, scrollMarginTop: '90px' }}>
        <h2>4. Đội ngũ nhân sự</h2>
        <p>
          Chúng tôi tự hào có đội ngũ kỹ sư, chuyên gia giàu kinh nghiệm, tận tâm và luôn sáng tạo trong công việc. Đội ngũ nhân sự của Tự động hóa Thăng Tiến không ngừng học hỏi, cập nhật công nghệ mới để mang lại giá trị cao nhất cho khách hàng.
        </p>
      </section>

      <section id="values" style={{ marginBottom: 30, scrollMarginTop: '90px' }}>
        <h2>5. Các giá trị cốt lõi</h2>
        <ul>
          <li><strong>Chất lượng:</strong> Luôn đặt chất lượng sản phẩm và dịch vụ lên hàng đầu.</li>
          <li><strong>Đổi mới:</strong> Khuyến khích sáng tạo và áp dụng công nghệ mới.</li>
          <li><strong>Khách hàng:</strong> Lắng nghe và thấu hiểu nhu cầu của khách hàng.</li>
          <li><strong>Đoàn kết:</strong> Tôn trọng và hỗ trợ nhau trong môi trường làm việc.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

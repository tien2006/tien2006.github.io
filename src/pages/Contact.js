import React from 'react';

const Contact = () => {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Liên hệ với chúng tôi</h2>

      <div style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        
        {/* Form liên hệ */}
        <div style={{
          flex: '1 1 400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label>Họ và tên:</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Nhập email"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Số điện thoại:</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Nội dung:</label>
              <textarea
                placeholder="Nhập nội dung liên hệ"
                style={{ ...inputStyle, height: '100px', resize: 'none' }}
              ></textarea>
            </div>
            <button type="submit" style={buttonStyle}>
              Gửi thông tin
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div style={{
          flex: '1 1 400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.50210710787!2d106.70042331533482!3d10.773374992323837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f39f4b4f0b1%3A0x6c2e934c06e3f9d2!2zNDggTMOqIFRoYW5oLCBQaMaw4budbmcgNiwgUXXhuq1uIDEwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1693050000000"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Style input và button
const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px'
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default Contact;

import React, { useState, useEffect } from 'react';

const FloatingContact = () => {
  const styleTag = `
    @keyframes wiggleZoom {
      0%, 100% {
        transform: rotate(0deg) scale(1);
      }
      20% {
        transform: rotate(10deg) scale(1.15);
      }
      40% {
        transform: rotate(-10deg) scale(1.1);
      }
      60% {
        transform: rotate(8deg) scale(1.2);
      }
      80% {
        transform: rotate(-8deg) scale(1.1);
      }
    }

    .wiggle-zoom {
      animation: wiggleZoom 0.9s infinite ease-in-out;
    }
  `;

  // State theo dõi kích thước màn hình
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tính vị trí right tùy theo kích thước màn hình
  const rightPosition = windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '30px' : '20px';

  const btnStyle = {
    marginBottom: '12px',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
  };

  const containerStyle = {
    position: 'fixed',
    right: rightPosition,
    bottom: '80px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <style>{styleTag}</style>

      <div style={containerStyle}>
        <a href="tel:(+81)8023357884" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/fluency/48/phone.png" alt="Call" style={{ width: '28px' }} />
        </a>
        <a href="https://zalo.me/84889322577" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/color/48/zalo.png" alt="Zalo" style={{ width: '28px' }} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100027832943014" className="wiggle-zoom" style={btnStyle}>
          <img src="https://img.icons8.com/color/48/facebook-messenger.png" alt="Messenger" style={{ width: '28px' }} />
        </a>
      </div>
    </>
  );
};

export default FloatingContact;

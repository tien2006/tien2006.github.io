import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Điều chỉnh vị trí right theo kích thước màn hình
  // Ví dụ: nhỏ hơn 480px (điện thoại) thì dịch vào 10px, dưới 768px (tablet) 30px, còn desktop 20px
  const rightPosition = windowWidth <= 480 ? '10px' : windowWidth <= 768 ? '30px' : '20px';

  return (
    <div
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        top: 100,
        right: rightPosition,
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

export default CartIcon;

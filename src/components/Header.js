import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutMenu = [
  { id: 'general', title: 'Giới thiệu chung' },
  { id: 'history', title: 'Lịch sử hình thành' },
  { id: 'vision', title: 'Tầm nhìn - sứ mệnh' },
  { id: 'team', title: 'Đội ngũ nhân sự' },
  { id: 'values', title: 'Giá trị cốt lõi' },
];

  

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      if (isMobile) setMobileMenuOpen(false);
    }
  };

  const handleOpenMenu = (menu) => {
    setOpenMenu(menu);
    setOpenSubMenu(null);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const handleOpenSubMenu = (submenu) => {
    setOpenSubMenu(submenu);
  };

  const handleCloseSubMenu = () => {
    setOpenSubMenu(null);
  };


  // Toggle menu on mobile (click)
  const toggleMenuMobile = (menu) => {
    if (openMenu === menu) handleCloseMenu();
    else handleOpenMenu(menu);
  };

  // Sample solutions list (giữ như bản gốc)
  const solutions = [
    { id: 'automation', title: 'Tự động hóa nhà máy' },
    { id: 'remote-control', title: 'Điều khiển và giám sát từ xa' },
    { id: 'iot-integration', title: 'Tích hợp IoT trong sản xuất' },
    { id: 'data-analysis', title: 'Phân tích dữ liệu sản xuất' },
  ];

  // Styles (giữ inline giống file gốc)
  const headerFixedStyle = {
  background: 'rgba(0, 123, 255, 0.8)',
  padding: '0 20px', // chỉ giữ padding ngang
  height: '64px',    // cố định chiều cao
  color: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  userSelect: 'none',
  };


  const navLink = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '18px',
    userSelect: 'none',
  };
  const navLinkHover = {
  backgroundColor: 'white',
  color: '#007BFF',
  borderRadius: '4px',
  transition: 'all 0.2s',
  };

  const navLinkActive = {
    backgroundColor: 'white',
    color: '#007BFF',
    borderRadius: '4px',
    fontWeight: 'bold',
  };


  const dropdown = {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: 'white',
    color: 'black',
    minWidth: '180px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '0', // bỏ bo góc nếu muốn giống hình
    overflow: 'visible',
    zIndex: 1000,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  };


  const dropdownRight = {
    position: 'absolute',
    top: 0,
    left: '100%',
    background: 'white',
    color: 'black',
    minWidth: '160px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '0',
    overflow: 'visible',
    zIndex: 1100,
    borderLeft: '1px solid #ccc',
  };

  const dropdownRightItem = {
    display: 'block',
    padding: '10px 15px',
    color: 'black',
    background: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid #e0e0e0',
  };

  const dropdownRightItemHover = {
    background: '#007BFF',
    color: 'white',
  };


  const dropdownItem = {
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    color: 'White',
    background: '#007BFF',
    //backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #e0e0e0', // gạch ngang
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  const dropdownItemHover = {
    background: '#007BFF', // màu xanh đậm hoặc trắng chữ
    color: 'white',
  };


  const dropdownItemWithArrow = {
    ...dropdownItem,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const searchInput = {
    padding: '5px 10px 5px 30px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
    width: '80%',
    boxSizing: 'border-box',
  };

  const searchIcon = {
    position: 'absolute',
    left: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  };

  const activeStyle = {
    color: '#FFD700',
    borderBottom: '2px solid #FFD700',
    paddingBottom: '4px',
    fontWeight: '700',
  };

  // Mobile menu overlay style
  const mobileMenuOverlay = {
    position: 'fixed',
    top: 64, // match header height
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    zIndex: 9999,
    overflowY: 'auto',
    padding: '20px',
  };

  const mobileLinkStyle = {
    display: 'block',
    padding: '12px 10px',
    fontSize: '18px',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #eee',
  };

  return (
    <>
      <header style={headerFixedStyle}>
      <nav style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', height: '100%' }}>          {/* Nhóm trái: logo + tên + hamburger (chỉ hiện mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img
                src="https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896859/logo_d6trhr.png"
                alt="Logo"
                style={{ height: '50px', width: 'auto' }}
              />
              <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '20px', userSelect: 'none' }}>
                THĂNG TIẾN
              </span>
            </Link>


            {/* Hamburger (chỉ hiện mobile) */}
            <button
              onClick={() => { setMobileMenuOpen((s) => !s); handleCloseMenu(); }}
              aria-label="Toggle menu"
              style={{
                display: isMobile ? 'block' : 'none',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '26px',
                cursor: 'pointer',
                padding: 6,
                marginLeft: '8px',  // cách tên một chút
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Menu chính bên phải */}
          {/* Ẩn menu chính khi mobile */}
          <div
            style={{
              display: isMobile ? 'none' : 'flex',
              gap: '0px',
              position: 'relative',
              alignItems: 'center',
            }}
          >
            {/* Trang chủ */}
            <Link
              to="/"
              style={{
                ...navLink,
                display: 'flex',
                position: 'relative', 
                minWidth: '120px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flex: 1,                  // mỗi ô chiếm bằng nhau
                padding: '0',             // bỏ padding ngang, flex sẽ chia đều
                borderRight: '1px solid #ccc',  // giữ borderRight
                transition: 'all 0.2s',
                ...(isActive('/') ? navLinkActive : {}),
              }}
              onMouseEnter={(e) => { if (!isActive('/')) { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#007BFF'; } }}
              onMouseLeave={(e) => { if (!isActive('/')) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; } }}
            >
              Trang chủ
            </Link>

            {/* Sản phẩm */}
            <div
              style={{ position: 'relative', flex: 1, height: '100%' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('products')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}

            >
              <Link
                to="/products"
                style={{
                  ...navLink,
                display: 'flex',
                position: 'relative', 
                minWidth: '120px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flex: 1,                  // mỗi ô chiếm bằng nhau
                padding: '0',             // bỏ padding ngang, flex sẽ chia đều
                borderRight: '1px solid #ccc',  // giữ borderRight
                transition: 'all 0.2s',
                  ...(isActive('/products') ? navLinkActive : {}),
                }}
                onMouseEnter={(e) => { if (!isActive('/products')) { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#007BFF'; } }}
                onMouseLeave={(e) => { if (!isActive('/products')) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; } }}
              >
                Sản phẩm
              </Link>

              <div style={{ ...dropdown, visibility: openMenu === 'products' ? 'visible' : 'hidden', opacity: openMenu === 'products' ? 1 : 0 }}>
                <div
                  style={{ position: 'relative', flex: 1, height: '100%' }}
                  onMouseEnter={() => handleOpenSubMenu('automation')}
                  onMouseLeave={() => handleCloseSubMenu()}
                >
                  <Link 
                    to="/products/Tự động hóa" 
                    style={{
                      ...dropdownItemWithArrow,
                      backgroundColor: '#007BFF', // nền xanh mặc định
                      color: 'white'              // chữ trắng mặc định
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.backgroundColor = 'white';  
                      e.currentTarget.style.color = '#007BFF';          
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.backgroundColor = '#007BFF'; 
                      e.currentTarget.style.color = 'white';            
                    }}
                  >
                    Tự động hóa ▶
                  </Link>
                  <div style={{ ...dropdownRight, visibility: openSubMenu === 'automation' ? 'visible' : 'hidden', opacity: openSubMenu === 'automation' ? 1 : 0 }}>
                    <Link
                      to="/products/Tự động hóa/PLC"
                      style={dropdownItem}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'white';  // nền 
                        e.currentTarget.style.color = '#007BFF';             // chữ 
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = '#007BFF'; 
                        e.currentTarget.style.color = 'white';               
                      }}
                    >
                      PLC
                    </Link>
                    <Link
                      to="/products/Tự động hóa/Industrial PC"
                      style={dropdownItem}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'white';  // nền 
                        e.currentTarget.style.color = '#007BFF';             // chữ 
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = '#007BFF'; 
                        e.currentTarget.style.color = 'white';               
                      }}
                    >
                      Industrial PC
                    </Link>
                    <Link
                      to="/products/Tự động hóa/HMI"
                      style={dropdownItem}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'white';  // nền 
                        e.currentTarget.style.color = '#007BFF';             // chữ 
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = '#007BFF'; 
                        e.currentTarget.style.color = 'white';               
                      }}
                    >
                      HMI
                    </Link>
                    <Link
                      to="/products/Tự động hóa/Servo"
                      style={dropdownItem}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'white';  // nền 
                        e.currentTarget.style.color = '#007BFF';             // chữ 
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = '#007BFF'; 
                        e.currentTarget.style.color = 'white';               
                      }}
                    >
                      Servo
                    </Link>
                    <Link
                      to="/products/Tự động hóa/Biến tần"
                      style={dropdownItem}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.backgroundColor = 'white';  // nền 
                        e.currentTarget.style.color = '#007BFF';             // chữ 
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.backgroundColor = '#007BFF'; 
                        e.currentTarget.style.color = 'white';               
                      }}
                    >
                      Biến tần
                    </Link>
                  </div>
                </div>
                <Link
                  to="/products/Cảm biến"
                  style={dropdownItem}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.backgroundColor = 'white';  // nền 
                    e.currentTarget.style.color = '#007BFF';             // chữ 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.backgroundColor = '#007BFF'; 
                    e.currentTarget.style.color = 'white';               
                  }}
                >
                  Cảm biến
                </Link>
                <Link
                  to="/products/Thiết bị đo lường"
                  style={dropdownItem}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.backgroundColor = 'white';  // nền 
                    e.currentTarget.style.color = '#007BFF';             // chữ 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.backgroundColor = '#007BFF'; 
                    e.currentTarget.style.color = 'white';               
                  }}
                >
                  Thiết bị đo lường
                </Link>
                <Link
                  to="/products/Bộ điều khiển"
                  style={dropdownItem}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.backgroundColor = 'white';  // nền 
                    e.currentTarget.style.color = '#007BFF';             // chữ 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.backgroundColor = '#007BFF'; 
                    e.currentTarget.style.color = 'white';               
                  }}
                >
                  Bộ điều khiển
                </Link>
              </div>
            </div>

            {/* Giải pháp */}
            <div
              style={{ position: 'relative', flex: 1, height: '100%' }}
              onMouseEnter={() => !isMobile && handleOpenMenu('solutions')}
              onMouseLeave={() => !isMobile && handleCloseMenu()}

            >
              <Link
                to="/solutions"
                style={{
                  ...navLink,
                  display: 'flex',
                  position: 'relative', 
                  minWidth: '120px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  flex: 1,                  // mỗi ô chiếm bằng nhau
                  padding: '0',             // bỏ padding ngang, flex sẽ chia đều
                  borderRight: '1px solid #ccc',  // giữ borderRight
                  transition: 'all 0.2s',
                  ...(isActive('/solutions') ? navLinkActive : {}),
                }}
                onMouseEnter={(e) => { if (!isActive('/solutions')) { e.currentTarget.style.backgroundColor = 'White'; e.currentTarget.style.color = '#007BFF'; } }}
                onMouseLeave={(e) => { if (!isActive('/solutions')) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; } }}
              >
                Giải pháp
              </Link>

              <div style={{ ...dropdown, visibility: openMenu === 'solutions' ? 'visible' : 'hidden', opacity: openMenu === 'solutions' ? 1 : 0 }}>
                {solutions.map(({ id, title }) => (
                  <Link
                    key={id}
                    to={`/solutions/${id}`}
                    style={dropdownItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'White'; // nền 
                      e.currentTarget.style.color = '#007BFF';             // chữ 
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#007BFF'; // trở lại mặc định
                      e.currentTarget.style.color = 'white';               // chữ xanh mặc định
                    }}
                  >
                    {title}
                  </Link>

                ))}
              </div>
            </div>

            {/* Dự án  */}
            <Link
              to="/projects"
              style={{
                ...navLink,
                display: 'flex',
                position: 'relative', 
                minWidth: '120px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flex: 1,                  // mỗi ô chiếm bằng nhau
                padding: '0',             // bỏ padding ngang, flex sẽ chia đều
                borderRight: '1px solid #ccc',  // giữ borderRight
                transition: 'all 0.2s',
                ...(isActive('/projects') ? navLinkActive : {}),
              }}
              onMouseEnter={(e) => { if (!isActive('/projects')) { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#007BFF'; } }}
              onMouseLeave={(e) => { if (!isActive('/projects')) { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; } }}
            >
              Dự án
            </Link>

{/* Giới thiệu */}
<div
  style={{ position: 'relative', flex: 1, height: '100%' }}
  onMouseEnter={() => !isMobile && handleOpenMenu('about')}
  onMouseLeave={() => !isMobile && handleCloseMenu()}
>
  <Link
    to="/about"
    style={{
      ...navLink,
      display: 'flex',
      position: 'relative',
      minWidth: '120px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flex: 1,
      padding: '0',
      borderRight: '1px solid #ccc',
      transition: 'all 0.2s',
      ...(isActive('/about') ? navLinkActive : {}),
    }}
    onMouseEnter={(e) => {
      if (!isActive('/about')) {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.color = '#007BFF';
      }
    }}
    onMouseLeave={(e) => {
      if (!isActive('/about')) {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = 'white';
      }
    }}
  >
    Giới thiệu
  </Link>

  {/* Menu con */}
  <div
    style={{
      ...dropdown,
      visibility: openMenu === 'about' ? 'visible' : 'hidden',
      opacity: openMenu === 'about' ? 1 : 0,
    }}
  >
    {aboutMenu.map(({ id, title }) => (
      <Link
        key={id}
        to={`/about#${id}`}
        style={dropdownItem}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'white'; // nền xanh
          e.currentTarget.style.color = '#007BFF';             // chữ trắng
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#007BFF'; // về mặc định
          e.currentTarget.style.color = 'white';               // chữ xanh
        }}
      >
        {title}
      </Link>
    ))}
  </div>
</div>

              {/* Liên hệ */}
            {/*<Link to="/contact" style={isActive('/contact') ? { ...navLink, ...activeStyle } : navLink}>Liên hệ</Link>*/}
              <Link
                to="/contact"
                style={{
                  ...navLink,
                  display: 'flex',
                  position: 'relative', 
                  minWidth: '120px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  flex: 1,                  // mỗi ô chiếm bằng nhau
                  padding: '0',             // bỏ padding ngang, flex sẽ chia đều
                  borderRight: '1px solid #ccc',  // giữ borderRight
                  transition: 'all 0.2s',
                  ...(isActive('/contact') ? navLinkActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/contact')) {
                    e.currentTarget.style.backgroundColor = 'White';
                    e.currentTarget.style.color = '#007BFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/contact')) {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = 'white';
                  }

                }}
              >
                Liên hệ
              </Link>
            {/* Thanh tìm kiếm (desktop) */}
              <form onSubmit={handleSearchSubmit} style={{ position: 'relative', maxWidth: '200px', flexShrink: 0, marginLeft: '25px' }}>
              <input type="text" placeholder="Tìm kiếm..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={searchInput} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888" viewBox="0 0 24 24" style={searchIcon}>
                <path d="M10 2a8 8 0 105.292 14.292l5.708 5.708 1.414-1.414-5.708-5.708A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </form>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      {isMobile && mobileMenuOpen && (
        <div style={mobileMenuOverlay}>
          {/* Close button top - optional (we already have header close) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <button onClick={() => setMobileMenuOpen(false)} style={{ border: 'none', background: 'transparent', fontSize: 22, cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link>

            {/* Products (mobile clickable expand) */}
            <div>
              <div
                onClick={() => toggleMenuMobile('products')}
                style={{ ...mobileLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>Sản phẩm</span>
                <span>{openMenu === 'products' ? '▾' : '▸'}</span>
              </div>

              {/* products submenu */}
              {openMenu === 'products' && (
                <div style={{ paddingLeft: 12 }}>
                  {/* Automation */}
                  <div>
                    <div
                      onClick={() => {
                        // toggle automation submenu
                        if (openSubMenu === 'automation') handleCloseSubMenu();
                        else handleOpenSubMenu('automation');
                      }}
                      style={{ ...mobileLinkStyle, paddingLeft: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <span>Tự động hóa</span>
                      <span>{openSubMenu === 'automation' ? '▾' : '▸'}</span>
                    </div>

                    {openSubMenu === 'automation' && (
                      <div style={{ paddingLeft: 12 }}>
                        <Link to="/products/Tự động hóa/Industrial PC" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Industrial PC</Link>
                        <Link to="/products/Tự động hóa/Industrial PC" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Industrial PC</Link>
                        <Link to="/products/Tự động hóa/HMI" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>HMI</Link>
                        <Link to="/products/Tự động hóa/Servo" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Servo</Link>
                        <Link to="/products/Tự động hóa/Biến tần" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Biến tần</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/products/Bộ điều khiển PLC" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Bộ điều khiển PLC</Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <div
                onClick={() => toggleMenuMobile('solutions')}
                style={{ ...mobileLinkStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <span>Giải pháp</span>
                <span>{openMenu === 'solutions' ? '▾' : '▸'}</span>
              </div>

              {openMenu === 'solutions' && (
                <div style={{ paddingLeft: 12 }}>
                  {solutions.map(({ id, title }) => (
                    <Link
                      key={id}
                      to={`/solutions/${id}`}
                      style={mobileLinkStyle}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Dự án</Link>
            <Link to="/about" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Giới thiệu</Link>
            <Link to="/contact" style={mobileLinkStyle} onClick={() => setMobileMenuOpen(false)}>Liên hệ</Link>

            {/* Search form mobile */}
            <form onSubmit={handleSearchSubmit} style={{ marginTop: 20 }}>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '10px 15px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontSize: 16,
                }}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

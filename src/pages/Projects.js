import React, { useState, useEffect } from 'react';


const projectsData = [
  {
    id: 1,
    title: 'Hệ thống tự động hóa sản xuất linh kiện điện tử',
    category: 'Sản xuất',
    shortDesc: 'Tự động hóa dây chuyền lắp ráp linh kiện với robot và PLC.',
    detailedDesc:
      'Dự án triển khai hệ thống tự động hóa với robot công nghiệp, PLC Siemens và HMI, giúp tăng năng suất 35% và giảm lỗi sản phẩm 20%.',
    img: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896860/project1_uon9ql.jpg',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', // ví dụ video youtube
    feedbacks: [
      {
        name: 'Nguyễn Văn A',
        position: 'Giám đốc sản xuất',
        comment: 'Hệ thống vận hành mượt mà, tăng năng suất rõ rệt.',
      },
      {
        name: 'Lê Thị B',
        position: 'Kỹ sư tự động hóa',
        comment: 'Giải pháp linh hoạt, dễ mở rộng cho các dây chuyền khác.',
      },
    ],
    timeline: [
      { phase: 'Khảo sát', date: '2023-01-15' },
      { phase: 'Thiết kế', date: '2023-02-10' },
      { phase: 'Triển khai', date: '2023-03-05' },
      { phase: 'Nghiệm thu', date: '2023-04-01' },
      { phase: 'Bảo trì', date: '2023-07-01' },
    ],
  },
  {
    id: 2,
    title: 'Tự động hóa kho vận thông minh',
    category: 'Kho vận',
    shortDesc: 'Hệ thống robot lấy hàng và phần mềm quản lý kho tự động.',
    detailedDesc:
      'Hệ thống robot AGV và phần mềm quản lý kho giúp giảm 40% thời gian lấy hàng, tăng độ chính xác.',
    img: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896860/project2_xqdugd.jpg',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    feedbacks: [
      {
        name: 'Trần Văn C',
        position: 'Quản lý kho',
        comment: 'Hệ thống giúp giảm tải nhân công và cải thiện tốc độ giao nhận.',
      },
    ],
    timeline: [
      { phase: 'Khảo sát', date: '2023-05-01' },
      { phase: 'Thiết kế', date: '2023-05-20' },
      { phase: 'Triển khai', date: '2023-06-15' },
      { phase: 'Nghiệm thu', date: '2023-07-10' },
    ],
  },
  // Bạn thêm dự án tương tự...
];

const categories = ['Tất cả', 'Sản xuất', 'Kho vận', 'Linh kiện', 'Dịch vụ'];

const ProjectPage = () => {
  const [filter, setFilter] = useState('Tất cả');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [headerHeight, setHeaderHeight] = useState(0); // ✅ thêm ở đây

  useEffect(() => { // ✅ thêm tiếp ở đây
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector('header');
      if (headerEl) {
        setHeaderHeight(headerEl.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);


  // Lọc dự án theo category
  const filteredProjects =
    filter === 'Tất cả' ? projectsData : projectsData.filter(p => p.category === filter);

  // Form xử lý input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form (demo alert)
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Cảm ơn ${formData.name}, chúng tôi sẽ liên hệ bạn sớm!`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ maxWidth: 960, margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ textAlign: 'center', color: '#007a5a', marginBottom: 30 }}>Dự án của chúng tôi</h1>

      {/* Bộ lọc */}
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <label htmlFor="categoryFilter" style={{ marginRight: 12, fontWeight: '600' }}>
          Lọc theo ngành:
        </label>
        <select
          id="categoryFilter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ padding: 8, fontSize: 16, borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }}
        >
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách dự án */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 24,
          marginBottom: 40,
        }}
      >
        {filteredProjects.map(project => (
          <div
            key={project.id}
            style={{
              boxShadow: '0 4px 12px rgb(0 0 0 / 0.1)',
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: 'white',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s',
            }}
            onClick={() => setSelectedProject(project)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project);
            }}
            role="button"
            tabIndex={0}
            aria-label={`Xem chi tiết dự án ${project.title}`}
          >
            <img src={project.img} alt={project.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div style={{ padding: 16 }}>
              <h2 style={{ margin: '0 0 8px', color: '#007a5a', fontSize: '1.2rem' }}>{project.title}</h2>
              <p style={{ color: '#444', fontSize: '0.95rem' }}>{project.shortDesc}</p>
              <button
                style={{
                  marginTop: 12,
                  backgroundColor: '#007a5a',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px 16px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'background-color 0.3s',
                }}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                onMouseEnter={e => (e.target.style.backgroundColor = '#005f43')}
                onMouseLeave={e => (e.target.style.backgroundColor = '#007a5a')}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal xem chi tiết */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            tabIndex={-1}
            style={{
              position: 'fixed',
              top: headerHeight, // lùi xuống bằng chiều cao header
              left: 0,
              width: '100vw',
              height: `calc(100vh - ${headerHeight}px)`, // trừ chiều cao header
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start', // để modal bắt đầu ngay dưới header
              padding: 20,
              zIndex: 1000,
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
            onClick={() => setSelectedProject(null)}
          >

          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: 800,
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 24,
              boxShadow: '0 0 30px rgba(0,0,0,0.4)',
              position: 'relative',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <button
              aria-label="Đóng"
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'none',
                border: 'none',
                fontSize: 30,
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#555',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#007a5a')}
              onMouseLeave={e => (e.target.style.color = '#555')}
            >
              &times;
            </button>

            <h2 id="modalTitle" style={{ color: '#007a5a', marginBottom: 12 }}>
              {selectedProject.title}
            </h2>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.5 }}>{selectedProject.detailedDesc}</p>

            {/* Video minh họa */}
            <div style={{ margin: '24px 0' }}>
              <iframe
                width="100%"
                height="400"
                src={selectedProject.videoUrl}
                title="Video dự án"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 8 }}
              ></iframe>
            </div>

            {/* Feedback */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ borderBottom: '2px solid #007a5a', paddingBottom: 6 }}>Phản hồi khách hàng</h3>
              {selectedProject.feedbacks.map((fb, i) => (
                <blockquote
                  key={i}
                  style={{
                    backgroundColor: '#e6f5f0',
                    padding: '12px 16px',
                    borderRadius: 8,
                    marginBottom: 14,
                    fontStyle: 'italic',
                    color: '#0a5f3a',
                    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.05)',
                  }}
                >
                  “{fb.comment}”
                  <br />
                  <strong>
                    — {fb.name}, {fb.position}
                  </strong>
                </blockquote>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ borderBottom: '2px solid #007a5a', paddingBottom: 6 }}>Tiến độ dự án</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {selectedProject.timeline.map((step, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 10,
                      paddingLeft: 20,
                      position: 'relative',
                      borderLeft: '3px solid #007a5a',
                      fontWeight: '600',
                      color: '#004d33',
                    }}
                  >
                    <strong>{step.phase}</strong> - {new Date(step.date).toLocaleDateString()}
                    <span
                      style={{
                        position: 'absolute',
                        left: '-11px',
                        top: '8px',
                        backgroundColor: '#007a5a',
                        borderRadius: '50%',
                        width: '16px',
                        height: '16px',
                        boxShadow: '0 0 8px rgba(0, 115, 80, 0.6)',
                      }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form liên hệ */}
            <div>
              <h3 style={{ borderBottom: '2px solid #007a5a', paddingBottom: 6 }}>Yêu cầu tư vấn dự án</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Họ tên"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ padding: 12, borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: 12, borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ padding: 12, borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }}
                />
                <textarea
                  name="message"
                  placeholder="Nội dung yêu cầu"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ padding: 12, borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#007a5a',
                    color: 'white',
                    border: 'none',
                    borderRadius: 6,
                    padding: '12px 16px',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={e => (e.target.style.backgroundColor = '#005f43')}
                  onMouseLeave={e => (e.target.style.backgroundColor = '#007a5a')}
                >
                  Gửi yêu cầu
                </button>
              </form>
            </div>

            {/* Chia sẻ mạng xã hội */}
            <div style={{ marginTop: 30, textAlign: 'center' }}>
              <h3 style={{ color: '#007a5a', marginBottom: 12 }}>Chia sẻ dự án</h3>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: 20,
                  textDecoration: 'none',
                  color: '#3b5998',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                }}
                aria-label="Chia sẻ trên Facebook"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0077b5',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                }}
                aria-label="Chia sẻ trên LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

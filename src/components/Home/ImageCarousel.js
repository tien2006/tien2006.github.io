import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider1_huiicr.jpg',
    title: 'Digital Solutions',
    desc: 'Find out more about Digital Solutions here.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider2_vfkzij.webp',
    title: 'Service Agreements',
    desc: 'Details about Service Agreements.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896862/slider3_kyk7cf.jpg',
    title: 'Automation Technology',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider4_evlbtc.png',
    title: 'Parts',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider5_pryu22.jpg',
    title: 'Maintenance',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider6_m7ekft.jpg',
    title: 'Support',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider7_a4odjy.jpg',
    title: 'Training',
    desc: 'Explore our Automation Technology.',
  },
  {
    src: 'https://res.cloudinary.com/dhzfopfkh/image/upload/v1754896863/slider8_hsd9zs.png',
    title: 'Expert Service',
    desc: 'Explore our Automation Technology.',
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(300);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const length = images.length;

  const slideMargin = 20; // tổng margin 2 bên = 20px
  const totalSlideWidth = slideWidth + slideMargin;

  // Tính toán translateX như cũ
  const translateX =
    activeIndex === 0
      ? 0
      : activeIndex === length - 1
      ? (length - visibleSlides) * totalSlideWidth
      : (activeIndex - 1) * totalSlideWidth;

  // Responsive: thay đổi slideWidth và số slide hiện ra theo chiều rộng màn hình
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setVisibleSlides(1);
        setSlideWidth(w * 0.8); // 80% màn hình nhỏ
      } else if (w < 768) {
        setVisibleSlides(2);
        setSlideWidth(w / 2.5);
      } else {
        setVisibleSlides(3);
        setSlideWidth(300);
      }
    };
    handleResize(); // gọi ngay để set ban đầu
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  return (
    <div
      style={{
        maxWidth: `${totalSlideWidth * visibleSlides}px`,
        margin: '50px auto 100px auto',
        position: 'relative',
        userSelect: 'none',
        overflow: 'hidden', // quan trọng để không tràn sang trái/phải
      }}
    >
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '5px', // đặt sát trong container, không âm
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          fontSize: '2rem',
          color: '#00b37e',
          cursor: 'pointer',
          zIndex: 10,
          width: '40px',
          height: '60px',
          padding: 0,
          userSelect: 'none',
        }}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden',
          width: `${totalSlideWidth * visibleSlides}px`,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            transform: `translateX(-${translateX}px)`,
            willChange: 'transform',
          }}
        >
          {images.map((img, index) => {
            // Vòng tròn tính chỉ số
            const modIndex = (i, length) => (i + length) % length;
            const circularIndex = modIndex(index, length);
            const circularActive = modIndex(activeIndex, length);

            // scale, opacity, zIndex, shadow logic giữ nguyên, chỉ sửa điều kiện active cho responsive
            let scale = 0.7;
            let opacity = 0.5;
            let zIndex = 1;
            let boxShadow = 'none';

            if (visibleSlides === 1) {
              // chỉ 1 slide lớn hiện
              if (index === activeIndex) {
                scale = 1;
                opacity = 1;
                zIndex = 3;
                boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
              }
            } else if (visibleSlides === 2) {
              // 2 slide hiện
              if (index === activeIndex) {
                scale = 1;
                opacity = 1;
                zIndex = 3;
                boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
              } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                scale = 0.85;
                opacity = 0.8;
                zIndex = 2;
                boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }
            } else {
              // như cũ 3 slide hiện
              if (activeIndex === 0) {
                if (index === 0) {
                  scale = 1;
                  opacity = 1;
                  zIndex = 3;
                  boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                } else if (index === 1 || index === 2) {
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 2;
                  boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }
              } else if (activeIndex === length - 1) {
                if (index === length - 1) {
                  scale = 1;
                  opacity = 1;
                  zIndex = 3;
                  boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                } else if (index === length - 2 || index === length - 3) {
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 2;
                  boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }
              } else {
                if (index === activeIndex) {
                  scale = 1;
                  opacity = 1;
                  zIndex = 3;
                  boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 2;
                  boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }
              }
            }

            return (
              <div
                key={index}
                style={{
                  flex: '0 0 auto',
                  width: `${slideWidth}px`,
                  margin: '0 10px',
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow,
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  zIndex,
                  pointerEvents: 'auto',
                  transform: `scale(${scale})`,
                  opacity,
                  transition: 'all 0.6s ease-in-out',
                  willChange: 'transform, opacity',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {circularIndex === circularActive && (
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    <h3 style={{ margin: '0 0 8px', color: '#00b37e' }}>{img.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>{img.desc}</p>
                    <button
                      style={{
                        marginTop: '10px',
                        padding: '6px 12px',
                        backgroundColor: '#00b37e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                      }}
                      onClick={() => alert(`Learn more about ${img.title}`)}
                    >
                      Learn more
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots navigation */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              margin: '0 6px',
              cursor: 'pointer',
              backgroundColor: idx === activeIndex ? '#00b37e' : '#ccc',
              transition: 'background-color 0.3s ease',
            }}
            aria-label={`Go to slide ${idx + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
            }}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '5px', // đặt sát trong container, không âm
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          fontSize: '2rem',
          color: '#00b37e',
          cursor: 'pointer',
          zIndex: 10,
          width: '40px',
          height: '60px',
          padding: 0,
          userSelect: 'none',
        }}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;

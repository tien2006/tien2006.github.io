import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  // Lấy query param 'q' từ URL
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('q') || '';

  return (
    <div style={{ padding: '20px' }}>
      <h2>Kết quả tìm kiếm cho: <em>{query}</em></h2>

      {/* TODO: Ở đây bạn có thể gọi API hoặc lọc dữ liệu dựa trên query và hiển thị kết quả */}
      <p>(Bạn chưa có dữ liệu để hiển thị kết quả tìm kiếm.)</p>
    </div>
  );
};

export default Search;

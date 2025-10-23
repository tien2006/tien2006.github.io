import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData'; 
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = productsData
    .map(category => {
      const filteredProducts = category.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...category, products: filteredProducts };
    })
    .filter(category => category.products.length > 0);

  return (
    <div className="products-container">
      <h1 className="products-title">Sản phẩm tổng hợp</h1>

      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="products-search"
      />

      {filteredData.length === 0 && (
        <p style={{ textAlign: 'center' }}>Không tìm thấy sản phẩm phù hợp.</p>
      )}

      {filteredData.map(category => (
        <div key={category.id} style={{ marginBottom: 50 }}>
          <h2 className="category-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z" />
            </svg>
            {category.name}
          </h2>

          <div className="grid-container">
            {category.products.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card"
              >
                <img src={product.image} alt={product.name} />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;

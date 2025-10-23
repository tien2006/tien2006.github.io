import React, { useEffect, useState } from 'react';

const ORDERS_STORAGE_KEY = 'my_orders';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (data) {
      try {
        const parsedOrders = JSON.parse(data);
        setOrders(Array.isArray(parsedOrders) ? parsedOrders : []);
      } catch {
        setOrders([]);
      }
    }
  }, []);

  if (orders.length === 0) return <p>Bạn chưa có đơn hàng nào.</p>;

  return (
    <div>
      <h2>Lịch sử đơn hàng</h2>
      {orders.map((order, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: 15, marginBottom: 15 }}>
          <p><strong>Mã đơn hàng:</strong> {order.id || 'N/A'}</p>
          <p><strong>Ngày đặt:</strong> {order.date ? new Date(order.date).toLocaleString() : 'N/A'}</p>
          <div>
            <strong>Thông tin giao hàng:</strong><br />
            Họ tên: {order.shipping?.fullname || 'Không có thông tin'} <br />
            Số điện thoại: {order.shipping?.phone || 'Không có thông tin'} <br />
            Địa chỉ: {order.shipping?.address || 'Không có thông tin'} <br />
            Ghi chú: {order.shipping?.note || '-'}
          </div>
          <div>
            <strong>Danh sách sản phẩm:</strong>
            <ul>
              {(order.items && Array.isArray(order.items) && order.items.length > 0) ? (
                order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} - Số lượng: {item.quantity} - Giá: {item.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                  </li>
                ))
              ) : (
                <li>Không có sản phẩm</li>
              )}
            </ul>
          </div>
          <p><strong>Tổng tiền:</strong> {(order.total || 0).toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;

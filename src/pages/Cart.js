import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Hàm format tiền VND, kiểm tra number hợp lệ trước khi format
const formatVNĐ = (number) => {
  if (typeof number !== "number" || isNaN(number)) return "0 ₫";
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart();

  if (cartItems.length === 0) {
    return <p style={{ padding: 20 }}>Giỏ hàng trống.</p>;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 15px" }}>
      <h1>Xác nhận giỏ hàng</h1>

      {cartItems.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 15,
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 15,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
          />
          <div style={{ flex: 1 }}>
            <h3>{product.name}</h3>
            <p style={{ marginBottom: 6 }}>
              Giá: {formatVNĐ(product.price || 0)}{" "}
              <span style={{ color: "#555", fontWeight: "600" }}>x {product.quantity}</span>
            </p>
            <p style={{ color: "#666", fontSize: 14 }}>{product.description}</p>

            {/* Nút tăng giảm số lượng đẹp hơn */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1.8px solid #007bff",
                borderRadius: 8,
                overflow: "hidden",
                userSelect: "none",
                marginTop: 10,
              }}
            >
              <button
                onClick={() => decreaseQuantity(product.id)}
                style={{
                  width: 36,
                  height: 36,
                  border: "none",
                  backgroundColor: "#e7f0ff",
                  color: "#007bff",
                  fontWeight: "700",
                  fontSize: 22,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c1d6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e7f0ff")}
                aria-label="Giảm số lượng"
              >
                −
              </button>

              <div
                style={{
                  width: 50,
                  height: 36,
                  lineHeight: "36px",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 16,
                  color: "#004085",
                  backgroundColor: "#f0f7ff",
                }}
              >
                {product.quantity}
              </div>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: 36,
                  height: 36,
                  border: "none",
                  backgroundColor: "#e7f0ff",
                  color: "#007bff",
                  fontWeight: "700",
                  fontSize: 22,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c1d6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e7f0ff")}
                aria-label="Tăng số lượng"
              >
                +
              </button>
            </div>

            {/* Nút xóa sản phẩm */}
            <div style={{ marginTop: 12 }}>
              <button
                onClick={() => removeFromCart(product.id)}
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 14,
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b02a37")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
              >
                Xóa sản phẩm
              </button>
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "right",
          marginTop: 20,
          borderTop: "2px solid #007bff",
          paddingTop: 15,
          color: "#007bff",
        }}
      >
        Tổng tiền: {formatVNĐ(totalPrice)}
      </div>

      {/* Nút Thanh toán và Quay lại */}
      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            padding: "12px 26px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 18,
            fontWeight: "600",
            transition: "background-color 0.3s",
          }}
          onClick={handleCheckout}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
        >
          Thanh toán
        </button>

        <button
          style={{
            padding: "12px 26px",
            backgroundColor: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 18,
            fontWeight: "600",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a6268")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c757d")}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default Cart;

// src/pages/Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/*
  Full Checkout page
  - Step 0: Thông tin giao hàng (validate)
  - Step 1: Chọn phương thức thanh toán (COD / Chuyển khoản (hiển thị info người bán) / Thẻ giả lập)
  - Step 2: Xem lại đơn hàng (chỉnh qty / xóa)
  - Step 3: Hoàn tất & xác nhận (loading, lưu my_orders, clearCart)
*/

const STEPS = [
  'Xác nhận thông tin giao hàng',
  'Chọn phương thức thanh toán',
  'Xem lại đơn hàng',
  'Hoàn tất & Xác nhận',
];

// Thông tin người bán (hiển thị khi chọn chuyển khoản)
const SELLER_BANK_INFO = {
  bankName: 'Ngân hàng Vietcombank',
  accountNumber: '0123456789012',
  accountHolder: 'CÔNG TY TNHH TỰ ĐỘNG HÓA ABC',
  branch: 'Chi nhánh TP.HCM',
};

const ORDERS_STORAGE_KEY = 'my_orders';
const SHIPPING_THRESHOLD_FREE = 1000000; // miễn phí ship nếu subtotal > threshold
const SHIPPING_FEE = 30000;
const VAT_RATE = 0.1;

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();

  // step
  const [step, setStep] = useState(0);

  // shipping info & errors
  const [shipping, setShipping] = useState({
    fullname: '',
    phone: '',
    address: '',
    note: '',
  });
  const [shippingErrors, setShippingErrors] = useState({});

  // payment
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' | 'bank' | 'card'
  const [bankNote, setBankNote] = useState('');
  const [cardInfo, setCardInfo] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
  });

  // processing & saved order
  const [isProcessing, setIsProcessing] = useState(false);
  const [savedOrder, setSavedOrder] = useState(null);

  // money calculations
  const subtotal = cartItems.reduce((s, it) => s + (it.price || 0) * (it.quantity || 0), 0);
  const shippingFee = subtotal > SHIPPING_THRESHOLD_FREE ? 0 : SHIPPING_FEE;
  const vat = Math.round(subtotal * VAT_RATE);
  const total = subtotal + shippingFee + vat;

  // helpers
  const formatCurrency = (n) =>
    (typeof n === 'number' ? n : Number(n) || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  function maskCard(num) {
    if (!num) return null;
    const s = String(num).replace(/\s+/g, '');
    if (s.length <= 4) return s;
    return '**** **** **** ' + s.slice(-4);
  }

  // shipping handlers
  const onShippingChange = (e) => {
    const { name, value } = e.target;
    setShipping((s) => ({ ...s, [name]: value }));
    setShippingErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateShipping = () => {
    const errs = {};
    if (!shipping.fullname.trim()) errs.fullname = 'Vui lòng nhập họ và tên';
    if (!shipping.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại';
    if (!shipping.address.trim()) errs.address = 'Vui lòng nhập địa chỉ giao hàng';
    setShippingErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // payment validation
  const validatePayment = () => {
    if (!paymentMethod) {
      alert('Vui lòng chọn phương thức thanh toán');
      return false;
    }
    if (paymentMethod === 'card') {
      if (!cardInfo.number.trim() || !cardInfo.holder.trim() || !cardInfo.expiry.trim() || !cardInfo.cvv.trim()) {
        alert('Vui lòng nhập đầy đủ thông tin thẻ (giả lập)');
        return false;
      }
    }
    return true;
  };

  // navigation
  const goNext = () => {
    if (step === 0) {
      if (!validateShipping()) return;
    }
    if (step === 1) {
      if (!validatePayment()) return;
    }
    if (step === 2 && cartItems.length === 0) {
      alert('Giỏ hàng đang trống.');
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  // quantity controls
  const inc = (item) => addToCart(item);
  const dec = (item) => decreaseQuantity(item.id);

  // save order (single function, unique name)
  const finalizeAndSaveOrder = () => {
    if (cartItems.length === 0) {
      alert('Giỏ hàng đang trống.');
      return;
    }

    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      shipping,
      paymentMethod,
      bankNote: paymentMethod === 'bank' ? bankNote : null,
      cardInfo: paymentMethod === 'card' ? { ...cardInfo, number: maskCard(cardInfo.number) } : null,
      items: cartItems.map((i) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      subtotal,
      shippingFee,
      vat,
      total,
    };

    setIsProcessing(true);

    // simulate server processing
    setTimeout(() => {
      try {
        const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
        const prev = raw ? JSON.parse(raw) : [];
        const next = [order, ...prev];
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(next));
        setSavedOrder(order);
        clearCart();
        setStep(3);
      } catch (err) {
        console.error('Lưu đơn hàng thất bại', err);
        alert('Lỗi khi lưu đơn hàng. Vui lòng thử lại.');
      } finally {
        setIsProcessing(false);
      }
    }, 2000);
  };

  // render step content
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Thông tin giao hàng</h3>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 6 }}>Họ và tên <span style={{ color: 'red' }}>*</span></label>
              <input
                name="fullname"
                value={shipping.fullname}
                onChange={onShippingChange}
                placeholder="Nguyễn Văn A"
                style={{ width: '100%', padding: 8, border: shippingErrors.fullname ? '1px solid red' : '1px solid #ccc', borderRadius: 6 }}
              />
              {shippingErrors.fullname && <div style={{ color: 'red', fontSize: 13 }}>{shippingErrors.fullname}</div>}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 6 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
              <input
                name="phone"
                value={shipping.phone}
                onChange={onShippingChange}
                placeholder="0909123456"
                style={{ width: '100%', padding: 8, border: shippingErrors.phone ? '1px solid red' : '1px solid #ccc', borderRadius: 6 }}
              />
              {shippingErrors.phone && <div style={{ color: 'red', fontSize: 13 }}>{shippingErrors.phone}</div>}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 6 }}>Địa chỉ giao hàng <span style={{ color: 'red' }}>*</span></label>
              <textarea
                name="address"
                value={shipping.address}
                onChange={onShippingChange}
                rows={3}
                placeholder="Số nhà, đường, phường, quận, TP"
                style={{ width: '100%', padding: 8, border: shippingErrors.address ? '1px solid red' : '1px solid #ccc', borderRadius: 6 }}
              />
              {shippingErrors.address && <div style={{ color: 'red', fontSize: 13 }}>{shippingErrors.address}</div>}
            </div>

            <div style={{ marginBottom: 6 }}>
              <label style={{ display: 'block', marginBottom: 6 }}>Ghi chú (không bắt buộc)</label>
              <textarea
                name="note"
                value={shipping.note}
                onChange={onShippingChange}
                rows={2}
                placeholder="VD: Giao giờ hành chính..."
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 6 }}
              />
            </div>
          </>
        );

      case 1:
        return (
          <>
            <h3>Chọn phương thức thanh toán</h3>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                <input type="radio" name="pm" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                {' '}Thanh toán khi nhận hàng (COD)
              </label>

              <label style={{ display: 'block', marginBottom: 8 }}>
                <input type="radio" name="pm" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                {' '}Chuyển khoản ngân hàng
              </label>

              {paymentMethod === 'bank' && (
                <div style={{ marginTop: 8, padding: 12, background: '#f7fbff', borderRadius: 8, border: '1px solid #e6f0ff' }}>
                  <div style={{ marginBottom: 8, fontWeight: 700 }}>Thông tin chuyển khoản (người bán)</div>
                  <div><strong>Ngân hàng:</strong> {SELLER_BANK_INFO.bankName}</div>
                  <div><strong>Số tài khoản:</strong> {SELLER_BANK_INFO.accountNumber}</div>
                  <div><strong>Chủ tài khoản:</strong> {SELLER_BANK_INFO.accountHolder}</div>
                  <div><strong>Chi nhánh:</strong> {SELLER_BANK_INFO.branch}</div>

                  <div style={{ marginTop: 10 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Ghi chú chuyển khoản (tùy chọn)</label>
                    <textarea
                      value={bankNote}
                      onChange={(e) => setBankNote(e.target.value)}
                      placeholder="Nhập mã đơn hàng hoặc nội dung để người bán dễ đối soát..."
                      rows={2}
                      style={{ width: '100%', padding: 8, borderRadius: 6 }}
                    />
                  </div>
                </div>
              )}

              <label style={{ display: 'block', marginTop: 10 }}>
                <input type="radio" name="pm" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                {' '}Thẻ tín dụng / thẻ ghi nợ (giả lập)
              </label>

              {paymentMethod === 'card' && (
                <div style={{ marginTop: 8, padding: 12, borderRadius: 8, border: '1px solid #eee' }}>
                  <div style={{ marginBottom: 8, fontWeight: 700 }}>Thông tin thẻ (giả lập)</div>

                  <input
                    placeholder="Số thẻ (1234 5678 9012 3456)"
                    value={cardInfo.number}
                    onChange={(e) => setCardInfo((c) => ({ ...c, number: e.target.value }))}
                    style={{ width: '100%', padding: 8, marginBottom: 8, borderRadius: 6, border: '1px solid #ddd' }}
                  />
                  <input
                    placeholder="Tên chủ thẻ"
                    value={cardInfo.holder}
                    onChange={(e) => setCardInfo((c) => ({ ...c, holder: e.target.value }))}
                    style={{ width: '100%', padding: 8, marginBottom: 8, borderRadius: 6, border: '1px solid #ddd' }}
                  />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      placeholder="MM/YY"
                      value={cardInfo.expiry}
                      onChange={(e) => setCardInfo((c) => ({ ...c, expiry: e.target.value }))}
                      style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ddd' }}
                    />
                    <input
                      placeholder="CVV"
                      value={cardInfo.cvv}
                      onChange={(e) => setCardInfo((c) => ({ ...c, cvv: e.target.value }))}
                      style={{ width: 110, padding: 8, borderRadius: 6, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h3>Xem lại đơn hàng</h3>

            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống.</p>
            ) : (
              <>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                        <th style={{ textAlign: 'left', padding: 8 }}>Sản phẩm</th>
                        <th style={{ textAlign: 'center', padding: 8 }}>Số lượng</th>
                        <th style={{ textAlign: 'right', padding: 8 }}>Đơn giá</th>
                        <th style={{ textAlign: 'right', padding: 8 }}>Tổng</th>
                        <th style={{ padding: 8 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((it) => (
                        <tr key={it.id} style={{ borderBottom: '1px solid #f6f6f6' }}>
                          <td style={{ padding: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
                            <img src={it.image} alt={it.name} style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 6 }} />
                            <div>
                              <div style={{ fontWeight: 600 }}>{it.name}</div>
                              <div style={{ color: '#666', fontSize: 13 }}>{it.description}</div>
                            </div>
                          </td>
                          <td style={{ padding: 8, textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden' }}>
                              <button
                                onClick={() => dec(it)}
                                disabled={it.quantity <= 1}
                                style={{ padding: '6px 10px', border: 'none', background: '#fafafa', cursor: it.quantity <= 1 ? 'not-allowed' : 'pointer' }}
                              >
                                −
                              </button>
                              <div style={{ padding: '6px 12px', minWidth: 40, textAlign: 'center' }}>{it.quantity}</div>
                              <button onClick={() => inc(it)} style={{ padding: '6px 10px', border: 'none', background: '#fafafa', cursor: 'pointer' }}>+</button>
                            </div>
                          </td>
                          <td style={{ padding: 8, textAlign: 'right' }}>{formatCurrency(it.price)}</td>
                          <td style={{ padding: 8, textAlign: 'right' }}>{formatCurrency((it.price || 0) * (it.quantity || 0))}</td>
                          <td style={{ padding: 8, textAlign: 'center' }}>
                            <button onClick={() => removeFromCart(it.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer' }}>Xóa</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: 12, textAlign: 'right' }}>
                  <div>Tạm tính: <strong>{formatCurrency(subtotal)}</strong></div>
                  <div>Phí vận chuyển: <strong>{formatCurrency(shippingFee)}</strong></div>
                  <div>VAT (10%): <strong>{formatCurrency(vat)}</strong></div>
                  <div style={{ marginTop: 10, fontSize: 18 }}>Tổng: <strong style={{ color: '#007bff' }}>{formatCurrency(total)}</strong></div>
                </div>
              </>
            )}
          </>
        );

      case 3:
        return (
          <div style={{ textAlign: 'center' }}>
            {isProcessing ? (
              <>
                <div style={{ marginBottom: 12, color: '#007bff' }}>Đang xử lý thanh toán... Vui lòng đợi.</div>
                <div style={{ display: 'inline-block', width: 48, height: 48, borderRadius: '50%', border: '5px solid #f3f3f3', borderTop: '5px solid #007bff', animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin {0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`}</style>
              </>
            ) : savedOrder ? (
              <>
                <h3 style={{ color: 'green' }}>Đặt hàng thành công!</h3>
                <p>Mã đơn hàng: <strong>{savedOrder.id}</strong></p>
                <p>Ngày: {new Date(savedOrder.date).toLocaleString()}</p>

                <div style={{ textAlign: 'left', marginTop: 12 }}>
                  <h4>Thông tin giao hàng</h4>
                  <div><strong>Họ tên:</strong> {savedOrder.shipping.fullname}</div>
                  <div><strong>Phone:</strong> {savedOrder.shipping.phone}</div>
                  <div><strong>Địa chỉ:</strong> {savedOrder.shipping.address}</div>

                  <h4 style={{ marginTop: 12 }}>Thanh toán</h4>
                  <div><strong>Phương thức:</strong> {formatPayment(savedOrder.paymentMethod)}</div>
                  {savedOrder.paymentMethod === 'bank' && <div><strong>Ghi chú chuyển khoản:</strong> {savedOrder.bankNote || '-'}</div>}
                  {savedOrder.paymentMethod === 'card' && <div><strong>Thẻ:</strong> {savedOrder.cardInfo?.number || '-'}</div>}

                  <h4 style={{ marginTop: 12 }}>Chi tiết đơn hàng</h4>
                  <ul>
                    {savedOrder.items.map((it) => (
                      <li key={it.id}>{it.name} x {it.quantity} — {formatCurrency(it.price * it.quantity)}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 8 }}><strong>Tổng phải trả:</strong> {formatCurrency(savedOrder.total)}</div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <button onClick={() => { setSavedOrder(null); setStep(0); }} style={{ marginRight: 8, padding: '8px 14px', borderRadius: 6 }}>Tiếp tục mua</button>
                  <button onClick={() => navigate('/order-history')} style={{ padding: '8px 14px', borderRadius: 6 }}>Xem lịch sử đơn hàng</button>
                </div>
              </>
            ) : (
              <>
                <p>Nhấn "Xác nhận thanh toán" để hoàn tất đơn hàng.</p>
                <button onClick={finalizeAndSaveOrder} disabled={isProcessing || cartItems.length === 0} style={{ padding: '10px 18px', background: '#28a745', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                  Xác nhận thanh toán
                </button>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  function formatPayment(pm) {
    if (pm === 'cod') return 'Thanh toán khi nhận hàng (COD)';
    if (pm === 'bank') return 'Chuyển khoản ngân hàng';
    if (pm === 'card') return 'Thẻ tín dụng / thẻ ghi nợ (giả lập)';
    return pm;
  }

  // main render
  return (
    <div style={{ maxWidth: 1000, margin: '28px auto', padding: '0 16px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ textAlign: 'center', marginBottom: 18 }}>Thanh toán</h1>

      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        {STEPS.map((s, i) => (
          <div key={s} onClick={() => setStep(i)} style={{
            flex: 1,
            textAlign: 'center',
            padding: '10px',
            borderBottom: step === i ? '3px solid #007bff' : '2px solid #eee',
            color: step === i ? '#007bff' : '#666',
            cursor: 'pointer',
            fontWeight: step === i ? 700 : 500
          }}>{s}</div>
        ))}
      </div>

      <div style={{ padding: 18, background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
        {renderStepContent()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18 }}>
        <button onClick={goBack} disabled={step === 0 || isProcessing} style={{ padding: '10px 16px', borderRadius: 6, border: '1px solid #ddd', background: step === 0 || isProcessing ? '#f3f3f3' : 'white', cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
          Quay lại
        </button>

        {step < 3 && (
          <button onClick={goNext} disabled={isProcessing || (step === 2 && cartItems.length === 0)} style={{ padding: '10px 16px', borderRadius: 6, border: 'none', background: '#007bff', color: 'white', cursor: 'pointer' }}>
            {step === 2 ? 'Tiếp theo' : 'Tiếp theo'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;

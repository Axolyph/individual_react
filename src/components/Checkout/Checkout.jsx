import { useState } from 'react';
import './Checkout.css';
import { X, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Checkout = ({ isOpen, onClose, onSuccess }) => {
    const { cartItems, getTotalPrice, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [paymentData, setPaymentData] = useState({
        yapePhone: '',
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: ''
    });
    const [processing, setProcessing] = useState(false);

    const paymentMethods = [
        { id: 'cash', title: 'Efectivo', desc: 'Pago al recibir o recoger tu pedido', icon: Banknote },
        { id: 'yape', title: 'Yape', desc: 'Pago rápido con tu número o QR', icon: Smartphone },
        { id: 'card', title: 'Tarjeta de crédito', desc: 'Visa, Mastercard o American Express', icon: CreditCard }
    ];

    const isPaymentValid = () => {
        if (!paymentMethod) return false;
        if (paymentMethod === 'yape') return paymentData.yapePhone.trim().length >= 9;
        if (paymentMethod === 'card') {
            return Boolean(
                paymentData.cardName.trim() &&
                paymentData.cardNumber.trim() &&
                paymentData.cardExpiry.trim() &&
                paymentData.cardCvv.trim()
            );
        }
        return true;
    };

    const resetState = () => {
        setStep(1);
        setPaymentMethod(null);
        setPaymentData({
            yapePhone: '',
            cardName: '',
            cardNumber: '',
            cardExpiry: '',
            cardCvv: ''
        });
    };

    const handlePayment = async () => {
        setProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        clearCart();
        setProcessing(false);
        onSuccess?.({ paymentMethod, total: getTotalPrice() });
        onClose();
        resetState();
    };

    if (!isOpen) return null;

    return (
        <div className="checkout-overlay">
            <div className="checkout-container">
                <button className="checkout-close" onClick={onClose}><X size={24} /></button>

                <div className="checkout-header">
                    <h2>Completar Compra</h2>
                    <div className="checkout-steps">
                        <div className={`step ${step >= 1 ? 'active' : ''}`}>
                            <span>1</span>
                            <p>Resumen</p>
                        </div>
                        <div className={`step ${step >= 2 ? 'active' : ''}`}>
                            <span>2</span>
                            <p>Envío</p>
                        </div>
                        <div className={`step ${step >= 3 ? 'active' : ''}`}>
                            <span>3</span>
                            <p>Pago</p>
                        </div>
                    </div>
                </div>

                <div className="checkout-content">
                    {step === 1 && (
                        <div className="step-content">
                            <h3>Resumen de Compra</h3>
                            <div className="cart-summary">
                                {cartItems.map(item => (
                                    <div key={item.id} className="summary-item">
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <p className="item-name">{item.name}</p>
                                            <p className="item-qty">{item.quantity}x</p>
                                        </div>
                                        <p className="item-price">S/{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="checkout-totals">
                                <div className="total-row">
                                    <span>Subtotal:</span>
                                    <span>S/{getTotalPrice()}</span>
                                </div>
                                <div className="total-row">
                                    <span>Envío:</span>
                                    <span>S/0.00</span>
                                </div>
                                <div className="total-row total">
                                    <span>Total:</span>
                                    <span>S/{getTotalPrice()}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content">
                            <h3>Dirección de Envío</h3>
                            <form className="checkout-form">
                                <div className="form-group">
                                    <label>Nombre Completo</label>
                                    <input type="text" placeholder="Juan Pérez" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="juan@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input type="tel" placeholder="+51 999 999 999" />
                                </div>
                                <div className="form-group">
                                    <label>Dirección</label>
                                    <input type="text" placeholder="Calle Principal 123" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Ciudad</label>
                                        <input type="text" placeholder="Lima" />
                                    </div>
                                    <div className="form-group">
                                        <label>Código Postal</label>
                                        <input type="text" placeholder="15001" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-content">
                            <h3>Selecciona Método de Pago</h3>
                            <div className="payment-methods">
                                {paymentMethods.map(method => {
                                    const Icon = method.icon;
                                    return (
                                        <label key={method.id} className={`payment-card ${paymentMethod === method.id ? 'selected' : ''}`}>
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method.id}
                                                checked={paymentMethod === method.id}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                            />
                                            <div className="payment-icon">
                                                <Icon size={28} />
                                            </div>
                                            <div className="payment-copy">
                                                <p className="payment-title">{method.title}</p>
                                                <p className="payment-desc">{method.desc}</p>
                                            </div>
                                        </label>
                                    );
                                })}
                            </div>

                            {paymentMethod === 'yape' && (
                                <div className="payment-extra">
                                    <label>Número asociado a Yape</label>
                                    <input
                                        type="tel"
                                        placeholder="+51 999 999 999"
                                        value={paymentData.yapePhone}
                                        onChange={(e) => setPaymentData({ ...paymentData, yapePhone: e.target.value })}
                                    />
                                </div>
                            )}

                            {paymentMethod === 'card' && (
                                <div className="payment-extra payment-extra--card">
                                    <div className="form-group">
                                        <label>Nombre del titular</label>
                                        <input
                                            type="text"
                                            placeholder="Juan Perez"
                                            value={paymentData.cardName}
                                            onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Número de tarjeta</label>
                                        <input
                                            type="text"
                                            placeholder="4111 1111 1111 1111"
                                            value={paymentData.cardNumber}
                                            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Vencimiento</label>
                                            <input
                                                type="text"
                                                placeholder="12/28"
                                                value={paymentData.cardExpiry}
                                                onChange={(e) => setPaymentData({ ...paymentData, cardExpiry: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>CVV</label>
                                            <input
                                                type="password"
                                                placeholder="123"
                                                value={paymentData.cardCvv}
                                                onChange={(e) => setPaymentData({ ...paymentData, cardCvv: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="checkout-footer">
                    <button
                        className="btn-back"
                        onClick={() => step > 1 ? setStep(step - 1) : onClose()}
                    >
                        {step === 1 ? 'Cancelar' : 'Atrás'}
                    </button>
                    <button
                        className={`btn-next ${step === 3 && !isPaymentValid() ? 'disabled' : ''}`}
                        onClick={() => {
                            if (step === 3 && isPaymentValid()) {
                                handlePayment();
                            } else if (step < 3) {
                                setStep(step + 1);
                            }
                        }}
                        disabled={processing || (step === 3 && !isPaymentValid())}
                    >
                        {processing ? 'Procesando...' : step === 3 ? 'Pagar Ahora' : 'Continuar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

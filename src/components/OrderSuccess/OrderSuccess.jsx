import { useEffect, useState } from 'react';
import './OrderSuccess.css';
import { CheckCircle, Download, Home } from 'lucide-react';

const paymentLabels = {
    cash: 'Efectivo',
    yape: 'Yape',
    card: 'Tarjeta de crédito'
};

const OrderSuccess = ({ isOpen, onClose, paymentMethod, total }) => {
    const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="order-success-overlay">
            <div className="order-success-container">
                <div className="success-icon-wrapper">
                    <div className="success-icon">
                        <CheckCircle size={80} />
                    </div>
                </div>

                <h1>¡Compra Exitosa!</h1>
                <p className="success-message">Tu pedido fue procesado correctamente.</p>

                <div className="order-details">
                    <div className="detail-item">
                        <span className="label">Número de Orden:</span>
                        <span className="value">#{orderNumber}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Pago:</span>
                        <span className="value">{paymentLabels[paymentMethod] || 'Confirmado'}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Total:</span>
                        <span className="value">S/{total}</span>
                    </div>
                </div>

                <div className="success-message-box">
                    <p>Te enviamos la confirmación con los detalles de tu compra y seguimiento del pedido.</p>
                </div>

                <div className="success-actions">
                    <button className="btn-download">
                        <Download size={18} />
                        Descargar Recibo
                    </button>
                    <button className="btn-home" onClick={onClose}>
                        <Home size={18} />
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;

import './ShoppingCart.css';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ShoppingCart = ({ isOpen, onClose, onCheckout }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

    return (
        <div className={`shopping-cart ${isOpen ? 'is-open' : ''}`}>
            <div className="shopping-cart__overlay" onClick={onClose} />
            <div className="shopping-cart__panel">
                <div className="shopping-cart__header">
                    <h3>Tu Carrito ({getTotalItems()})</h3>
                    <button onClick={onClose}><X size={22} /></button>
                </div>
                
                {cartItems.length === 0 ? (
                    <div className="shopping-cart__empty">
                        <p>Tu carrito está vacío</p>
                        <button className="empty-cart-btn" onClick={onClose}>Continuar Comprando</button>
                    </div>
                ) : (
                    <>
                        <div className="shopping-cart__items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="cart-item__thumb"
                                    />
                                    <div className="cart-item__info">
                                        <h4>{item.name}</h4>
                                        <p>S/{item.price}</p>
                                    </div>
                                    <div className="cart-item__controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <button 
                                        className="cart-item__remove"
                                        onClick={() => removeFromCart(item.id)}
                                        title="Eliminar del carrito"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="shopping-cart__footer">
                            <div className="total-row"><span>Subtotal:</span><span>S/{getTotalPrice()}</span></div>
                            <div className="total-row shipping"><span>Envío:</span><span>S/0.00</span></div>
                            <div className="total-row total"><span>Total:</span><span>S/{getTotalPrice()}</span></div>
                            <button 
                                className="checkout-btn"
                                onClick={() => {
                                    onCheckout();
                                    onClose();
                                }}
                            >
                                Proceder al Pago
                            </button>
                            <button className="clear-cart-btn" onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;

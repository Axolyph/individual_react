import { useState } from 'react';
import './ProductModal.css';
import { X, Star, ShieldCheck, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    if (!product) return null;

    const handleAddToCart = () => {
        if (product.inStock) {
            addToCart(product, quantity);
            setAdded(true);
            setTimeout(() => {
                setQuantity(1);
                setAdded(false);
                onClose();
            }, 500);
        }
    };

    const handleQuantityChange = (value) => {
        if (value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><X size={24} /></button>
                <div className="modal-body">
                    <div className="modal-gallery">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="modal-image"
                        />
                    </div>
                    <div className="modal-details">
                        <span className="modal-cat">{product.category}</span>
                        <h2>{product.name}</h2>
                        <div className="modal-rating">
                            <Star size={18} fill="var(--warning)" color="var(--warning)" />
                            <span>{product.rating}</span>
                        </div>
                        <p className="modal-price">S/{product.price}</p>
                        <p className="modal-desc">{product.shortDesc} Nuestra línea premium garantiza máxima durabilidad y diseño innovador con tecnología de punta adaptada a tus necesidades diarias.</p>

                        <div className="modal-safety">
                            <ShieldCheck size={18} color="var(--success)" />
                            <span>Garantía NovaShop de 12 meses incluida.</span>
                        </div>

                        <div className="modal-quantity">
                            <label>Cantidad:</label>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(quantity - 1)} type="button">
                                    <Minus size={16} />
                                </button>
                                <input 
                                    type="number" 
                                    value={quantity} 
                                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                    min="1"
                                />
                                <button onClick={() => handleQuantityChange(quantity + 1)} type="button">
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        <button 
                            className={`modal-add-btn ${added ? 'added' : ''}`}
                            disabled={!product.inStock}
                            onClick={handleAddToCart}
                            type="button"
                        >
                            {added ? '✓ Añadido al Carrito' : (product.inStock ? 'Añadir al Carrito' : 'Agotado')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;

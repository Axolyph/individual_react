import './ProductCard.css';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onSelect }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (product.inStock) {
            addToCart(product, 1);
        }
    };

    return (
        <div className="product-card">
            <div className="product-card__img-container">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-card__image"
                />
                {product.discount && <span className="discount-tag">-{product.discount}</span>}
                <div className="product-card__actions">
                    <button className="action-btn" onClick={() => onSelect(product)}><Eye size={18} /></button>
                </div>
            </div>
            <div className="product-card__info">
                <span className="product-card__cat">{product.category}</span>
                <h3 className="product-card__title">{product.name}</h3>
                <div className="product-card__meta">
                    <div className="rating">
                        <Star size={16} fill="var(--warning)" color="var(--warning)" />
                        <span>{product.rating}</span>
                    </div>
                    <span className={`stock-status ${product.inStock ? 'in' : 'out'}`}>
                        {product.inStock ? 'En Stock' : 'Agotado'}
                    </span>
                </div>
                <p className="product-card__desc">{product.shortDesc}</p>
                <div className="product-card__footer">
                    <span className="price">S/{product.price}</span>
                    <button 
                        className="add-to-cart-btn" 
                        disabled={!product.inStock}
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={16} /> Añadir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

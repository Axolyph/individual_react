import './Navbar.css';
import logo from '../../assets/logonovashop.png';
import { ShoppingBag, Menu, Home, Store } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = ({ onCartOpen, onMenuOpen }) => {
    const { getTotalItems } = useCart();

    return (
        <nav className="navbar">
            <div className="container navbar__wrapper">
                <button className="navbar__mobile-toggle" onClick={onMenuOpen}>
                    <Menu size={24} />
                </button>

                <a href="/" className="navbar__logo">
                    <img src={logo} alt="NovaShop Logo" />
                </a>

                <ul className="navbar__links">
                    <li><a href="/" className="active"><Home size={16} /> Inicio</a></li>
                    <li><a href="#productos"><Store size={16} /> Tienda</a></li>
                </ul>

                <div className="navbar__actions">
                    <button className="navbar__cart-trigger" onClick={onCartOpen}>
                        <ShoppingBag size={20} />
                        <span className="cart-badge">{getTotalItems()}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

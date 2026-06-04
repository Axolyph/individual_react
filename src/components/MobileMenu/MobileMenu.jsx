import './MobileMenu.css';
import { X, Home, Store, Phone } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
            <div className="mobile-menu__overlay" onClick={onClose} />
            <div className="mobile-menu__content">
                <button className="mobile-menu__close" onClick={onClose}><X size={24} /></button>
                <nav className="mobile-menu__nav">
                    <a href="/" onClick={onClose}><Home size={18} /> Inicio</a>
                    <a href="#productos" onClick={onClose}><Store size={18} /> Tienda</a>
                    <a href="#contacto" onClick={onClose}><Phone size={18} /> Contacto</a>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;

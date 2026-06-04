import './Footer.css';
import logo from "../../assets/logonovashop.png";
import { Share2, Globe, Link2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__grid">
                <div>
                    <img src={logo} alt="Logo" className="footer__logo" />
                    <p className="footer__text">Tu ecosistema e-commerce favorito para adquirir tendencias de manera veloz y confiable.</p>
                    <div className="footer__socials">
                        <a href="#" aria-label="Facebook"><Share2 size={18} /></a>
                        <a href="#" aria-label="Instagram"><Globe size={18} /></a>
                        <a href="#" aria-label="Youtube"><Link2 size={18} /></a>
                    </div>
                </div>
                <div>
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#productos">Tienda</a></li>
                        <li><a href="#contacto">Soporte</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Políticas</h4>
                    <ul>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Términos de servicio</a></li>
                        <li><a href="#">Devoluciones</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom container">
                <p>&copy; 2026 NovaShop. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

import './Hero.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__gradient"></div>
                <div className="hero__pattern"></div>
            </div>
            <div className="container hero__wrapper">
                <div className="hero__content">
                    <div className="hero__badge">
                        <Sparkles size={16} /> <span>Tu nueva tienda en línea favorita.</span>
                    </div>
                    <h1 className="hero__title">NOVASHOP: Todo lo que necesitas en un solo lugar.</h1>
                    <p className="hero__desc">
                        Explora nuestro catálogo diverso y encuentra lo último en electrónicos, ropa de tendencia y los mejores accesorios.
                        Compra de forma rápida, segura y con envíos ultra rápidos.
                    </p>
                    <div className="hero__cta">
                        <a href="#productos" className="btn-hero btn-hero--primary">Ver Tienda <ArrowRight size={18} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

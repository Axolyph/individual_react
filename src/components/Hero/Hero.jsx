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
                        <Sparkles size={16} /> <span>Tu nueva tienda en lÃ­nea favorita.</span>
                    </div>
                    <h1 className="hero__title">NOVASHOP: Todo lo que necesitas en un solo lugar.</h1>
                    <p className="hero__desc">Explora nuestro catÃ¡logo diverso y encuentra lo Ãºltimo en electrÃ³nicos, ropa de tendencia y los mejores accesorios. Compra de forma rÃ¡pida, segura y con envÃ­os ultra rÃ¡pidos.</p>
                    <div className="hero__cta">
                        <a href="#productos" className="btn-hero btn-hero--primary">Ver Tienda <ArrowRight size={18} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

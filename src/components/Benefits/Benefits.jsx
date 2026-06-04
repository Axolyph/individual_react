import './Benefits.css';
import { Truck, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const Benefits = () => {
    const items = [
        { icon: <Truck size={24} />, t: 'Envío Gratis', d: 'En pedidos mayores a S/199' },
        { icon: <ShieldCheck size={24} />, t: 'Pago Seguro', d: 'Protección 100% garantizada' },
        { icon: <Clock size={24} />, t: 'Soporte 24/7', d: 'Atención personalizada online' },
        { icon: <CreditCard size={24} />, t: 'Cuotas Sin Intereses', d: 'Con tarjetas seleccionadas' }
    ];
    return (
        <section id="beneficios" className="benefits container">
            {items.map((b, i) => (
                <div key={i} className="benefit-card">
                    <div className="benefit-icon">{b.icon}</div>
                    <div>
                        <h4>{b.t}</h4>
                        <p>{b.d}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Benefits;

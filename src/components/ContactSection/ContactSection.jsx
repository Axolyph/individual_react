import './ContactSection.css';
import { PhoneCall, Mail, MapPin, Clock3, MessageCircle, MessageSquareMore, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-section__hero">
                <div className="container">
                    <h2>Contactanos</h2>
                    <p>Estamos aqui para ayudarte. Elige la forma mas conveniente de comunicarte con nuestro equipo.</p>
                    <a href="#contacto-form" className="contact-section__hero-btn">Ir a Contactar Soporte</a>
                </div>
            </div>

            <div className="container contact-section__grid">
                <div className="contact-card contact-card--form" id="contacto-form">
                    <h3>Formulario de Contacto</h3>
                    <p>Completa el formulario y te responderemos en menos de 24 horas.</p>

                    <form className="contact-form">
                        <label>
                            <span>Nombre Completo:</span>
                            <input type="text" placeholder="Tu nombre" />
                        </label>
                        <label>
                            <span>Correo Electronico:</span>
                            <input type="email" placeholder="Tu@gmail.com" />
                        </label>
                        <label>
                            <span>Telefono:</span>
                            <input type="tel" placeholder="+51 000111000" />
                        </label>
                        <label>
                            <span>Mensaje:</span>
                            <textarea rows="7" placeholder="¿En que puedo ayudarte?"></textarea>
                        </label>
                        <button type="button" className="contact-form__submit">Enviar Mensaje</button>
                    </form>
                </div>

                <div className="contact-card contact-card--aside">
                    <div className="whatsapp-card">
                        <div className="whatsapp-card__icon"><MessageCircle size={34} /></div>
                        <h3>Soporte en Vivo via WhatsApp</h3>
                        <p>¿Necesitas ayuda inmediata? Chatea con un asesor de NovaShop ahora mismo.</p>
                        <ul>
                            <li><CheckCircle2 size={16} /> Respuesta Inmediata</li>
                            <li><CheckCircle2 size={16} /> Atencion Personalizada</li>
                            <li><CheckCircle2 size={16} /> Disponible 24/7</li>
                        </ul>
                        <button className="whatsapp-card__btn">Abrir WhatsApp</button>
                        <span className="whatsapp-card__phone">+51 977536934</span>
                    </div>

                    <div className="info-card">
                        <h3>Informacion de Contacto</h3>
                        <div className="info-card__item">
                            <MapPin size={24} />
                            <div>
                                <strong>Direccion:</strong>
                                <p>Av. Principal San Martin<br />Ciudad, Estado 12345</p>
                            </div>
                        </div>
                        <div className="info-card__item">
                            <PhoneCall size={24} />
                            <div>
                                <strong>Telefono:</strong>
                                <p>+51 977536934</p>
                            </div>
                        </div>
                        <div className="info-card__item">
                            <Mail size={24} />
                            <div>
                                <strong>Email:</strong>
                                <p>axolyph@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-card__item">
                            <Clock3 size={24} />
                            <div>
                                <strong>Horario:</strong>
                                <p>Lunes - Viernes: 9:00 AM - 6:00 PM<br />Sabados: 10:00 AM - 4:00 PM<br />Domingos: Cerrado</p>
                            </div>
                        </div>
                        <div className="info-card__item">
                            <MessageSquareMore size={24} />
                            <div>
                                <strong>Canales:</strong>
                                <p>WhatsApp, correo y formulario web.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

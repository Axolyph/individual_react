import { useState } from 'react';
import './LoginModal.css';
import { X, Lock, User, LogOut } from 'lucide-react';

const LoginModal = ({ isOpen, error, onClose, onLogin, onLogout, isLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ username, password });
    };

    const handleLogout = () => {
        onLogout?.();
        setUsername('');
        setPassword('');
        onClose();
    };

    return (
        <div className="login-modal__overlay" onClick={onClose}>
            <div className="login-modal__panel" onClick={(e) => e.stopPropagation()}>
                <button className="login-modal__close" onClick={onClose}><X size={22} /></button>
                <div className="login-modal__header">
                    <div className="login-modal__icon"><Lock size={26} /></div>
                    <h3>Acceso Admin</h3>
                    <p>Usa `admin` y `admin` para entrar.</p>
                </div>

                {isLoggedIn ? (
                    <div className="login-modal__logged">
                        <p>Sesión iniciada como administrador.</p>
                        <button className="login-modal__logout" onClick={handleLogout}>
                            <LogOut size={18} /> Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <form className="login-modal__form" onSubmit={handleSubmit}>
                        <label>
                            <span><User size={16} /> Usuario</span>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
                        </label>
                        <label>
                            <span><Lock size={16} /> Contraseña</span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="admin" />
                        </label>
                        {error ? <p className="login-modal__error">{error}</p> : null}
                        <button type="submit" className="login-modal__submit">Ingresar</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginModal;

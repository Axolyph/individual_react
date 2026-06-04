import './Categories.css';
import { Smartphone, Shirt, Watch } from 'lucide-react';

const Categories = ({ activeCategory, setCategory }) => {
    const cats = [
        { id: 'Todas', name: 'Todas', icon: null },
        { id: 'Electronicos', name: 'Electrónicos', icon: <Smartphone size={18} /> },
        { id: 'Ropa', name: 'Ropa', icon: <Shirt size={18} /> },
        { id: 'Accesorios', name: 'Accesorios', icon: <Watch size={18} /> }
    ];

    return (
        <div className="categories-filter">
            {cats.map(c => (
                <button
                    key={c.id}
                    className={`cat-btn ${activeCategory === c.id ? 'active' : ''}`}
                    onClick={() => setCategory(c.id)}
                >
                    {c.icon}
                    <span>{c.name}</span>
                </button>
            ))}
        </div>
    );
};

export default Categories;

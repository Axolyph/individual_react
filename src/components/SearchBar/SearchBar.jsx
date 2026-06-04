import './SearchBar.css';
import { Search } from 'lucide-react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-bar">
            <Search className="search-bar__icon" size={20} />
            <input
                type="text"
                placeholder="Buscar productos por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;

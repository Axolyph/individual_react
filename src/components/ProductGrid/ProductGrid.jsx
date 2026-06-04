import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ products, onSelectProduct }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
        </div>
    );
};

export default ProductGrid;

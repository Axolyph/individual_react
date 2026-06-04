import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import SearchBar from './components/SearchBar/SearchBar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import LoadingSkeleton from './components/LoadingSkeleton/LoadingSkeleton';
import ProductModal from './components/ProductModal/ProductModal';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Checkout from './components/Checkout/Checkout';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import Benefits from './components/Benefits/Benefits';
import LoginModal from './components/LoginModal/LoginModal';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from "./components/Footer/Footer";
import auriculares from './assets/auriculares.jpg';
import iphone from './assets/iphone.jpg';
import smartwatch from './assets/smartwacht.jpg';
import chaqueta from './assets/chaquetacuero.jpg';
import mochila from './assets/mochilaurbana.jpg';

// Generador de catálogo automatizado de 25 productos de ejemplo
const catalogoCompleto = [
  { id: 1, name: "Auriculares Inalámbricos Pro", price: "98.95", category: "Electronicos", rating: "4.8", inStock: true, discount: "15%", shortDesc: "Cancelación de ruido activa y batería de 40 horas continuas.", image: auriculares },
  { id: 2, name: "iPhone 14 PRO Max", price: "2500.00", category: "Electronicos", rating: "4.9", inStock: true, discount: null, shortDesc: "Pantalla Super Retina XDR y sistema de cámaras profesional.", image: iphone },
  { id: 3, name: "Smartwatch Sport Elite", price: "545.00", category: "Electronicos", rating: "4.7", inStock: true, discount: "10%", shortDesc: "Monitoreo cardíaco avanzado y GPS integrado multimodo.", image: smartwatch },
  { id: 4, name: "Chaqueta de Cuero Legacy", price: "180.00", category: "Ropa", rating: "4.9", inStock: true, discount: null, shortDesc: "Cuero genuino texturizado con acabados metálicos premium.", image: chaqueta },
  { id: 5, name: "Mochila Urbana Tech", price: "80.95", category: "Accesorios", rating: "4.6", inStock: false, discount: null, shortDesc: "Compartimento acolchado para laptop y puerto de carga USB exterior.", image: mochila },
  { id: 6, name: "Auriculares Wave Buds", price: "45.00", category: "Electronicos", rating: "4.4", inStock: true, discount: "20%", shortDesc: "Ajuste seguro ergonómico ideal para entrenamientos de alta intensidad.", image: auriculares },
  { id: 7, name: "Laptop HP Pavilion 16", price: "3200.00", category: "Electronicos", rating: "4.8", inStock: true, discount: null, shortDesc: "Procesador de última generación y pantalla micro-edge ultranítida.", image: iphone },
  { id: 8, name: "Tablet Nova Pad 12", price: "899.95", category: "Electronicos", rating: "4.5", inStock: true, discount: "25%", shortDesc: "Ideal para productividad y consumo multimedia con stylus integrado.", image: smartwatch },
  { id: 9, name: "Camisa Slim Fit Tropical", price: "65.00", category: "Ropa", rating: "4.7", inStock: true, discount: null, shortDesc: "Algodón premium respirable con patrón moderno de verano.", image: chaqueta },
  { id: 10, name: "Billetera Carbon Protect", price: "55.00", category: "Accesorios", rating: "4.9", inStock: true, discount: "30%", shortDesc: "Fibra de carbono real con bloqueo RFID anti-clonación.", image: mochila },
  ...Array.from({ length: 15 }, (_, index) => {
    const id = index + 11;
    const categorias = ["Electronicos", "Ropa", "Accesorios"];
    const catSelec = categorias[index % 3];
    const images = [auriculares, iphone, smartwatch, chaqueta, mochila];
    const imageSelected = images[index % images.length];
    return {
      id: id,
      name: `Producto Nova Premium ${id}`,
      price: (110.00 + id * 12).toFixed(2),
      category: catSelec,
      rating: (4.2 + (id % 8) * 0.1).toFixed(1),
      inStock: id % 4 !== 0,
      discount: id % 5 === 0 ? "10%" : null,
      shortDesc: `Disfruta del máximo confort y rendimiento con el nuevo e-commerce pack de NovaShop diseñado para exigentes.`,
      image: imageSelected
    };
  })
];

function App() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Todas');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState({
    open: false,
    paymentMethod: '',
    total: '0.00'
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    // Simulación de carga fluida para habilitar el esqueleto visual (Skeleton Loader)
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filtros Avanzados combinados (Categoría + Barra de búsqueda)
  const productosFiltrados = catalogoCompleto.filter(p => {
    const cumpleCat = category === 'Todas' || p.category === category;
    const cumpleSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return cumpleCat && cumpleSearch;
  });

  return (
    <div className="app-layout">
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onMenuOpen={() => setMenuOpen(true)}
        onLoginOpen={() => setLoginOpen(true)}
        isLoggedIn={isLoggedIn}
      />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <LoginModal
        isOpen={loginOpen}
        error={loginError}
        isLoggedIn={isLoggedIn}
        onClose={() => {
          setLoginOpen(false);
          setLoginError('');
        }}
        onLogin={({ username, password }) => {
          if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            setLoginError('');
            setLoginOpen(false);
            return true;
          }
          setLoginError('Usuario o contraseña incorrectos.');
          return false;
        }}
        onLogout={() => setIsLoggedIn(false)}
      />
      <ShoppingCart 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />
      <Checkout 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)}
        onSuccess={({ paymentMethod, total }) => setOrderSuccess({
          open: true,
          paymentMethod,
          total
        })}
      />
      <OrderSuccess 
        isOpen={orderSuccess.open} 
        paymentMethod={orderSuccess.paymentMethod}
        total={orderSuccess.total}
        onClose={() => {
          setOrderSuccess({ open: false, paymentMethod: '', total: '0.00' });
          setCartOpen(false);
        }}
      />

      <main>
        <Hero onLoginOpen={() => setLoginOpen(true)} />
        <Benefits />

        <section id="productos" className="container" style={{ paddingBottom: '5rem' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.2rem' }}>Catálogo Exclusivo</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Explora las mejores propuestas tecnológicas y de moda urbana.
          </p>

          <SearchBar search={search} setSearch={setSearch} />
          <Categories activeCategory={category} setCategory={setCategory} />

          {loading ? (
            <LoadingSkeleton />
          ) : (
            <ProductGrid products={productosFiltrados} onSelectProduct={setSelectedProduct} />
          )}
        </section>

        <ContactSection />
      </main>

      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa il Router e Routes
import Navbar from './components/Navbar'; // Importa la Navbar
import { CartProvider } from './context/CartContext'; // Importa il CartProvider
import ProductList from './components/ProductList'; // Importa la lista dei prodotti
import CheckoutPage from './components/pages/CheckoutPage'; // La pagina del checkout
import SuccessPage from './components/pages/SuccessPage'; // Importa la pagina di successo
import CancelledPage from './components/pages/CancelledPage';
import DisconnectedPage from './components/pages/DisconnectedPage';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import LoadingPage from './components/pages/LoadingPage';

const App = () => {
  return (
    <CartProvider> {/* Avvolgi tutto con il CartProvider */}
      <Router> {/* Aggiungi il Router per gestire le rotte */}
        <div className="min-h-screen bg-gray-900 flex flex-col bg-black">
          <main className="flex-1 container mx-auto p-4">
            <Navbar /> {/* Navbar visibile su tutte le pagine */}
            <Routes> {/* Aggiungi Routes per le diverse pagine */}
              {/* Home page con la lista dei prodotti */}
              <Route path="/" element={
                <>
                  <div className="flex items-center justify-center space-x-2 md:hidden">
                    <Link to="/">
                      <img
                        src="/images/SmartFarm.png"
                        alt="Logo"
                        className="h-16 cursor-pointer"
                      />
                    </Link>
                    <h1 className="text-xl font-bold text-white"></h1>
                  </div>

                  <ProductList /> {/* Visualizza la lista dei prodotti */}
                </>
              } />

              {/* Pagina del checkout */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* Pagina di successo */}
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/cancelled" element={<CancelledPage />} />
              <Route path="/disconnected" element={<DisconnectedPage />} />
              <Route path="/loading" element={<LoadingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

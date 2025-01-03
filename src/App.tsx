
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CheckoutPage from './components/pages/CheckoutPage';
import SuccessPage from './components/pages/SuccessPage';
import CancelledPage from './components/pages/CancelledPage';
import DisconnectedPage from './components/pages/DisconnectedPage';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import LoadingPage from './components/pages/LoadingPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 flex flex-col bg-black">
          <main className="flex-1 container mx-auto p-4">
            <Navbar />
            <Routes>
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

                  <ProductList />
                </>
              } />


              <Route path="/checkout" element={<CheckoutPage />} />


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

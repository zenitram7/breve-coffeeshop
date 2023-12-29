import Hero from './components/Hero';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';
import Category from './components/Category';
import BeansSection from './components/BeansSection';
import MerchSection from './components/MerchSection';
import Banner from './components/Banner';
import BrewGuidesSection from './components/BrewGuidesSection';
import NewsLetter from './components/NewsLetter';
import BottomFeatured from './components/BottomFeatured';
import Footer from './components/Footer';
import { CartContextProvider } from './context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart';


const App = () => {
  const [showCart, setShowCart] = useState(false);


  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart} />
        <MobileNavbar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <BeansSection />
        <MerchSection />
        <Banner />
        <BrewGuidesSection />
        <NewsLetter />
        <BottomFeatured />
        <Footer />
        {showCart && <Cart
          showCart={showCart} setShowCart={setShowCart}
        />}
      </main>
    </CartContextProvider>
  )
}

export default App; 

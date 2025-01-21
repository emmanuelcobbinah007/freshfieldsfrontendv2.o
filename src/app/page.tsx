import Hero from './components/Hero';
import Trust from './components/Trust';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';

export default function Home() {
    return (
      <div className="font-poppins">
        <Hero />
        <Trust />     
        <ProductCategories />
        <Footer />
      </div>  
    );
  }
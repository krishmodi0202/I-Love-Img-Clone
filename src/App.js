import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Pricing  from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Landing />
      <Products />
      <Pricing />
      <Features />
      <Footer />
      
    </div>
  );
}

export default App;

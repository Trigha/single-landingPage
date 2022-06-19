import Navbar from './component/navbar/navbar.jsx';
import Home from './component/home/home.jsx';
import About from './component/about/about.jsx';
import Pricing from './component/pricing/pricing.jsx';
import Footer from './component/footer/footer.jsx';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init({
      duration: 2000
    })
  } , [])
    
  return (
    <div className="App">
      <Navbar />
      <Home data-aos="fade-up" />
      <About data-aos="fade-up"/>
      <Pricing data-aos="fade-up"/>
      <Footer data-aos="fade-up"/>
    </div>
  );
}

export default App;

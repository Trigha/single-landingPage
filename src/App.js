import Navbar from './component/navbar/navbar.jsx';
import Home from './component/home/home.jsx';
import About from './component/about/about.jsx';
import Pricing from './component/pricing/pricing.jsx';
import Footer from './component/footer/footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

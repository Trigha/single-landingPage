import Navbar from './component/navbar/navbar.jsx';
import Home from './component/home/home.jsx';
import About from './component/about/about.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

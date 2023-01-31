import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DashBoard from './pages/DashBoard';
import Stock from './pages/Stock';
import Nav from './components/Nav';
import StockInfo from './pages/Stock';

function App() {
  return (
    <div className="App">
      <h1>♾️ StockTwits</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/stock/:stockInfo" element={<StockInfo />} />
        <Route path="/stock" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;

// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuListPage from './components/home/menuList/MenuListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<MenuListPage />} /> {/* Rute dinamis */}
      </Routes>
    </Router>
  );
};

export default App;

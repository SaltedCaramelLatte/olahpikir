// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Pastikan jalur ini benar

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Anda dapat menambahkan route untuk halaman lain di sini */}
      </Routes>
    </Router>
  );
};

export default App;

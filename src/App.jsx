import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CRUDPage from './pages/CRUDPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />  {/* Navbar akan muncul di setiap halaman */}
      <main className="min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 lg:px-20">
        <Outlet />  {/* Tempat komponen halaman yang dinamis akan dirender */}
      </main>
      <Footer />  {/* Footer juga akan muncul di setiap halaman */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="crud" element={<CRUDPage />} /> {/* Rute untuk halaman CRUD */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

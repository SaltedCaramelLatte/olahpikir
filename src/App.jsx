// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuListPage from './components/home/menuList/MenuListPage';
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
          <Route path="menu/:category" element={<MenuListPage />} /> {/* Rute dinamis */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

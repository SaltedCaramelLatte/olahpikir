import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuListPage from './components/home/menuList/MenuListPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuCRUD from './components/menuAdmin/MenuCRUD';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-light-background dark:bg-dark-background py-10 px-4 lg:px-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu/:category" element={<MenuListPage />} />
          <Route path="admin/menu" element={<MenuCRUD />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

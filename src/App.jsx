// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuListPage from './components/home/menuList/MenuListPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuCRUD from './components/menuAdmin/MenuCRUD';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import { Outlet } from 'react-router-dom';

// Layout component definition
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu/:category" element={<MenuListPage />} />
            <Route path="admin/menu" element={
              <ProtectedRoute>
                <MenuCRUD />
              </ProtectedRoute>
            } />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

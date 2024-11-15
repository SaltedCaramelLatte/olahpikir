// src/pages/LoginPage.js
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Halaman tujuan setelah login (default ke /admin/menu)
  const from = location.state?.from?.pathname || '/admin/menu';

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Login failed: ' + (error as any).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-background dark:bg-dark-background">
      <div className="bg-white dark:bg-dark-background text-light-text dark:text-dark-text shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-light-primary text-light-primary">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
            />
          </div>
          {error && (
            <p className="text-sm text-light-danger dark:text-dark-danger text-center">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded shadow hover:bg-light-accent dark:hover:bg-dark-accent focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

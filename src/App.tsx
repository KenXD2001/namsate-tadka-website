import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from '@/components/layout';
import { HomePage } from '@/pages';
import { env } from '@/config/env';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <title>{env.appTitle}</title>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/recipes" element={<div className="container py-20">Recipes Page - Coming Soon</div>} />
            <Route path="/categories" element={<div className="container py-20">Categories Page - Coming Soon</div>} />
            <Route path="/about" element={<div className="container py-20">About Page - Coming Soon</div>} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { env } from '@/config/env';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal-200 bg-cream">
      {/* Top Section: Logo (Centered) */}
      <div className="container flex justify-center items-center">
        <Link to="/home" className="group">
          <img
            src="/NamsteTadkaLogo.webp"
            alt={env.appName}
            className="h-40 w-auto transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </Link>
      </div>

      {/* Bottom Section: Menu Items (Centered, Same BG) */}
      <div className="border-t border-charcoal-200">
        <div className="container">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-12 py-3.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 py-1 ${
                  isActive(item.href)
                    ? 'text-saffron-600'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[15px] left-0 right-0 h-0.5 bg-saffron-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button (Centered) */}
          <div className="md:hidden flex items-center justify-center py-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:text-saffron-600 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Centered) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-charcoal-200 bg-cream">
            <nav className="container py-4 flex flex-col items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`w-full text-center py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isActive(item.href)
                      ? 'text-saffron-600'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

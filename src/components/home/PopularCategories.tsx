import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/recipe';

interface Category {
  name: string;
  count: number;
  image: string;
}

const categories: Category[] = [
  {
    name: 'Breakfast',
    count: 42,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
  },
  {
    name: 'Lunch',
    count: 68,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
  },
  {
    name: 'Dinner',
    count: 94,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
  },
  {
    name: 'Desserts',
    count: 57,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
  },
  {
    name: 'Smoothies',
    count: 31,
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=600&q=80',
  },
  {
    name: 'Pasta',
    count: 45,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
  },
];

export function PopularCategories() {
  const [hovered, setHovered] = useState<Category | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="container py-16 md:py-24" onMouseMove={handleMouseMove}>
      <SectionHeading
        title="Popular Categories"
        action={
          <Link
            to="/categories"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-saffron-600 transition-colors"
          >
            View All
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        }
      />

      {/* Editorial index list */}
      <div className="border-t border-charcoal-200" onMouseLeave={() => setHovered(null)}>
        {categories.map((category, index) => (
          <Link
            key={category.name}
            to="/categories"
            onMouseEnter={() => setHovered(category)}
            className="group relative flex items-center justify-between border-b border-charcoal-200 py-6 md:py-7 transition-colors duration-300 hover:bg-white"
          >
            {/* Number */}
            <span className="hidden md:block w-14 shrink-0 text-xs font-medium tabular-nums tracking-widest text-charcoal-400">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Name — large serif, indents on hover */}
            <h3 className="font-display flex-1 text-2xl md:text-4xl font-semibold text-charcoal-900 transition-all duration-400 group-hover:translate-x-3 group-hover:text-saffron-700">
              {category.name}
              {/* Inline thumbnail on mobile */}
              <img
                src={category.image}
                alt=""
                loading="lazy"
                className="ml-4 inline-block h-12 w-16 object-cover align-middle sm:hidden"
              />
            </h3>

            {/* Meta + arrow */}
            <div className="flex items-center gap-6 md:gap-10">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal-400 whitespace-nowrap">
                {category.count} Recipes
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-charcoal-200 text-charcoal-700 transition-all duration-300 group-hover:border-saffron-500 group-hover:bg-saffron-500 group-hover:text-white max-md:hidden">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating cursor-follow image preview (desktop only) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed z-40 hidden lg:block transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: cursor.x + 28,
          top: cursor.y - 110,
        }}
      >
        {hovered && (
          <img
            src={hovered.image}
            alt=""
            className="h-56 w-72 object-cover shadow-2xl shadow-charcoal-900/30 animate-[popIn_0.35s_ease-out]"
          />
        )}
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}

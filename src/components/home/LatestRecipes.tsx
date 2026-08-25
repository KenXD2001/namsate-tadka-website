import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/recipe';

interface LatestRecipe {
  id: string;
  title: string;
  image: string;
  time: string;
  addedOn: string;
  badge?: string;
}

const latestRecipes: LatestRecipe[] = [
  {
    id: '1',
    title: 'Kashmiri Rogan Josh',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    time: '70 min',
    addedOn: 'Aug 22',
    badge: 'New',
  },
  {
    id: '2',
    title: 'Palak Paneer',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&q=80',
    time: '35 min',
    addedOn: 'Aug 20',
    badge: 'Vegetarian',
  },
  {
    id: '3',
    title: 'Gulab Jamun',
    image: 'https://images.unsplash.com/photo-1601303516534-bf0b1eb70877?w=800&q=80',
    time: '45 min',
    addedOn: 'Aug 18',
    badge: 'New',
  },
  {
    id: '4',
    title: 'Mumbai Pav Bhaji',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    time: '40 min',
    addedOn: 'Aug 15',
  },
  {
    id: '5',
    title: 'Malabar Prawn Curry',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80',
    time: '50 min',
    addedOn: 'Aug 12',
    badge: 'Seafood',
  },
  {
    id: '6',
    title: 'Punjabi Kadhi Pakora',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&q=80',
    time: '55 min',
    addedOn: 'Aug 08',
    badge: 'Vegetarian',
  },
];

export function LatestRecipes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scrollBy = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Latest Recipes"
          action={
            <div className="flex items-center gap-3">
              <Link
                to="/recipes"
                className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-saffron-600 transition-colors mr-2"
              >
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => scrollBy(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="flex h-10 w-10 items-center justify-center border border-charcoal-300 text-charcoal-700 transition-all hover:border-saffron-500 hover:text-saffron-600 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="flex h-10 w-10 items-center justify-center border border-charcoal-300 text-charcoal-700 transition-all hover:border-saffron-500 hover:text-saffron-600 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
      </div>

      {/* Horizontal cookbook-style scroller */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="flex gap-5 overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
      >
        {latestRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to="/recipes"
            className="group w-[270px] shrink-0 snap-start md:w-[300px]"
          >
            {/* Image with badge + date */}
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-100">
              <img
                src={recipe.image}
                alt={recipe.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              {recipe.badge && (
                <span className="absolute top-0 left-0 bg-charcoal-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  {recipe.badge}
                </span>
              )}
              <span className="absolute top-0 right-0 bg-white/95 px-3 py-1.5 text-[11px] font-medium tracking-wide text-charcoal-700">
                {recipe.addedOn}
              </span>
            </div>

            {/* Text block */}
            <div className="pt-4 pb-1">
              <h3 className="font-display text-lg font-semibold leading-snug text-charcoal-900 group-hover:text-saffron-700 transition-colors">
                {recipe.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 border-t border-charcoal-200 pt-2.5 text-xs font-medium tracking-wide text-charcoal-500">
                <Clock className="h-3.5 w-3.5" />
                {recipe.time} cook time
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

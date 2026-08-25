import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/recipe';
import type { Recipe } from '@/components/recipe';

const superDelicious: Recipe[] = [
  {
    id: '1',
    title: 'Paneer Butter Masala',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
    rating: 4.9,
    time: '40 min',
    category: 'Main Course',
  },
  {
    id: '2',
    title: 'Dal Makhani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
    rating: 4.8,
    time: '55 min',
    category: 'Main Course',
  },
  {
    id: '3',
    title: 'Chole Bhature',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80',
    rating: 4.7,
    time: '50 min',
    category: 'Street Food',
  },
  {
    id: '4',
    title: 'Masala Dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80',
    rating: 4.9,
    time: '35 min',
    category: 'Breakfast',
  },
];

function EditorialCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to="/recipes" className="group block">
      {/* Sharp-cornered full-bleed image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Category label over image */}
        <span className="absolute top-0 left-0 bg-charcoal-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          {recipe.category}
        </span>
        {/* Arrow chip appears on hover */}
        <span className="absolute bottom-0 right-0 flex h-11 w-11 translate-y-full items-center justify-center bg-saffron-500 text-charcoal-900 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      {/* Text block — hierarchy via scale + whitespace, no shadows */}
      <div className="pt-5">
        <h3 className="font-display text-xl font-semibold leading-snug text-charcoal-900">
          <span className="bg-gradient-to-r from-saffron-500 to-saffron-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-400 group-hover:bg-[length:100%_2px]">
            {recipe.title}
          </span>
        </h3>
        <div className="mt-3 flex items-center gap-5 border-t border-charcoal-200 pt-3 text-[13px] font-medium tracking-wide text-charcoal-500">
          <span className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-saffron-500 text-saffron-500" />
            {recipe.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {recipe.time}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function SuperDelicious() {
  return (
    <section className="container py-16 md:py-24">
      <SectionHeading
        title="Super Delicious"
        action={
          <Link
            to="/recipes"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-saffron-600 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {superDelicious.map((recipe) => (
          <EditorialCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

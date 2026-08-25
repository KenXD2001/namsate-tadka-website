import { Link } from 'react-router-dom';
import { Star, Clock, Flame } from 'lucide-react';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  rating: number;
  time: string;
  category?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to="/recipes" className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {recipe.difficulty && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-charcoal-800">
            {recipe.difficulty}
          </span>
        )}
      </div>
      <div className="pt-4">
        {recipe.category && (
          <p className="text-xs font-semibold uppercase tracking-widest text-saffron-600 mb-1">
            {recipe.category}
          </p>
        )}
        <h3 className="font-display text-lg font-semibold text-charcoal-900 group-hover:text-saffron-700 transition-colors">
          {recipe.title}
        </h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-charcoal-500">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-saffron-400 text-saffron-400" />
            {recipe.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {recipe.time}
          </span>
          {recipe.difficulty === 'Hard' && (
            <span className="flex items-center gap-1">
              <Flame className="h-4 w-4 text-saffron-500" />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

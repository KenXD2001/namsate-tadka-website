import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/recipe';

interface Collection {
  title: string;
  description: string;
  count: number;
  image: string;
}

const collections: Collection[] = [
  {
    title: 'Weeknight Dinners',
    description: 'Under 40 minutes, big on flavour.',
    count: 24,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000&q=80',
  },
  {
    title: 'Festive Feasts',
    description: 'Celebration dishes for special occasions.',
    count: 18,
    image: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800&q=80',
  },
  {
    title: 'Comfort Classics',
    description: 'Warm, nostalgic dishes like home.',
    count: 31,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
  },
  {
    title: "Tiffin Box Favourites",
    description: 'Lunchbox-ready recipes kids love.',
    count: 22,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
];

function CollectionCell({
  collection,
  className,
}: {
  collection: Collection;
  className?: string;
}) {
  return (
    <Link
      to="/categories"
      className={`group relative block overflow-hidden bg-charcoal-900 ${className}`}
    >
      <img
        src={collection.image}
        alt={collection.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />
      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/25 to-transparent transition-opacity duration-500" />

      {/* Content pinned bottom-left */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron-400 mb-2">
          {collection.count} Recipes
        </p>
        <div className="flex items-end justify-between gap-3">
          <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight text-white">
            {collection.title}
          </h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 text-white transition-all duration-300 group-hover:bg-saffron-500 group-hover:border-saffron-500 group-hover:text-charcoal-900">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        {/* Description reveals on hover — desktop only */}
        <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 ease-out md:group-hover:max-h-10 md:group-hover:opacity-100">
          {collection.description}
        </p>
      </div>
    </Link>
  );
}

export function CuratedCollections() {
  return (
    <section className="container py-16 md:py-24">
      <SectionHeading
        title="Curated Collections"
        action={
          <Link
            to="/categories"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-saffron-600 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />

      {/* Asymmetric bento grid */}
      <div className="grid h-[560px] grid-cols-2 grid-rows-2 gap-3 md:h-[640px] lg:grid-cols-4 lg:gap-4">
        {/* Feature cell — spans 2x2 on desktop */}
        <CollectionCell collection={collections[0]} className="col-span-2 row-span-2" />
        <CollectionCell collection={collections[1]} />
        <CollectionCell collection={collections[2]} />
        <CollectionCell collection={collections[3]} className="col-span-2 lg:col-span-1" />
      </div>
    </section>
  );
}

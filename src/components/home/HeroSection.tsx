import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, Clock } from 'lucide-react';

interface Slide {
  title: string;
  tagline: string;
  image: string;
  approvalRate: number;
  time: string;
}

const slides: Slide[] = [
  {
    title: 'Paneer Chili Tikka',
    tagline: 'Charred, smoky and unapologetically bold.',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1400&q=80',
    approvalRate: 85,
    time: '30 min',
  },
  {
    title: 'Butter Chicken',
    tagline: 'The classic that needs no introduction.',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1400&q=80',
    approvalRate: 92,
    time: '45 min',
  },
  {
    title: 'Hyderabadi Biryani',
    tagline: 'Layers of patience, sealed in saffron.',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1400&q=80',
    approvalRate: 89,
    time: '60 min',
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section className="grid min-h-[calc(100vh-7rem)] lg:grid-cols-5">
      {/* Left: Editorial text panel */}
      <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:col-span-2 lg:p-16 xl:pl-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-saffron-600 mb-6">
          Recipe of the week
        </p>

        {/* Approval badge above title */}
        <div key={`badge-${current}`} className="animate-[fadeUp_0.6s_ease-out] mb-4">
          <span className="inline-flex items-center gap-2 border border-charcoal-200 px-4 py-1.5 text-sm font-medium text-charcoal-700 bg-white">
            <Star className="h-4 w-4 fill-saffron-500 text-saffron-500" />
            {slide.approvalRate}% would make this again
          </span>
        </div>

        {/* Title */}
        <h1
          key={current}
          className="font-display animate-[fadeUp_0.7s_ease-out] text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-charcoal-900"
        >
          {slide.title}
        </h1>

        <p
          key={`tag-${current}`}
          className="mt-5 max-w-md animate-[fadeUp_0.8s_ease-out] text-base leading-relaxed text-charcoal-500"
        >
          {slide.tagline}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal-400">
          <Clock className="h-4 w-4" />
          {slide.time} cook time · Serves 4
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/recipes"
            className="group inline-flex h-12 items-center gap-2 bg-charcoal-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-saffron-600"
          >
            View Recipe
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/categories"
            className="inline-flex h-12 items-center border-b-2 border-saffron-500 px-1 text-sm font-semibold text-charcoal-900 transition-colors hover:text-saffron-600"
          >
            Browse all recipes
          </Link>
        </div>

        {/* Carousel controls + progress */}
        <div className="mt-14 flex items-center gap-5">
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous recipe"
              className="flex h-11 w-11 items-center justify-center border border-charcoal-300 text-charcoal-700 transition-all hover:border-saffron-500 hover:text-saffron-600 active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next recipe"
              className="flex h-11 w-11 items-center justify-center border border-charcoal-300 text-charcoal-700 transition-all hover:border-saffron-500 hover:text-saffron-600 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {/* Progress indicators */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, index) => (
              <button
                key={s.title}
                onClick={() => setCurrent(index)}
                aria-label={`Go to ${s.title}`}
                className={`h-1 transition-all duration-400 ${
                  index === current ? 'w-10 bg-saffron-500' : 'w-4 bg-charcoal-300 hover:bg-charcoal-400'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium tabular-nums tracking-widest text-charcoal-400">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Right: Full-height image carousel */}
      <div className="relative min-h-[420px] lg:col-span-3 lg:min-h-0">
        {slides.map((s, index) => (
          <img
            key={s.title}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Subtle inner frame for editorial print feel */}
        <div className="pointer-events-none absolute inset-4 border border-white/25 hidden md:block" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

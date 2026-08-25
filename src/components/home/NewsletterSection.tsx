import { useState } from 'react';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { env } from '@/config/env';

const perks = [
  'One exclusive recipe every Sunday morning',
  'Seasonal collections before anyone else',
  'Chef tips and pantry shortcuts',
];

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section className="container pb-16 md:pb-24">
      <div className="grid border border-charcoal-200 bg-white lg:grid-cols-5">
        {/* Left: Editorial pitch (3 cols) */}
        <div className="px-6 py-14 md:px-12 md:py-16 lg:col-span-3 lg:p-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-saffron-600 mb-5">
            The Sunday Dispatch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-charcoal-900 max-w-md">
            Recipes worth{' '}
            <span className="underline decoration-saffron-500 decoration-[3px] underline-offset-8">
              slowing down
            </span>{' '}
            for.
          </h2>
          <ul className="mt-8 space-y-3.5 max-w-md">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-600">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                {perk}
              </li>
            ))}
          </ul>
          <p className="mt-10 flex items-center gap-3 text-xs tracking-wide text-charcoal-400">
            <span className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-white bg-saffron-600" />
              <span className="h-7 w-7 rounded-full border-2 border-white bg-charcoal-500" />
              <span className="h-7 w-7 rounded-full border-2 border-white bg-charcoal-700" />
            </span>
            Join <span className="font-semibold text-charcoal-800">28,000+</span> home cooks already subscribed
          </p>
        </div>

        {/* Right: Form panel (2 cols) */}
        <div className="border-t border-charcoal-200 lg:col-span-2 lg:border-l lg:border-t-0">
          <div className="flex h-full flex-col justify-center px-6 py-14 md:px-12 md:py-16 lg:p-12">
            {status === 'success' ? (
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center bg-saffron-500 mb-5">
                  <CheckCircle className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-charcoal-900">
                  You're in.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  Your first dispatch arrives this Sunday. Happy cooking!
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-charcoal-900">Get it free, weekly.</p>
                <p className="mt-1.5 text-sm text-charcoal-500">
                  No spam. Unsubscribe anytime.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="h-12 w-full border border-charcoal-300 bg-white px-4 text-sm text-charcoal-900 placeholder:text-charcoal-400 transition-colors focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-charcoal-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-saffron-600 active:scale-[0.98] disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Subscribe Free
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
                <p className="mt-5 text-xs leading-relaxed text-charcoal-400">
                  By subscribing you agree to our terms. Sent by {env.appName}.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

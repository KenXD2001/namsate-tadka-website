import { Link } from 'react-router-dom';
import { env } from '@/config/env';
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon } from '@/components/ui';

const footerLinks = [
  {
    heading: 'Namaste Tadka',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Feedback', href: '/feedback' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Conditions', href: '/conditions' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Copyright', href: '/copyright' },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { label: 'Facebook', href: '#' },
      { label: 'X (Twitter)', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'X (Twitter)', href: '#', Icon: XIcon },
  { label: 'YouTube', href: '#', Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Top Section */}
      <div className="container pt-16 md:pt-20 pb-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-24">
          {/* Left: Brand */}
          <div>
            <img
              src="/NamsteTadkaLogo.webp"
              alt={env.appName}
              className="h-48 w-auto invert"
            />
            <p className="mt-5 text-sm leading-relaxed text-charcoal-400 max-w-xs">
              Authentic Indian recipes with step-by-step instructions,
              curated collections and cooking tips — crafted for home
              cooks who love real flavour.
            </p>
          </div>

          {/* Right: Link columns */}
          <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {footerLinks.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6">
                  {column.heading}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-charcoal-400 transition-colors duration-200 hover:text-saffron-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Giant wordmark — type as architecture */}
      <div className="overflow-hidden px-4 select-none" aria-hidden="true">
        <h2 className="font-display font-bold text-center leading-[0.85] tracking-tight text-charcoal-800 whitespace-nowrap text-[13.5vw] translate-y-[18%]">
          {env.appName.toUpperCase()}
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-charcoal-800 bg-charcoal-900 relative z-10">
        <div className="container py-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs tracking-wide text-charcoal-500 text-center">
            © {new Date().getFullYear()} {env.appName}. All rights reserved.{' '}
            <span className="whitespace-nowrap">
              Made by <span className="font-medium text-charcoal-300">{env.appBuiltBy}</span>
            </span>
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-charcoal-500 transition-all duration-200 hover:text-saffron-400 hover:-translate-y-0.5"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

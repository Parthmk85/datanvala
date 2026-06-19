import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full z-20 flex justify-between items-center py-8 px-[6%]">
      <div className="font-heading text-3xl font-bold text-primary-green tracking-tight">
        NeemWala
      </div>
      <nav className="hidden md:flex gap-12">
        {[
          { name: 'Products', href: '#products-section' },
          { name: 'Our Story', href: '#story-section' },
          { name: 'Contact', href: '#contact-section' }
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-primary-green font-medium text-base relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary-green transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-6">
        <button className="hidden sm:block bg-transparent border border-primary-green px-7 py-2.5 rounded-full text-primary-green font-medium hover:bg-primary-green hover:text-cream-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-green/15">
          Shop Now
        </button>
      </div>
    </header>
  );
}

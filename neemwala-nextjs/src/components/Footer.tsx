"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const navigationLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Sustainability', href: '#' },
  { name: 'Impact', href: '#impact-section' },
  { name: 'FAQ', href: '#faq-section' },
];

const shopLinks = [
  { name: 'All Products', href: '#products-section' },
  { name: 'Neem Toothbrushes', href: '#' },
  { name: 'Organic Toothpaste', href: '#' },
  { name: 'Tongue Scrapers', href: '#' },
  { name: 'Gift Sets', href: '#' },
];

const socialLinks = [
  { name: 'Instagram', icon: FiInstagram, href: '#' },
  { name: 'Facebook', icon: FiFacebook, href: '#' },
  { name: 'Twitter', icon: FiTwitter, href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green pt-20 pb-10 px-[6%] text-cream-white relative z-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link 
              href="#" 
              className="font-heading text-3xl font-bold tracking-tight text-white mb-6 hover:opacity-80 transition-opacity"
              aria-label="NeemWala Home"
            >
              NeemWala.
            </Link>
            <p className="text-light-green/80 text-base leading-relaxed mb-8 max-w-sm">
              Crafting premium, sustainable oral care solutions from ancient wisdom. Because a healthy smile shouldn't cost the earth.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Follow us on ${social.name}`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light-green hover:bg-light-green hover:text-primary-green hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-heading text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-light-green/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links Column */}
          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="font-heading text-xl font-semibold mb-6 text-white">Shop</h3>
            <ul className="flex flex-col gap-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-light-green/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-light-green/60">
          <p>© {currentYear} NeemWala. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

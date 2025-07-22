'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 mt-6">
      <div className="bg-white shadow-2xl rounded-[24px] px-6 py-4 max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={220} height={220} />
         
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-medium text-black text-[20px] font-soehneKraeftig">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="https://docsend.com/view/584yys44vnrmdmpm" target='_blank' className="hover:opacity-80">Whitepaper</Link>
          <Link href="/blog" className="hover:opacity-80">Blog</Link>
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:flex flex-col items-end">
          <Link
            href="/pre-register"
            className="text-white px-10 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition tracking-tight text-[20px] font-soehneKraeftig"
            style={{
              background: 'linear-gradient(to right, #14F195, #399FE9, #7928D2)',
            }}
          >
            Pre-Register
          </Link>
          <p
            className="text-xs font-medium mt-1 text-[13px] font-soehneKraeftig"
            style={{ color: '#e4002b' }}
          >
            Token will launching in 190 Days to go.
          </p>
        </div>


        {/* Mobile: Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-[24px] max-w-7xl mx-auto mt-2 px-6 py-4 text-center space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block font-medium text-black">Home</Link>
          <Link href="/whitepaper" onClick={() => setMenuOpen(false)} className="block font-medium text-black">Whitepaper</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block font-medium text-black">Blog</Link>
          <Link
            href="/pre-register"
            className="block bg-gradient-to-r from-green-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md mx-auto w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Pre-Register
          </Link>
          <p className="text-xs text-red-600 font-medium">
            Token will launching in 190 Days to go.
          </p>
        </div>
      )}
    </header>
  );
}

import { ShoppingCart, Camera, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/80 ring-1 ring-white/10">
              <Camera size={18} className="text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">Aperture Pro</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm text-white/80 hover:text-white transition">Shop</a>
            <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
            <a href="#support" className="text-sm text-white/80 hover:text-white transition">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm md:flex">
              <Search size={16} className="text-white/70" />
              <input
                placeholder="Search cameras, lenses..."
                className="w-52 bg-transparent text-sm text-white placeholder-white/50 outline-none"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
              <ShoppingCart size={16} />
              Cart
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15" onClick={() => setOpen(v => !v)}>
              <Menu className="text-white" size={18} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-black/60 ring-1 ring-white/10 p-3">
            <a href="#products" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Shop</a>
            <a href="#features" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Features</a>
            <a href="#about" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">About</a>
            <a href="#support" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Support</a>
          </div>
        )}
      </div>
    </header>
  );
}

import { Star } from 'lucide-react';

const products = [
  {
    id: 'apex-x1',
    name: 'Apex X1',
    price: 2199,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'apex-x1-pro',
    name: 'Apex X1 Pro',
    price: 2899,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1495422964407-28c01bf82b26?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'vista-compact',
    name: 'Vista Compact',
    price: 999,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1489348611450-4c0d746d949b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'noct-lt',
    name: 'Noct LT',
    price: 1599,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Flagship Lineup</h2>
            <p className="mt-2 text-white/70">Precision‑built bodies, world‑class sensors, and cinematic color science.</p>
          </div>
          <a href="#" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90 transition sm:inline-flex">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{p.rating}</span>
                  </div>
                </div>
                <div className="mt-1 text-white/70">Mirrorless • 8K • IBIS</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xl font-semibold">${p.price}</div>
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

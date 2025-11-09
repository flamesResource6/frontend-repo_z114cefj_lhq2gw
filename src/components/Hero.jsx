import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Now Shipping Worldwide
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Capture Reality in 3D.
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Premium cameras engineered for creators. Stunning low‑light, razor‑sharp optics, and immersive 3D interactivity.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#products" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">Shop Cameras</a>
          <a href="#features" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition">Explore Features</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  );
}

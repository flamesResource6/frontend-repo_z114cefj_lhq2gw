import { Aperture, Zap, Shield, Focus } from 'lucide-react';

const features = [
  {
    icon: Aperture,
    title: 'Pro Optics',
    desc: 'Custom‑ground glass with nano‑coating for ultra‑sharp imagery and minimal chromatic aberration.'
  },
  {
    icon: Zap,
    title: 'Low‑Light Master',
    desc: 'Back‑illuminated sensor with dual native ISO for clean, detailed shots after dark.'
  },
  {
    icon: Focus,
    title: 'AI Autofocus',
    desc: 'Real‑time subject tracking with predictive algorithms for tack‑sharp results.'
  },
  {
    icon: Shield,
    title: 'Weather Sealed',
    desc: 'Magnesium alloy chassis with IP54 sealing for shoots in any condition.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Crafted for Creators</h2>
          <p className="mt-3 text-white/70">Every detail engineered to elevate your craft from concept to capture.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <f.icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

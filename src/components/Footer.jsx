export default function Footer() {
  return (
    <footer id="about" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Aperture Pro</h3>
            <p className="mt-2 text-sm text-white/70">Tools for image‑makers. We craft premium cameras and optics blending modern tech with minimalist design.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white/70">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#products" className="hover:text-white">Cameras</a></li>
              <li><a href="#" className="hover:text-white">Lenses</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white/70">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-white/70">Newsletter</h4>
            <p className="mt-3 text-sm text-white/70">Get product drops and creator stories.</p>
            <form className="mt-3 flex gap-2">
              <input className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 ring-1 ring-white/15 outline-none" placeholder="Email address" />
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Aperture Pro. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03070f]/pt-10 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-white">NRWA</p>
            <p className="mt-4 max-w-sm text-sm text-slate-400">A premium vocational academy for Nigerian residential electrical installation standards.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Learn</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Course modules</li>
              <li>Interactive diagrams</li>
              <li>AI Tutor</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Support</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Help center</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© 2026 Nigerian Residential Wiring Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

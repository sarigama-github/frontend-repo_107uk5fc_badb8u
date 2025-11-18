import React from 'react'
import Spline from '@splinetool/react-spline'
import LogoMark from './components/LogoMark'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ''

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E]">
      {/* Hero with Spline animation */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft cream overlay gradient for harmony; non-blocking pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF7F2]/90"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-xs tracking-widest uppercase">
            Ēdama luksusa ziedu kolekcija
          </div>
        </div>
      </div>

      {/* Brand header */}
      <section className="px-6 md:px-10 -mt-16 md:-mt-24 relative z-10">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-sm border border-black/5 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <LogoMark layout="stacked" scheme="charcoal" width={520} height={260} />
            <div className="flex-1 text-sm md:text-base text-[#494949] leading-relaxed">
              <p>
                Zefīru Ziedi apvieno delikātu zefīra tekstūru ar minimālistisku ziedu estētiku. Roku darbs, moderns un izsmalcināts – piemērots gan svētkiem, gan ikdienas baudai.
              </p>
            </div>
          </div>

          {/* Variations preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center justify-center h-40 rounded-xl bg-[#FAF7F2] border border-black/10">
              <LogoMark layout="horizontal" scheme="charcoal" width={320} height={120} />
            </div>
            <div className="flex items-center justify-center h-40 rounded-xl bg-white border border-black/10">
              <LogoMark layout="horizontal" scheme="blackOnWhite" width={320} height={120} />
            </div>
            <div className="flex items-center justify-center h-40 rounded-xl bg-[#111111] border border-black/20">
              <LogoMark layout="horizontal" scheme="whiteOnDark" width={320} height={120} />
            </div>
          </div>

          <div className="mt-10 text-xs text-[#6B6B6B]">
            Piezīme: Logotips ir veidots kā vektors ar vienkāršām, vienkrāsainām formām un darbojas gan gaišajos, gan tumšajos variantos.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-wide">Zefīru Ziedi</h3>
            <p className="text-sm text-[#6B6B6B]">Ēdama luksusa ziedu kolekcija</p>
          </div>
          <div className="md:text-right text-sm text-[#8C8C8C]">
            {backendUrl ? (
              <a href="/test" className="underline hover:no-underline">Sistēmas pārbaude</a>
            ) : (
              <span>© {new Date().getFullYear()} Zefīru Ziedi</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

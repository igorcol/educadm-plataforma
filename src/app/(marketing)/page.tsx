import { Button } from "../../components/ui/button"
import { VirtuesSection } from "../../components/sections/virtues-section"

export default function MarketingPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#E3000F] selection:text-white overflow-x-hidden w-full">
      
      {/* SEÇÃO 1: HERO */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-screen">
        {/* Background sutil para não ficar 100% chapado */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] background-size-[16px_16px] opacity-40"></div>
        
        <main className="max-w-4xl mx-auto px-6 text-center mt-[-10vh]">
          {/* Badge de Status / Gatilho de Novidade */}
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#E3000F] mr-2 animate-pulse"></span>
            Motor de Alta Performance v1.0
          </div>

          {/* Headline Agressiva */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#00204A] mb-6 leading-tight">
            O vestibular não espera. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E3000F] to-[#FFC72C]">
              Seu tempo também não.
            </span>
          </h1>

          {/* Sub-headline Focada na Dor */}
          <p className="mt-4 text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Zero fricção. O ecossistema desenhado para a rotina caótica do jovem DeMolay. De <strong>Sprints de 3 minutos</strong> no ônibus a simulados de <strong>Deep Work</strong> em casa.
          </p>

          {/* CTAs de Alta Conversão */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="demolay" className="h-14 px-8 text-base font-bold w-full sm:w-auto rounded-xl">
              Iniciar Sprint Agora
            </Button>
            <Button variant="outline" className="h-14 px-8 text-base font-semibold w-full sm:w-auto text-[#00204A] rounded-xl border-slate-300">
              Apresentação Institucional
            </Button>
          </div>
        </main>
      </div>

      {/* SEÇÃO 2: RELICÁRIO DE VIRTUDES & PATENTES */}
      <VirtuesSection />

    </div>
  )
}
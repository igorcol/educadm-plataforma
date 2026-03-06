import { Shield, Flame, Target, BookOpen } from "lucide-react";

export function VirtuesSection() {
  const features = [
    {
      icon: <Flame className="h-6 w-6 text-[#E3000F]" />,
      title: "Fidelidade (Streak)",
      description: "Mantenha o ritmo. Um streak de 7 dias seguidos acende o brasão da Fidelidade no seu painel.",
    },
    {
      icon: <Target className="h-6 w-6 text-[#00204A]" />,
      title: "Reverência (Deep Work)",
      description: "Foco absoluto. Complete 1 sessão de simulado ininterrupta e prove sua disciplina.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#FFC72C]" />,
      title: "Cortesia Intelectual",
      description: "Um líder aprende com os erros. Leia as justificativas das falhas e transforme atrito em sabedoria.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00204A] mb-4 tracking-tight">
            Não é apenas estudo. <br className="hidden md:block" />
            É construção de identidade.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            O sistema recompensa sua constância com a gramática da Ordem. O seu nível de domínio em cada universidade dita a sua patente militar: 
            <strong className="text-slate-800 font-medium"> de Forasteiro a Chevalier.</strong>
          </p>
        </div>

        {/* Barra de Progresso de Patentes Visuais */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hidden md:block">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-slate-100 -z-10 transform -translate-y-1/2 rounded-full"></div>
            <div className="absolute left-0 top-1/2 w-1/3 h-1 bg-[#00204A] -z-10 transform -translate-y-1/2 rounded-full"></div>
            
            {["Forasteiro", "Iniciático", "DeMolay", "Cavaleiro", "Chevalier"].map((patente, index) => (
              <div key={patente} className="flex flex-col items-center gap-2 bg-white px-2">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${index === 1 ? 'border-[#00204A] bg-[#00204A] text-white' : index < 1 ? 'border-[#00204A] bg-white text-[#00204A]' : 'border-slate-200 bg-white text-slate-400'}`}>
                  {index === 1 ? <Shield className="h-4 w-4" /> : <span className="text-xs font-bold">{index + 1}</span>}
                </div>
                <span className={`text-sm font-semibold ${index <= 1 ? 'text-[#00204A]' : 'text-slate-400'}`}>{patente}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards do Relicário de Virtudes */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
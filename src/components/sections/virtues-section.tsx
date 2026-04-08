"use client";

import { Shield, Flame, Target, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function VirtuesSection() {
  const features = [
    {
      num: "01",
      icon: Flame,
      hoverBgClass: "group-hover:bg-[#E3000F]",
      hoverTextClass: "group-hover:text-[#E3000F]",
      shadowClass: "group-hover:shadow-[0_0_30px_rgba(227,0,15,0.3)]",
      title: "Fidelidade (Streak)",
      description: "Mantenha o ritmo. Um streak de 7 dias seguidos acende o brasão da Fidelidade no seu painel.",
    },
    {
      num: "02",
      icon: Target,
      hoverBgClass: "group-hover:bg-[#00204A]",
      hoverTextClass: "group-hover:text-[#00204A]",
      shadowClass: "group-hover:shadow-[0_0_30px_rgba(0,32,74,0.3)]",
      title: "Reverência (Deep Work)",
      description: "Foco absoluto. Complete 1 sessão de simulado ininterrupta e prove sua disciplina.",
    },
    {
      num: "03",
      icon: BookOpen,
      hoverBgClass: "group-hover:bg-[#FFC72C]",
      hoverTextClass: "group-hover:text-[#D4A017]", // Dourado mais escuro pro texto não sumir no branco
      shadowClass: "group-hover:shadow-[0_0_30px_rgba(255,199,44,0.4)]",
      title: "Cortesia Intelectual",
      description: "Um líder aprende com os erros. Leia as justificativas das falhas e transforme atrito em sabedoria.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="virtudes" className="py-24 bg-slate-50 relative border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Título da Seção Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00204A] mb-6 tracking-tight">
            Não é apenas estudo. <br className="hidden md:block" />
            É construção de identidade.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light">
            O sistema recompensa sua constância. Seu nível de domínio em cada universidade dita sua patente: 
            <strong className="text-slate-900 font-semibold"> de Forasteiro a Chevalier.</strong>
          </p>
        </motion.div>

        {/* Barra de Patentes Animada (Mantivemos porque o visual da linha do tempo é excelente) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hidden md:block"
        >
          <div className="flex justify-between items-center relative px-4">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-slate-100 -z-10 transform -translate-y-1/2 rounded-full"></div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "33%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute left-0 top-1/2 h-1 bg-[#00204A] -z-10 transform -translate-y-1/2 rounded-full"
            ></motion.div>
            
            {["Forasteiro", "Iniciático", "DeMolay", "Cavaleiro", "Chevalier"].map((patente, index) => (
              <div key={patente} className="flex flex-col items-center gap-3 bg-white px-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors duration-500 delay-1000 ${index === 1 ? 'border-[#00204A] bg-[#00204A] text-white shadow-lg' : index < 1 ? 'border-[#00204A] bg-white text-[#00204A]' : 'border-slate-200 bg-white text-slate-400'}`}>
                  {index === 1 ? <Shield className="h-5 w-5" /> : <span className="text-sm font-bold">{index + 1}</span>}
                </div>
                <span className={`text-sm font-bold tracking-wide uppercase transition-colors duration-500 delay-1000 ${index <= 1 ? 'text-[#00204A]' : 'text-slate-400'}`}>{patente}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* O NOVO "QUEST LOG" (Zero Cards Clichês) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col w-full relative"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              // O "group" aqui é a magia. Ele rastreia o hover na linha inteira.
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-10 md:px-6 border-b border-slate-200 cursor-crosshair transition-all duration-300"
            >
              {/* O Background Fantasma que aparece no Hover */}
              <div className="absolute inset-0 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out rounded-3xl -z-10" />

              {/* Número Gigante da Missão */}
              <div className="text-4xl font-black text-slate-200 group-hover:text-slate-900 transition-colors duration-300 pl-2">
                {feature.num}
              </div>

              {/* Ícone com Mutação de Cor */}
              <div className={`relative h-16 w-16 shrink-0 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${feature.hoverBgClass} ${feature.shadowClass}`}>
                 <feature.icon className="h-8 w-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Conteúdo Textual */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-slate-900 mb-2 transition-colors duration-300 ${feature.hoverTextClass}`}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>

              {/* Call to Action Interativo Oculto */}
              <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-5 group-hover:translate-x-0 pr-4">
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Visualizar</span>
                <ArrowRight className="h-5 w-5 text-slate-900" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
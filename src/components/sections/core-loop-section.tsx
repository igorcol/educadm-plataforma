"use client";

import { useState } from "react";
import { Zap, Landmark, Clock, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CoreLoopSection() {
  const [activeMode, setActiveMode] = useState<"sprint" | "deep">("sprint");

  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header da Seção */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest"
          >
            O Mecanismo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#00204A] mb-6 tracking-tight"
          >
            Adaptável ao seu tempo.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light"
          >
            Não exija 2 horas de quem só tem 15 minutos. Escolha o ritmo da batalha.
          </motion.p>
        </div>

        {/* O Toggle Switch SaaS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex relative shadow-inner">
            <button
              onClick={() => setActiveMode("sprint")}
              className={`relative z-10 flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-colors duration-300 ${activeMode === "sprint" ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
            >
              <Zap className="h-5 w-5" />
              Sprint Mode
            </button>
            <button
              onClick={() => setActiveMode("deep")}
              className={`relative z-10 flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-colors duration-300 ${activeMode === "deep" ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
            >
              <Landmark className="h-5 w-5" />
              Deep Work
            </button>

            {/* Fundo Deslizante Animado */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-md ${activeMode === "sprint" ? "left-1.5 bg-[#E3000F]" : "left-[calc(50%+4.5px)] bg-[#00204A]"}`}
            />
          </div>
        </motion.div>

        {/* Vitrine Interativa (Mockup UI) */}
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-6 md:p-12 min-h-100 relative overflow-hidden flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeMode === "sprint" ? (
              <motion.div
                key="sprint"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    Micro-vitórias diárias.
                  </h3>
                  <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    Tá no busão? Na fila da cantina? 3 minutos são suficientes. Questões rápidas, diretas ao ponto e com feedback imediato. A dose de dopamina produtiva que você precisa.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-8 w-8 rounded-full bg-red-100 text-[#E3000F] flex items-center justify-center shrink-0"><Clock className="h-4 w-4" /></div>
                      Duração máxima de 3 a 5 minutos.
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-8 w-8 rounded-full bg-red-100 text-[#E3000F] flex items-center justify-center shrink-0"><Zap className="h-4 w-4" /></div>
                      Justificativa instantânea a cada erro.
                    </li>
                  </ul>
                </div>
                {/* Abstract UI Representation */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E3000F] rounded-t-2xl"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-slate-400">Questão 1/3</span>
                    <span className="text-sm font-bold text-[#E3000F] flex items-center gap-1"><Clock className="h-4 w-4" /> 02:45</span>
                  </div>
                  <div className="h-4 w-3/4 bg-slate-100 rounded mb-3"></div>
                  <div className="h-4 w-full bg-slate-100 rounded mb-8"></div>
                  <div className="space-y-3">
                    <div className="h-12 w-full border-2 border-slate-100 rounded-xl hover:border-[#E3000F] transition-colors cursor-pointer"></div>
                    <div className="h-12 w-full border-2 border-[#E3000F] bg-red-50 rounded-xl flex items-center px-4">
                      <div className="h-4 w-4 rounded-full bg-[#E3000F] mr-3"></div>
                      <div className="h-3 w-1/2 bg-[#E3000F]/20 rounded"></div>
                    </div>
                    <div className="h-12 w-full border-2 border-slate-100 rounded-xl hover:border-[#E3000F] transition-colors cursor-pointer"></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="deep"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    O simulador de guerra.
                  </h3>
                  <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    Chegou em casa e quer moer? Ativa o modo foco. Simulados reais da USP, UNICAMP e ENEM. Bloqueio de distrações, provas longas e o peso real que o vestibular exige.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-8 w-8 rounded-full bg-blue-100 text-[#00204A] flex items-center justify-center shrink-0"><Target className="h-4 w-4" /></div>
                      Provas completas de 90 questões.
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-8 w-8 rounded-full bg-blue-100 text-[#00204A] flex items-center justify-center shrink-0"><Landmark className="h-4 w-4" /></div>
                      Algoritmo de notas padrão SISU/FUVEST.
                    </li>
                  </ul>
                </div>
                {/* Abstract UI Representation */}
                <div className="bg-[#001533] rounded-2xl shadow-2xl border border-[#00204A] p-6 relative">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-slate-400">Simulado FUVEST</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1"><Clock className="h-4 w-4" /> 04:29:59</span>
                  </div>
                  <div className="h-4 w-full bg-slate-700 rounded mb-3"></div>
                  <div className="h-4 w-5/6 bg-slate-700 rounded mb-3"></div>
                  <div className="h-4 w-4/6 bg-slate-700 rounded mb-8"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 w-full bg-slate-800 rounded-xl border border-slate-700"></div>
                    <div className="h-16 w-full bg-[#00204A] rounded-xl border border-blue-500"></div>
                    <div className="h-16 w-full bg-slate-800 rounded-xl border border-slate-700"></div>
                    <div className="h-16 w-full bg-slate-800 rounded-xl border border-slate-700"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
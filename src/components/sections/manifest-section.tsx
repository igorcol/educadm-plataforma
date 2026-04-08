"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative w-full">
      {/* O Manifesto (Espaço em Branco Absoluto) */}
      <div className="py-32 bg-white text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Você já tem escola.<br/>Você já tem cursinho.
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            O Educa DeMolay SP não é mais uma obrigação na sua agenda. É o seu trunfo tático. Zero atrito. Sem PDFs infinitos. Se você precisa de mais de 3 cliques para começar a estudar, nosso design falhou. <br/><strong className="text-slate-900 font-medium">Nós não falhamos.</strong>
          </p>
        </motion.div>
      </div>

      {/* O Ponto de Não Retorno (Final CTA em Dark Mode) */}
      <div className="bg-[#001533] py-24 px-6 relative overflow-hidden border-t-4 border-[#E3000F]">
        {/* Glow de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#00204A] rounded-full blur-[100px] opacity-80 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            A concorrência está rolando o feed.
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#E3000F] to-[#FFC72C] mt-2">
              E você?
            </span>
          </h2>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="demolay" className="h-16 px-10 text-lg font-black w-full sm:w-auto rounded-xl shadow-[0_0_40px_rgba(227,0,15,0.4)] hover:scale-105 transition-transform duration-300">
              Acessar o Motor
            </Button>
          </div>
          
          <p className="mt-8 text-slate-400 text-sm font-medium">
            Acesso restrito a membros regulares da Ordem DeMolay.
          </p>
        </motion.div>
      </div>

      {/* Footer Minimalista & Institucional */}
      <footer className="bg-[#000B1A] py-10 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Instituição */}
          <div className="text-slate-500 text-sm font-medium text-center md:text-left leading-relaxed">
            © 2026 Educa DeMolay SP. <br className="md:hidden" />
            Um projeto oficial <strong className="text-white font-bold tracking-wide">GCESP</strong>.
          </div>

          {/* Assinatura do Desenvolvedor */}
          <div className="text-slate-600 text-xs font-medium text-center md:text-right">
            Arquitetura e Engenharia de Produto por <br className="md:hidden" />
            <span className="text-slate-400 hover:text-white transition-colors duration-300 font-semibold tracking-wide">
              Igor Costa Colombini
            </span>
          </div>

        </div>
      </footer>
    </section>
  );
}
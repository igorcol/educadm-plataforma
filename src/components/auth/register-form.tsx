"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Label } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

type City = "Sorocaba" | "Campinas" | "São Paulo";
const CHAPTERS_MOCK: Record<City, string[]> = {
  "Sorocaba": ["Tio Manoel Martins Filho"],
  "Campinas": ["Grande Campinas"],
  "São Paulo": ["Mozart"],
};

export function RegisterForm() {
  const [selectedCity, setSelectedCity] = useState<City | "">("");

  return (
    <motion.form 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-105 flex flex-col items-center gap-6"
    >
      
      {/* ── CARD ÚNICO E SÓLIDO (Padrão Stripe/Vercel) ── */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] p-7 sm:p-9 flex flex-col gap-6">
          
          <div className="space-y-4">
              <div className="space-y-1.5">
                  <Label htmlFor="nome" className="text-xs text-slate-500 font-bold">NOME COMPLETO</Label>
                  <Input 
                    id="nome" 
                    placeholder="Seu nome real e completo" 
                    required 
                    className="h-11 bg-white border-slate-200 rounded-lg shadow-sm hover:border-slate-300 focus:border-[#00204A] focus:ring-[#00204A]/10 transition-all"
                  />
              </div>
              <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                      <Label htmlFor="id_sisdm" className="text-xs text-slate-500 font-bold">ID SISDM</Label>
                      <Input 
                        id="id_sisdm" 
                        placeholder="Ex: 123456" 
                        type="number" 
                        required 
                        className="h-11 bg-white border-slate-200 rounded-lg shadow-sm hover:border-slate-300 focus:border-[#00204A] focus:ring-[#00204A]/10 transition-all"
                      />
                  </div>
                  <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs text-slate-500 font-bold">E-MAIL</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="guerreiro@email.com" 
                        required 
                        className="h-11 bg-white border-slate-200 rounded-lg shadow-sm hover:border-slate-300 focus:border-[#00204A] focus:ring-[#00204A]/10 transition-all"
                      />
                  </div>
              </div>
          </div>

          <div className="h-px w-full bg-slate-100 my-1" />

          <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                  <Label htmlFor="cidade" className="text-xs text-slate-500 font-bold">CIDADE</Label>
                  <select 
                      id="cidade" 
                      className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00204A]/10 focus-visible:border-[#00204A] hover:border-slate-300 transition-all shadow-sm appearance-none cursor-pointer"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value as City)}
                      required
                  >
                      <option value="" disabled>Selecione...</option>
                      {Object.keys(CHAPTERS_MOCK).map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
              </div>
              <div className="space-y-1.5">
                  <Label htmlFor="capitulo" className="text-xs text-slate-500 font-bold">CAPÍTULO</Label>
                  <select 
                      id="capitulo" 
                      className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00204A]/10 focus-visible:border-[#00204A] hover:border-slate-300 transition-all shadow-sm appearance-none disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
                      disabled={!selectedCity}
                      required
                  >
                      <option value="" disabled>{selectedCity ? "Selecione..." : "Aguardando cidade"}</option>
                      {selectedCity && CHAPTERS_MOCK[selectedCity].map(capitulo => <option key={capitulo} value={capitulo}>{capitulo}</option>)}
                  </select>
              </div>
          </div>

          {/* BOTÃO INTEGRADO AO CARD COM VERMELHO MAIS ELEGANTE */}
          <Button 
            className="w-full h-12 mt-2 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-lg font-bold text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            Criar Minha Conta
            <ChevronRight className="w-4 h-4" />
          </Button>

      </div>
    </motion.form>
  );
}
"use client";

import { motion } from "framer-motion";
import { Input, Label } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter(); 

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push("/"); 
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-105 flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
    >

      {/* ── CARD ÚNICO E SÓLIDO ── */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] p-7 sm:p-9 flex flex-col gap-6">

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="login" className="text-xs text-slate-500 font-bold uppercase">
              ID SISDM ou E-mail
            </Label>
            <Input
              id="login"
              placeholder="Sua credencial de acesso"
              required
              className="h-11 bg-white border-slate-200 rounded-lg shadow-sm hover:border-slate-300 focus:border-[#00204A] focus:ring-[#00204A]/10 transition-all"
            />
          </div>

          <div className="space-y-1.5 relative">
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="senha" className="text-xs text-slate-500 font-bold uppercase">
                Senha
              </Label>
              <a href="#" className="text-xs font-bold text-[#00204A] hover:text-[#E3000F] transition-colors leading-none pt-0.5">
                Esqueceu?
              </a>
            </div>
            <Input
              id="senha"
              type="password"
              placeholder="••••••••"
              required
              className="h-11 bg-white border-slate-200 rounded-lg shadow-sm hover:border-slate-300 focus:border-[#00204A] focus:ring-[#00204A]/10 transition-all relative z-0"
            />
          </div>
        </div>

        {/* BOTÃO INTEGRADO AO CARD */}
        <Button
          type="submit"
          className="w-full h-12 mt-2 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-lg font-bold text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
        >
          Entrar
          <ArrowRight className="w-4 h-4" />
        </Button>

      </div>
    </motion.form>
  );
}
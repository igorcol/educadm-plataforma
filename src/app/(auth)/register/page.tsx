import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
          Cadastre-se.
        </h1>
        <p className="text-sm text-slate-500 font-medium max-w-85 mx-auto leading-relaxed">
          A plataforma é restrita a membros regulares da Ordem DeMolay. Valide seus dados.
        </p>
      </div>

      <RegisterForm />

      <div className="mt-8 text-center text-sm text-slate-600 font-medium">
        Já possui credenciais?{" "}
        <Link href="/login" className="text-[#00204A] font-bold hover:text-[#E3000F] transition-colors underline decoration-dashed hover:decoration-solid underline-offset-4">
          Acessar o sistema
        </Link>
      </div>
    </>
  );
}
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
          Bem-vindo de volta.
        </h1>
        <p className="text-sm text-slate-500 font-medium max-w-85 mx-auto leading-relaxed">
          Acesse seu painel e continue sua trilha de domínio.
        </p>
      </div>

      <LoginForm />

      <div className="mt-8 text-center text-sm text-slate-600 font-medium">
        Ainda não tem acesso?{" "}
        <Link href="/register" className="text-[#00204A] font-bold hover:text-[#E3000F] transition-colors underline decoration-dashed hover:decoration-solid underline-offset-4">
          Solicitar autorização
        </Link>
      </div>
    </>
  );
}
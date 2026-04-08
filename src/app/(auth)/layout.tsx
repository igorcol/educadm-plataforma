import React from "react";
import Link from "next/link";
import { FloatingBadges } from "@/components/auth/floating-badges";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden font-sans antialiased">

      {/* Fundo Tático (Malha sutil e Glow centralizado) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid de fundo com bolinhas */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Nossa Grid SVG */}
        <GridPattern />

        {/* Nossos Badges Animados isolados no Client Side */}
        <FloatingBadges />

        {/* Glow sutil azulado no centro para ancorar o card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* BRANDING CENTRALIZADO NO TOPO */}
      <div className="absolute top-10 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <Link href="/" className="pointer-events-auto group flex items-center gap-2.5">
          <span className="text-2xl font-black text-[#00204A] tracking-tight group-hover:text-[#E3000F] transition-colors duration-300">
            Educa <span className="text-[#E3000F] group-hover:text-[#00204A] transition-colors duration-300">DM</span>
          </span>
        </Link>
      </div>

      {/* CONTAINER DO FORMULÁRIO (Atrito Zero) */}
      <div className="w-full max-w-110 px-6 relative z-10 mt-16 flex flex-col items-center">
        {children}
      </div>

    </div>
  );
}

// Grid Pattern (Server Component tbm, sem problemas)
const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="hero-grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x="50%"
        y="-1px"
      >
        <path
          d="M.5 40V.5H40"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
  </svg>
)
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Timer, Zap, Lock } from "lucide-react"
import React from "react"

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

const VIRTUDES_BADGES = [
    { label: "Fidelidade", rotate: -8, top: "14%", left: "8%" },
    { label: "Pureza", rotate: 6, top: "76%", left: "5%" },
    { label: "Patriotismo", rotate: -4, top: "16%", right: "7%" },
    { label: "Companheirismo", rotate: 7, top: "78%", right: "5%" },
    { label: "Cortesia", rotate: -5, top: "88%", left: "38%" },
]

const SPRINT_OPTIONS = [
    { label: "x ≤ −3 ou x ≥ 3", active: true },
    { label: "x ∈ ℝ", active: false },
    { label: "−3 ≤ x ≤ 3", active: false },
    { label: "x > 0", active: false },
]

const DETAILS = [
    { value: "5", label: "Universidades" },
    { value: "7", label: "Virtudes" },
    { value: "5", label: "Minutos" },
]

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
            style={{ background: "#ffffff" }}
        >
            {/* Fundo */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(ellipse 800px 500px at 50% 100%, rgba(225,29,72,0.04), transparent)",
                    }}
                />
                {/* Linha editorial de topo */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background:
                            "linear-gradient(90deg, #e11d48 0%, #e11d48 120px, #e2e8f0 120px, #e2e8f0 100%)",
                    }}
                />
            </div>

            {/* ── BADGES FLUTUANTES ── */}
            {VIRTUDES_BADGES.map((badge, i) => (
                <motion.div
                    key={badge.label}
                    className="absolute hidden xl:flex"
                    style={{
                        top: badge.top,
                        left: (badge as { left?: string }).left,
                        right: (badge as { right?: string }).right,
                        rotate: badge.rotate,
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -7, 0],
                    }}
                    transition={{
                        opacity: { delay: 0.5 + i * 0.1, duration: 0.5, ease },
                        scale: { delay: 0.5 + i * 0.1, duration: 0.5, ease },
                        y: {
                            delay: 0.9 + i * 0.1,
                            duration: 3.5 + i * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold select-none"
                        style={{
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            color: "#475569",
                            boxShadow: "0 2px 12px rgba(15,23,42,0.08)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <Lock className="w-2.5 h-2.5" style={{ color: "#94a3b8" }} />
                        {badge.label}
                    </span>
                </motion.div>
            ))}

            {/* ── CARD ESQUERDO: Virtude ── */}
            <motion.div
                className="absolute hidden xl:block"
                style={{ left: "3%", top: "50%", y: "-50%", rotate: -2 }}
                initial={{ opacity: 0, x: -56 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
            >
                <div
                    className="w-62 rounded-2xl p-4 flex items-center gap-3"
                    style={{
                        background: "#fffbeb",
                        border: "1px solid #fde68a",
                        boxShadow: "0 8px 40px rgba(15,23,42,0.1), 0 1px 4px rgba(15,23,42,0.04)",
                    }}
                >
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base"
                        style={{ background: "#fef3c7", border: "1px solid #fde68a" }}
                    >
                        ⚔️
                    </div>
                    <div className="min-w-0">
                        <div
                            className="text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5"
                            style={{ color: "#b45309" }}
                        >
                            Virtude Desbloqueada
                        </div>
                        <div className="text-[14px] font-bold" style={{ color: "#0f172a" }}>
                            Cortesia
                        </div>
                        <div className="text-[12px]" style={{ color: "#92400e" }}>
                            +150 XP · 3 dias consecutivos
                        </div>
                    </div>
                </div>

                {/* Card secundário — Deep Work, logo abaixo */}
                <div
                    className="mt-3 w-62 rounded-xl p-3.5 flex items-center justify-between"
                    style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
                    }}
                >
                    <div>
                        <div
                            className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                            style={{ color: "#94a3b8" }}
                        >
                            Deep Work Mode
                        </div>
                        <div className="text-[13px] font-semibold" style={{ color: "#0f172a" }}>
                            Simulado FUVEST 2024
                        </div>
                    </div>
                    <div
                        className="text-[11px] font-bold px-2 py-1 rounded-sm shrink-0"
                        style={{
                            background: "#fef3c7",
                            color: "#b45309",
                            border: "1px solid #fde68a",
                        }}
                    >
                        90 questões
                    </div>
                </div>
            </motion.div>

            {/* ── CARD DIREITO: Sprint ── */}
            <motion.div
                className="absolute hidden xl:block"
                style={{ right: "3%", top: "50%", y: "-50%", rotate: 2 }}
                initial={{ opacity: 0, x: 56 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
            >
                <div
                    className="relative overflow-hidden w-70 rounded-2xl p-5"
                    style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 8px 40px rgba(15,23,42,0.1), 0 1px 4px rgba(15,23,42,0.04)",
                    }}
                >
                    {/* Barra de progresso no topo */}
                    <div
                        className="absolute top-0 left-0 right-0"
                        style={{ height: "3px", background: "#f1f5f9" }}
                    >
                        <div className="h-full" style={{ width: "40%", background: "#e11d48" }} />
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 mt-1">
                        <div className="flex items-center gap-1.5">
                            <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ background: "#e11d48" }}
                            />
                            <span
                                className="text-[11px] font-bold uppercase tracking-[0.12em]"
                                style={{ color: "#e11d48" }}
                            >
                                Sprint Mode
                            </span>
                        </div>
                        <div className="flex items-center gap-1" style={{ color: "#e11d48" }}>
                            <Timer className="w-3.5 h-3.5" />
                            <span className="text-[13px] font-bold tabular-nums">04:23</span>
                        </div>
                    </div>

                    {/* Matéria */}
                    <div
                        className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
                        style={{ color: "#94a3b8" }}
                    >
                        Matemática · Funções
                    </div>

                    {/* Questão */}
                    <p
                        className="text-[14px] font-semibold leading-snug mb-4"
                        style={{ color: "#0f172a" }}
                    >
                        Qual é o domínio da função f(x) = √(x² − 9)?
                    </p>

                    {/* Opções */}
                    <div className="flex flex-col gap-1.5">
                        {SPRINT_OPTIONS.map((opt, i) => (
                            <div
                                key={i}
                                className="text-[12px] px-2.5 py-2 rounded-lg"
                                style={
                                    opt.active
                                        ? {
                                            background: "#fff1f2",
                                            border: "1px solid #fecdd3",
                                            borderLeftWidth: "3px",
                                            borderLeftColor: "#e11d48",
                                            color: "#0f172a",
                                            fontWeight: 600,
                                        }
                                        : {
                                            border: "1px solid #f1f5f9",
                                            background: "#f8fafc",
                                            color: "#64748b",
                                        }
                                }
                            >
                                {String.fromCharCode(65 + i)}. {opt.label}
                            </div>
                        ))}
                    </div>

                    {/* Footer progresso */}
                    <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid #f1f5f9" }}>
                        <span className="text-[11px]" style={{ color: "#94a3b8" }}>
                            Questão 2 de 5
                        </span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <div
                                    key={n}
                                    className="w-4 h-1 rounded-full"
                                    style={{ background: n <= 2 ? "#e11d48" : "#f1f5f9" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── CENTRO: conteúdo principal ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-135 w-full">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0, ease }}
                    className="mb-8"
                >
                    <span
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                        style={{
                            border: "1px solid #e2e8f0",
                            background: "transparent",
                        }}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ background: "#e11d48" }}
                        />
                        <span
                            className="text-[11px] font-semibold uppercase tracking-widest"
                            style={{ color: "#94a3b8" }}
                        >
                            Educa DeMolay SP · Beta Aberta
                        </span>
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08, ease }}
                    className="mb-6"
                    style={{ letterSpacing: "-0.03em", lineHeight: 0.95 }}
                >
                    <span
                        className="block"
                        style={{
                            fontSize: "clamp(44px, 5.5vw, 72px)",
                            fontWeight: 300,
                            color: "#94a3b8",
                        }}
                    >
                        Não é cursinho.
                    </span>
                    <span
                        className="block"
                        style={{
                            fontSize: "clamp(44px, 5.5vw, 72px)",
                            fontWeight: 800,
                            color: "#0f172a",
                        }}
                    >
                        É companheiro
                    </span>
                    <span
                        className="block"
                        style={{
                            fontSize: "clamp(44px, 5.5vw, 72px)",
                            fontWeight: 800,
                            color: "#0f172a",
                        }}
                    >
                        de guerra.
                    </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.18, ease }}
                    className="text-[16px] leading-relaxed mb-10"
                    style={{ color: "#64748b", maxWidth: "400px" }}
                >
                    Sprints de{" "}
                    <strong style={{ color: "#0f172a", fontWeight: 700 }}>5 minutos</strong> no ônibus.
                    Simulados de{" "}
                    <strong style={{ color: "#0f172a", fontWeight: 700 }}>profundidade real</strong> em casa.
                    O método de quem carrega a Ordem.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.26, ease }}
                    className="flex flex-col sm:flex-row items-center gap-3 mb-12"
                >
                    <button
                        className="group relative overflow-hidden flex items-center gap-2 font-bold text-[15px] tracking-[0.01em] px-7 py-3.5 rounded-sm"
                        style={{ background: "#e11d48", color: "#ffffff" }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Iniciar Sprint Agora
                        </span>
                        <span
                            className="absolute inset-0 -translate-x-full group-hover:translate-x-0"
                            style={{
                                background: "#be123c",
                                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                            }}
                        />
                    </button>

                    <button
                        className="group flex items-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded-sm"
                        style={{
                            background: "transparent",
                            border: "1px solid #e2e8f0",
                            color: "#0f172a",
                            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e11d48"
                                ; (e.currentTarget as HTMLButtonElement).style.color = "#e11d48"
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0"
                                ; (e.currentTarget as HTMLButtonElement).style.color = "#0f172a"
                        }}
                    >
                        Ver como funciona
                        <ArrowRight
                            className="w-4 h-4 group-hover:translate-x-1"
                            style={{ transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                        />
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.44, ease }}
                    className="flex items-center gap-8 pt-6"
                    style={{ borderTop: "1px solid #f1f5f9" }}
                >
                    {DETAILS.map((stat, i) => (
                        <React.Fragment key={stat.label}>
                            {i > 0 && (
                                <div className="h-8 w-px" style={{ background: "#e2e8f0" }} />
                            )}
                            <div className="text-center">
                                <div
                                    style={{
                                        fontSize: "clamp(28px, 3vw, 38px)",
                                        fontWeight: 800,
                                        color: "#0f172a",
                                        lineHeight: 1,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.12em",
                                        color: "#94a3b8",
                                        marginTop: "3px",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            {/* Mobile: cards empilhados abaixo do conteúdo (xl ocultos acima) */}
            <div className="absolute bottom-8 left-4 right-4 flex gap-3 xl:hidden justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease }}
                    className="w-full max-w-70"
                >
                    <div
                        className="rounded-xl p-3 flex items-center gap-3"
                        style={{
                            background: "#fffbeb",
                            border: "1px solid #fde68a",
                            boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
                        }}
                    >
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm"
                            style={{ background: "#fef3c7", border: "1px solid #fde68a" }}
                        >
                            ⚔️
                        </div>
                        <div>
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: "#b45309" }}>
                                Virtude Desbloqueada
                            </div>
                            <div className="text-[13px] font-bold" style={{ color: "#0f172a" }}>
                                Cortesia · +150 XP
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

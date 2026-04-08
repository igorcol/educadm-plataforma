"use client"

import { motion } from "framer-motion"
import { Lock } from "lucide-react"

const VIRTUDES_BADGES = [
    // Topo Esquerdo
    { label: "Fidelidade", rotate: -12, top: "22%", left: "14%" },

    // Topo Direito
    { label: "Patriotismo", rotate: 8, top: "18%", right: "16%" },

    // Meio/Baixo Esquerdo
    { label: "Pureza", rotate: 6, top: "65%", left: "10%" },

    // Baixo Direito
    { label: "Companheirismo", rotate: -5, top: "72%", right: "14%" },

    // Baixo Centro-Esquerdo
    { label: "Cortesia", rotate: 3, top: "80%", left: "26%" },
]

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function FloatingBadges() {
    return (
        <>
            {VIRTUDES_BADGES.map((badge, i) => (
                <motion.div
                    key={badge.label}
                    className="absolute hidden xl:flex z-999"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold select-none bg-white border border-slate-200 text-slate-600 shadow-[0_2px_12px_rgba(15,23,42,0.08)] whitespace-nowrap"
                    >
                        <Lock className="w-2.5 h-2.5 text-slate-400" />
                        {badge.label}
                    </span>
                </motion.div>
            ))}
        </>
    )
}
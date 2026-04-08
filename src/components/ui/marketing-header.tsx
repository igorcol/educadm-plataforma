"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const NAV_LINKS = [
  { label: "Virtudes",       href: "#virtudes"       },
  { label: "Como Funciona",  href: "#como-funciona"  },
  { label: "Manifesto",      href: "#manifesto"      },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      style={{ paddingTop: "16px", paddingLeft: "16px", paddingRight: "16px" }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="pointer-events-auto flex items-center justify-between w-full px-6 py-3.5"
        style={{
          maxWidth: "920px",
          borderRadius: "14px",
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.88)",
          border: "1px solid #e2e8f0",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(15,23,42,0.1), 0 1px 4px rgba(15,23,42,0.06)"
            : "0 2px 16px rgba(15,23,42,0.07), 0 1px 3px rgba(15,23,42,0.04)",
          transition: "box-shadow 0.35s ease, background 0.35s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
          className="flex items-center gap-1.5 no-underline select-none"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f172a",
            }}
          >
            Educa
          </span>
          <span
            style={{
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#e11d48",
            }}
          >
            DM
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[14px] font-medium px-4 py-2 rounded-lg"
              style={{
                color: "#64748b",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "#0f172a"
                ;(e.currentTarget as HTMLButtonElement).style.background = "#f8fafc"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = "#64748b"
                ;(e.currentTarget as HTMLButtonElement).style.background = "transparent"
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="text-[14px] font-bold"
          style={{
            background: "#e11d48",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            padding: "10px 28px",
            borderRadius: "8px",
            letterSpacing: "0.01em",
            transition: "background 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#be123c"
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(225,29,72,0.3)"
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#e11d48"
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "none"
          }}
        >
          Entrar
        </button>
      </div>
    </motion.header>
  )
}
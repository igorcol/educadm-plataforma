"use client";

import { VirtuesSection } from "../../components/sections/virtues-section"
import { CoreLoopSection } from "@/components/sections/core-loop-section";
import { ManifestoSection } from "@/components/sections/manifest-section";
import HeroSection from "@/components/sections/hero-sectiont";

export default function MarketingPage() {
  return (
    <div className="overflow-x-hidden w-full">
      
      {/* SEÇÃO 1: HERO */}
      <HeroSection/>

      {/* SEÇÃO 2: RELICÁRIO DE VIRTUDES & PATENTES */}
      <VirtuesSection />

      {/* SEÇÃO 3: O CORE LOOP (NOVO) */}
      <CoreLoopSection />

      {/* SEÇÃO 4: MANIFESTO & CTA (NOVO) */}
      <ManifestoSection />

    </div>
  )
}
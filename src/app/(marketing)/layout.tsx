import React from "react"
import { MarketingHeader } from "@/components/ui/marketing-header"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarketingHeader />
      {children}
    </>
  )
}

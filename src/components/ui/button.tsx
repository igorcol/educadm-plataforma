import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "demolay";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
          {
            // Azul Institucional (Sóbrio, focado)
            "bg-[#00204A] text-white hover:bg-[#001533] shadow-sm": variant === "default", 
            // Vermelho DeMolay agressivo (Para Sprints, com leve glow)
            "bg-[#E3000F] text-white hover:bg-[#B3000B] shadow-[0_0_15px_rgba(227,0,15,0.3)] hover:shadow-[0_0_20px_rgba(227,0,15,0.5)]": variant === "demolay",
            // Fantasma com borda (Ações secundárias)
            "border border-slate-200 bg-white hover:bg-slate-50 text-slate-900": variant === "outline",
            // Invisível até passar o mouse
            "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
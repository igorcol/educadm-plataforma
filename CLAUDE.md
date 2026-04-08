# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto
Landing page + portal de estudos para vestibulandos DeMolay do Estado de SP.
Stack: Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Comandos

```bash
npm run dev      # servidor local
npm run build    # build de produção
npm run lint     # ESLint
```

Não há testes automatizados no projeto atualmente.

## Arquitetura

```
src/
  app/
    (marketing)/page.tsx   # landing page — única rota pública até agora
    layout.tsx             # root layout (fonte, globals.css)
  components/
    sections/              # seções da landing, cada uma é um componente independente
    ui/                    # componentes primitivos reutilizáveis (ex: button.tsx)
  lib/
    utils.ts               # utilitário cn() = clsx + tailwind-merge
docs/
  DESIGN.md                # sistema de design — LEIA ANTES de qualquer UI
```

A página de marketing em `src/app/(marketing)/page.tsx` orquestra as seções em ordem: Hero → Virtues → CoreLoop → Manifesto. O arquivo é `"use client"` por causa do Framer Motion usado nas seções filhas.

## Antes de qualquer tarefa de UI
Leia `docs/DESIGN.md`. Sem exceção. Todas as decisões visuais seguem aquele documento.

Resumo dos pontos críticos do design system:
- Fundo `slate-950` (#020617), nunca fundo branco como tema
- Acento de ação: `rose-600` (#e11d48) — CTA, urgência
- Acento de conquista: `amber-400` (#fbbf24) — virtudes, gamificação
- Fonte: **Plus Jakarta Sans** (não Inter, não Roboto)
- Títulos: mínimo 64px, line-height 0.95–1.05, letter-spacing -0.03em
- Botão primário: border-radius 4px (quase sem arredondamento), hover com fill slide, nunca `opacity: 0.8`
- Cards: `slate-900` bg, border `slate-800`, sem box-shadow
- Padding mínimo por seção: 140px desktop / 80px mobile
- Animações com `cubic-bezier(0.16, 1, 0.3, 1)`, reveals 500–700ms, stagger 80ms por filho

## Contexto do produto
- Dual-Mode: Sprint Mode (3-5min, mobile) e Deep Work Mode (simulados)
- Gamificação com as 7 Virtudes Cardeais da Ordem DeMolay
- Persona: membro 17-19 anos, vestibulando, mobile-first

## Regras de código
- TypeScript strict, sem `any`
- Tailwind para estilo — sem CSS inline sem necessidade
- Componentes `"use client"` só quando necessário (Framer Motion, handlers)
- Sem comentários óbvios no código
- Use `cn()` de `@/lib/utils` para classes condicionais

## Tom do produto
De DeMolay para DeMolay. Não é cursinho, é companheiro de guerra.

# DESIGN SYSTEM — Educa DeMolay SP

Leia este arquivo antes de qualquer decisão de UI. Sem exceção.

---

## Filosofia

Sites genéricos nascem de decisões padrão. Sites premium nascem de decisões intencionais.
Esse projeto precisa que alguém bata o olho e pense "esse SaaS vale R$ 30.000".
Fundo branco + texto centralizado + botão vermelho = cursinho genérico. Não é isso.

---

## Paleta

```css
:root {
  --bg:        #020617; /* slate-950 — fundo principal */
  --surface:   #0f172a; /* slate-900 — cards e superfícies */
  --surface-2: #1e293b; /* slate-800 — hover states */
  --border:    #1e293b; /* bordas sutis */
  --fg:        #f1f5f9; /* texto principal */
  --muted:     #64748b; /* texto secundário */
  --accent:    #e11d48; /* rose-600 — ação, CTA, urgência */
  --gold:      #fbbf24; /* amber-400 — virtudes, conquistas, sucesso */
  --accent-glow: rgba(225, 29, 72, 0.15);
  --gold-glow:   rgba(251, 191, 36, 0.15);
}
```

Regra: 1 cor dominante (bg escuro), 1 acento de ação (rose), 1 acento de conquista (gold). Nunca distribuição igual.

---

## Tipografia

```css
/* Import no head */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

font-family: 'Plus Jakarta Sans', sans-serif;
```

Regras:
- Títulos hero: mínimo 64px, line-height 0.95–1.05, letter-spacing -0.03em
- Nunca peso padrão — use 300, 700 e 800 para criar contraste dramático
- Saltos dramáticos: 14px / 16px / 52px / 80px — nunca sequencial
- Mix de peso na mesma linha: palavra leve + palavra bold = sofisticação

---

## Layout

- Fundo escuro como base. Seção clara é exceção, não regra.
- Padding vertical mínimo por seção: 140px desktop, 80px mobile
- Container: max-width 1200px, mas texto corrido máximo 680px
- Quebrar o grid com intenção: elementos que sangram, assimetria 70/30
- Negative space generoso — sites caros respiram

---

## Componentes

### Botão Primário
```css
background: var(--accent);
color: white;
padding: 14px 28px;
border-radius: 4px; /* quase sem radius */
font-weight: 700;
font-size: 15px;
letter-spacing: 0.01em;
border: none;
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

/* Hover: fill da esquerda para direita via pseudo-elemento */
/* NUNCA opacity: 0.8 no hover */
```

### Botão Secundário
```css
background: transparent;
border: 1px solid var(--border);
color: var(--fg);
/* Hover: border muda para accent, texto muda para accent */
```

### Cards
```css
background: var(--surface);
border: 1px solid var(--border);
border-radius: 12px;
/* Sem box-shadow */
/* Hover: border-color muda para accent com transition */
```

### Badge / Pill
```css
background: transparent;
border: 1px solid var(--border);
color: var(--muted);
padding: 6px 14px;
border-radius: 999px;
font-size: 12px;
font-weight: 500;
/* Ponto colorido antes do texto: cor accent ou gold */
```

---

## Animações

```css
/* Easing premium — usar em TUDO */
--ease: cubic-bezier(0.16, 1, 0.3, 1);

/* Reveal de entrada */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Duração: 500ms–700ms para reveals, 200ms para hovers */
/* Staggered: cada filho com delay de 80ms a mais */
```

---

## Detalhes que fazem a diferença

```css
/* Scrollbar customizada */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 3px; }

/* Selection color */
::selection { background: var(--accent-glow); color: var(--fg); }

/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Glow sutil em elementos de destaque */
.glow-accent { box-shadow: 0 0 40px var(--accent-glow); }
.glow-gold   { box-shadow: 0 0 40px var(--gold-glow); }
```

---

## O que NUNCA fazer

- Fundo branco como tema principal
- Layout 100% centralizado em todas as seções
- border-radius: 9999px em botão principal
- box-shadow genérico como único efeito de hover
- opacity: 0.8 no hover de qualquer coisa
- Gradiente roxo/azul
- Font Inter ou Roboto sem justificativa
- Mais de 2 cores de acento
- Seções sem personalidade — cada seção tem que ter uma "decisão"

---

## Checklist antes de entregar qualquer componente

- [ ] Está no tema escuro?
- [ ] A tipografia tem personalidade (peso, tamanho, spacing)?
- [ ] Tem pelo menos um elemento que quebra o padrão?
- [ ] Os espaçamentos são generosos?
- [ ] O hover é satisfatório (não só opacity)?
- [ ] Alguém bateria o olho e falaria "esse site vale R$ 30.000"?

Se qualquer resposta for não — refaz.
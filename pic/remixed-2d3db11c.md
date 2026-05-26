---
name: frontend-design-pro
description: Create distinctive, production-grade frontend interfaces with exceptional UX/UI quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics — with intentional theme consistency, clickable CTAs, and user-centered interaction design.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details, UX clarity, interaction design, and a cohesive visual theme from start to finish.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

---

## Step 1: Design Thinking (Before Writing Any Code)

Before a single line of code is written, think deeply about:

### 1.1 Purpose & User
- **What problem does this interface solve?**
- **Who is the user?** (age group, context, device preference, tech-savviness)
- **What action should the user take?** Identify the primary CTA and design everything to support it.
- **What feeling should the user have?** Trust? Excitement? Calm? Urgency?

### 1.2 Commit to a Bold Aesthetic Direction
Pick ONE clear visual tone and execute it with precision. Examples:

| Tone | Character |
|------|-----------|
| Luxury / Refined | Serif fonts, gold/cream/black, generous whitespace, subtle shimmer |
| Brutalist / Raw | Heavy borders, stark contrast, monospace, no-frills layout |
| Soft / Organic | Rounded corners, pastel palette, warm gradients, handwritten accents |
| Retro-Futuristic | Neon on dark, scan lines, monospace, terminal vibes |
| Editorial / Magazine | Strong grid, big typography, ink-black on white, bold pull quotes |
| Playful / Toy-like | Bold primary colors, wobbly shapes, chunky shadows, cartoon UI |
| Industrial / Utilitarian | Muted grays, tabular data aesthetic, functional-first, zero decoration |
| Art Deco / Geometric | Symmetry, metallic tones, ornamental borders, angular type |

**CRITICAL**: There are infinite flavors — these are starting points, not limits. Design one that is true to the context. No two designs should look the same.

### 1.3 Differentiation
Ask: **What is the one thing a user will remember about this interface?**  
Commit to that thing. It could be a bold color, an unexpected animation, a dramatic font, an unusual layout, or an interaction that surprises.

---

## Step 2: Theme System (Consistency Across the Entire UI)

**Every element must feel like it belongs to the same world.**

### 2.1 Define CSS Variables First
Always establish a token system before styling anything:

```css
:root {
  /* Color Palette */
  --color-primary: /* dominant brand color */;
  --color-accent: /* sharp, attention-grabbing accent */;
  --color-bg: /* page background */;
  --color-surface: /* card/panel background */;
  --color-text: /* main text */;
  --color-text-muted: /* secondary text */;
  --color-border: /* borders and dividers */;

  /* Typography */
  --font-display: /* headline font */;
  --font-body: /* paragraph font */;
  --font-mono: /* code / label font */;

  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --space-2xl: 128px;

  /* Border Radius */
  --radius-sm: ;
  --radius-md: ;
  --radius-lg: ;
  --radius-full: 9999px;

  /* Shadow */
  --shadow-sm: ;
  --shadow-md: ;
  --shadow-lg: ;

  /* Motion */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
}
```

### 2.2 Theme Consistency Rules
- **Never mix font families** beyond the defined display/body/mono trio
- **Never use a color outside the palette** — extend the palette if needed, don't improvise
- **Spacing must follow the scale** — no magic numbers like `margin: 13px`
- **Border radius must be consistent** — if buttons are rounded-full, cards should be rounded-md, not square
- **Shadows must use the same direction and blur family** — don't mix hard shadows with soft glows
- **Icon style must be consistent** — outline icons with outline icons, filled with filled

### 2.3 Component-Level Theme Application
Every component (navbar, card, button, input, badge, modal) must:
- Use only `var(--color-*)` references for colors
- Use only `var(--space-*)` for padding/margin
- Use only `var(--font-*)` for font families
- Transition using `var(--duration-*)` and `var(--ease-*)`

This ensures full visual consistency even if the palette changes.

### 2.4 Dark / Light Mode Support

Always design with both modes in mind. Use CSS variables so switching is a single token swap — never hardcode colors.

**Structure:**

```css
/* Light mode — default */
:root {
  --color-bg:           #f5f4f0;
  --color-surface:      #ffffff;
  --color-text:         #111111;
  --color-text-muted:   #666666;
  --color-border:       #e2e2e2;
  --color-primary:      /* brand color */;
  --color-accent:       /* accent color */;
}

/* Dark mode — auto via OS preference */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:           #0f0f0f;
    --color-surface:      #1a1a1a;
    --color-text:         #f0f0f0;
    --color-text-muted:   #888888;
    --color-border:       #2a2a2a;
    /* primary and accent may shift slightly for contrast */
  }
}

/* Manual toggle support via data attribute */
[data-theme="light"] { /* light values */ }
[data-theme="dark"]  { /* dark values */ }
```

**Toggle button (JS):**

```javascript
const toggle = document.querySelector('[data-theme-toggle]');
toggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute(
    'data-theme',
    current === 'dark' ? 'light' : 'dark'
  );
  localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});

// Restore preference on load (prevents flash)
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
```

**Dark Mode Design Rules:**
- Dark background is never `#000000` — use `#0f0f0f` or `#111` to retain depth
- Surfaces layer upward in lightness: bg → surface → elevated surface
- Shadows in dark mode use opacity, not hard black: `rgba(0,0,0,0.4)`
- Accent colors often need to be brighter in dark mode to maintain contrast ratio
- Never invert images or icons blindly — check each one manually

---

## Step 3: UX Design Principles (Making It Usable & Intuitive)

### 3.1 Hierarchy & Scanability
- **F-pattern and Z-pattern reading**: Place the most important content where eyes naturally land
- **Visual hierarchy**: Size > Weight > Color > Position — in that order of importance
- **One primary action per screen** — never compete with two equally weighted CTAs
- **Group related content** — Gestalt proximity principle: things close together feel related

### 3.2 Affordance (Making Things Feel Clickable)
Every interactive element must communicate its purpose:

```
Buttons:
- Have padding that feels like a "body" (not just text)
- Show clear hover state (scale, color shift, or shadow change)
- Show active/pressed state (scale down slightly, shadow shrinks)
- Cursor: pointer on hover — always

Links:
- Underline or color shift on hover
- Never invisible — there must be a visual signal

Inputs:
- Clear focus ring (never remove outline without replacing it)
- Placeholder text is lighter than typed text
- Error states use red; success states use green

Cards / Panels:
- If clickable: subtle lift on hover (translateY(-2px) + shadow increase)
- If not clickable: no hover state that suggests interaction
```

### 3.3 Feedback & Micro-interactions
- **Loading states**: Never leave the user wondering — show a spinner, skeleton, or progress
- **Empty states**: Design an empty state message, not a blank void
- **Success/Error states**: Toast notifications, color-coded, with an icon
- **Button click**: Brief scale-down animation confirms the action was received
- **Form validation**: Inline, real-time where possible — not a wall of errors on submit

### 3.4 Accessibility (Non-negotiable)
- Color contrast must pass WCAG AA (4.5:1 for text, 3:1 for UI elements)
- All interactive elements must be keyboard-navigable (focus ring visible)
- Images must have `alt` text
- Form inputs must have associated `<label>` elements
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, not `<div>` for everything

---

## Step 4: UI Design Excellence (Making It Beautiful)

### 4.1 Typography
- **Display font**: Unusual, characterful, headline-grabbing — set the personality
- **Body font**: Readable at small sizes, neutral enough not to fight the display font
- **Avoid**: Inter, Roboto, Arial, system-ui as primary fonts — they signal zero effort

Type scale hierarchy:
```
Hero: 4–8rem, tight letter-spacing, bold
H1: 2.5–4rem
H2: 1.75–2.5rem
H3: 1.25–1.75rem
Body: 1rem (16px base)
Small / Caption: 0.75–0.875rem
Label / Tag: 0.625–0.75rem, uppercase, wide letter-spacing
```

### 4.2 Color & Palette
- Dominant color (60%) + Supporting color (30%) + Accent color (10%) — the 60-30-10 rule
- Accent should be vibrant and used sparingly — for CTAs, highlights, and hover states
- Avoid using more than 5 colors in a single design
- For dark themes: background is NOT pure black (`#000`) — use `#0a0a0a` or `#111` for depth
- For light themes: background is NOT pure white (`#fff`) — use `#fafaf9` or `#f5f4f0`

### 4.3 Layout & Spatial Composition
- **Generous whitespace** is never wasted — it creates focus and luxury
- Try: asymmetric layouts, overlapping elements, diagonal flow, or broken grids
- Use CSS Grid for 2D layouts, Flexbox for 1D arrangements
- Avoid centering everything — centered layouts feel safe and forgettable
- Consider a max-width container (`max-width: 1200px`) with responsive padding

### 4.4 Visual Depth & Atmosphere
Go beyond flat color:
- **Gradient meshes**: Multiple radial gradients composited for soft, painterly backgrounds
- **Noise/grain overlay**: `filter: url(#noise)` or SVG filter for tactile texture
- **Glassmorphism**: `backdrop-filter: blur()` + semi-transparent surface
- **Layered shadows**: Two-layer shadows for elevation (ambient + key light)
- **Geometric decorations**: SVG shapes, lines, dots, or rings as background accents
- **Borders as design elements**: `border: 1px solid rgba(255,255,255,0.1)` for glass panels

### 4.5 Buttons & CTAs (Making Them Irresistible)
Primary CTA buttons must feel magnetic:

```css
.btn-primary {
  /* Bold, high-contrast background */
  background: var(--color-accent);
  color: var(--color-bg);
  
  /* Substantial padding — feels like something to press */
  padding: 14px 32px;
  
  /* Consistent radius with the theme */
  border-radius: var(--radius-full);
  
  /* Confident typography */
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  
  /* No border needed for filled buttons */
  border: none;
  cursor: pointer;
  
  /* Smooth transition */
  transition: transform var(--duration-fast) var(--ease-bounce),
              box-shadow var(--duration-fast) var(--ease-smooth),
              background var(--duration-normal) ease;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(var(--color-accent-rgb), 0.4);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(var(--color-accent-rgb), 0.2);
}
```

---

## Step 5: Motion & Animation (Bringing It to Life)

### 5.1 Animation Philosophy
- **Purpose first**: Every animation must serve a purpose — guide attention, confirm action, or communicate state
- **Timing matters more than effect**: Ease curves and duration define personality more than the type of animation
- **Less is more**: 2–3 well-designed animations beat 10 mediocre ones
- **Never block interaction**: Animations should be additive, not obstructive

### 5.2 Page Load Sequence
Create a staggered entrance for the hero section:

```css
/* Staggered fade-up on load */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-tag    { animation: fadeUp var(--duration-slow) var(--ease-smooth) 0ms    both; }
.hero-title  { animation: fadeUp var(--duration-slow) var(--ease-smooth) 100ms  both; }
.hero-body   { animation: fadeUp var(--duration-slow) var(--ease-smooth) 200ms  both; }
.hero-cta    { animation: fadeUp var(--duration-slow) var(--ease-smooth) 300ms  both; }
```

### 5.3 Scroll-Triggered Animations
Use IntersectionObserver for elements entering viewport:

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

```css
[data-animate] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity var(--duration-slow) var(--ease-smooth),
              transform var(--duration-slow) var(--ease-smooth);
}

[data-animate].in-view {
  opacity: 1;
  transform: translateY(0);
}
```

### 5.4 Hover Micro-interactions
High-impact hover states for cards and interactive elements:

```css
/* Card lift */
.card {
  transition: transform var(--duration-normal) var(--ease-bounce),
              box-shadow var(--duration-normal) var(--ease-smooth);
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

/* Icon rotation on button hover */
.btn-icon { transition: transform var(--duration-fast) var(--ease-bounce); }
.btn:hover .btn-icon { transform: translateX(4px); }

/* Link underline draw */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 2px;
  background: var(--color-accent);
  transition: width var(--duration-normal) var(--ease-smooth);
}
.nav-link:hover::after { width: 100%; }
```

---

## Step 6: Responsive Design (Mobile-First)

### 6.1 Breakpoints
```css
/* Mobile first — base styles are for mobile */
/* sm  */ @media (min-width: 640px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
/* 2xl */ @media (min-width: 1536px) { }
```

### 6.2 Mobile UX Rules
- Minimum tap target: **44×44px** (Apple HIG) — never smaller
- Body text minimum: **16px** — never smaller (prevents auto-zoom on iOS)
- Avoid hover-only interactions — all interactions must work on touch
- Stack horizontal layouts vertically on mobile
- Navigation collapses to hamburger at `md` breakpoint
- Hero typography scales down: `clamp(2rem, 5vw, 5rem)`

---

## Step 7: Performance Guidelines (Fast = Good UX)

Performance is a UX decision, not just a technical one. A beautiful interface that loads slowly or jank-animates feels broken.

### 7.1 Animation Performance
Only animate properties that don't trigger layout reflow:

```
✅ Safe to animate (GPU-composited):
   transform: translate / scale / rotate
   opacity
   filter (with care)

❌ Avoid animating (triggers layout reflow = jank):
   width / height
   top / left / right / bottom
   margin / padding
   font-size
```

Use `will-change` sparingly — only on elements actively animating, and remove after:

```css
.card {
  will-change: transform; /* add just before animation */
}
/* Remove after animation ends to free GPU memory */
```

### 7.2 Font Loading
Poor font loading causes FOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text). Prevent both:

```html
<!-- Preconnect to font CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload the most critical font weight -->
<link rel="preload" as="font" type="font/woff2"
  href="your-font.woff2" crossorigin>
```

```css
@font-face {
  font-family: 'YourFont';
  src: url('your-font.woff2') format('woff2');
  font-display: swap; /* show fallback immediately, swap when loaded */
}
```

### 7.3 Image Optimization
```html
<!-- Native lazy loading -->
<img src="photo.jpg" alt="Description" loading="lazy" decoding="async">

<!-- Responsive images — serve correct size per viewport -->
<img
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="photo-800.jpg"
  alt="Description"
  loading="lazy"
>

<!-- Use aspect-ratio to prevent layout shift -->
<style>
  .img-wrapper {
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
```

### 7.4 CSS & Rendering
- Avoid deeply nested selectors — max 3 levels deep
- Prefer `class` selectors over `tag` or `*` selectors for performance
- Use `contain: layout` on isolated components to limit reflow scope
- Use `content-visibility: auto` on off-screen sections for large pages:

```css
.section-below-fold {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; /* estimated height to prevent scroll jump */
}
```

### 7.5 Interaction Responsiveness
- Debounce scroll and resize event handlers
- Use `pointer-events: none` on elements during animation to prevent mis-clicks
- Target **Time to Interactive (TTI) under 3 seconds** on mobile 4G

```javascript
// Debounce example
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener('resize', debounce(handleResize, 150));
```

---

## Step 8: Copywriting & Content Hierarchy (Words Are UI)

No matter how beautiful the visuals, bad copy breaks the experience. Every word in the interface is a design decision.

### 8.1 Hero Section — The 5-Second Rule
A user decides whether to stay or leave within **5 seconds**. The hero must communicate:
1. **What is this?** — One clear, specific headline (not clever wordplay)
2. **Why does it matter to me?** — Subheadline that speaks to the user's outcome
3. **What do I do next?** — A single, obvious CTA

```
❌ Bad:  "Empowering your digital transformation journey"
✅ Good: "Send invoices in 30 seconds. Get paid faster."

❌ Bad:  "Next-generation solutions for modern teams"
✅ Good: "The project tracker that actually keeps your team in sync"
```

### 8.2 CTA Copy — Action Verbs Only
CTA buttons must use action verbs that describe the outcome, not the action:

```
❌ Weak:   Submit / Click here / Continue / OK / Yes
✅ Strong: Get Started / Send My Invoice / Book a Free Call / Try It Free / See the Demo

Formula: [Verb] + [Outcome or Object]
Examples:
  "Download the Guide"
  "Start My Free Trial"
  "See How It Works"
  "Join 10,000 Teams"
```

### 8.3 Microcopy — The Details That Build Trust

**Form fields:**
```
Label:       "Work Email"           (not just "Email")
Placeholder: "you@company.com"      (real example, not "Enter email here")
Helper text: "We'll send your receipt here"
Error:       "Please enter a valid email — like you@company.com"
                                    (not "Invalid input" or "Error 422")
```

**Empty states** — never leave a blank void:
```
❌ [blank space]
✅ "No projects yet. Create your first one →"
```

**Loading states** — be specific:
```
❌ "Loading..."
✅ "Fetching your reports..."
```

**Success states** — celebrate the action:
```
❌ "Done"
✅ "Invoice sent! You'll get a copy at hello@you.com"
```

**Error states** — be human, not robotic:
```
❌ "An error has occurred. Code: 500"
✅ "Something went wrong on our end. Try again — it usually works the second time."
```

### 8.4 Tone Consistency
Match copy tone to the visual aesthetic — **never let them contradict each other**:

| Aesthetic | Copy Tone | Example |
|-----------|-----------|---------|
| Luxury / Refined | Calm, understated | "Crafted for those who demand precision." |
| Playful / Toy-like | Fun, punchy | "Let's gooo 🎉 You're all set!" |
| Brutalist / Raw | Direct, blunt | "It works. Here's your data." |
| Editorial | Intelligent voice | "The numbers tell a clear story." |
| Soft / Organic | Warm, encouraging | "Take your time — we'll be here." |

### 8.5 Content Hierarchy Rules
- **One headline per section** — never two competing H2s
- **Paragraphs under 3 lines** on landing pages — density kills readability
- **Use numbers and specifics** — "Save 4 hours/week" beats "Save time"
- **Lead with benefit, follow with feature** — "Get paid faster (with auto-invoicing)"
- **Short sentences** in UI copy — under 12 words per sentence where possible

---

## Step 9: Anti-Patterns to Avoid

### Never Do These
- ❌ Generic purple gradient on white — the default AI aesthetic
- ❌ Inter or Roboto as the display font
- ❌ Centered layout for everything with no asymmetry or tension
- ❌ Buttons without hover states
- ❌ `<div onClick>` instead of `<button>`
- ❌ Removing focus styles without replacing them
- ❌ Placeholder text as the only label for a form input
- ❌ All caps body text (fine for labels; never paragraphs)
- ❌ Mixing icon styles (outline + filled in same component)
- ❌ Different border-radius values used randomly
- ❌ Contradictory shadows (some floating up, some casting down)
- ❌ Breaking the spacing scale with random `px` values
- ❌ Using more than 5 font sizes without a clear typographic scale
- ❌ Animating `width`, `height`, `top`, `left` — use `transform` instead
- ❌ Copy tone that contradicts the visual aesthetic
- ❌ CTA buttons with vague text like "Submit" or "Click here"
- ❌ Empty states with no explanation or action

---

## Step 10: Quality Checklist (Before Delivering)

Before finishing, verify:

**Theme Consistency**
- [ ] All colors use CSS variables
- [ ] All fonts are from the defined family trio
- [ ] Spacing follows the defined scale
- [ ] Border radius is consistent across components
- [ ] Shadow style is consistent
- [ ] Dark mode tokens defined and tested

**UX Quality**
- [ ] Primary CTA is immediately visible and prominent
- [ ] All buttons have hover + active states
- [ ] Interactive elements have cursor: pointer
- [ ] Loading/empty/error states are handled
- [ ] Keyboard navigation works

**Copy Quality**
- [ ] Hero headline communicates value within 5 seconds
- [ ] CTA uses an action verb with clear outcome
- [ ] Empty/error/success states have human-readable microcopy
- [ ] Copy tone matches the visual aesthetic

**Performance**
- [ ] Animations use only `transform` and `opacity`
- [ ] Images use `loading="lazy"` and `decoding="async"`
- [ ] Fonts use `font-display: swap`
- [ ] No `will-change` left on static elements

**Visual Quality**
- [ ] Page has visual hierarchy (not everything the same size/weight)
- [ ] There is sufficient contrast between text and background
- [ ] Animations serve a purpose and don't block interaction
- [ ] The design has a clear, memorable aesthetic point-of-view

**Code Quality**
- [ ] Semantic HTML elements used appropriately
- [ ] No inline styles (use classes / CSS variables)
- [ ] Responsive on mobile viewport
- [ ] No console errors

---

## Final Reminder

Claude is capable of extraordinary creative work. Don't default to safe, predictable design.  
Commit fully to a distinctive vision. Make it beautiful. Make it usable. Make it unforgettable.

Every interface should feel like it was designed by someone who cares deeply — not generated by an algorithm that doesn't.

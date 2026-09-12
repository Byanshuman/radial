# Radial Revolver Menu — AI Prompt Specification

You can copy and paste the prompt below into any AI coding assistant (ChatGPT, Claude, Antigravity, Cursor) to generate or extend this exact animated radial revolver navigation system.

---

## The AI Prompt (Copy & Paste)

```markdown
You are an expert React motion designer and frontend architect. Build a production-ready, highly aesthetic **Animated Radial Revolver Menu** using React, TypeScript, Tailwind CSS, and Framer Motion (or `motion/react`).

### Component Architecture Tree
Decompose the component cleanly into the following modular hierarchy:

RadialMenu
│
├── Backdrop
│
├── Radial Container
│   │
│   ├── Center Hub
│   │
│   └── Radial Wheel
│       │
│       ├── Pod
│       │   └── Counter Rotation
│       │
│       ├── Pod
│       │   └── Counter Rotation
│       │
│       └── ...
│
└── Interaction Layer

### 1. Mathematical Orbital Geometry
- Instead of hardcoding pixel coordinates, compute pod positions dynamically around a circle using polar-to-Cartesian trigonometry:
  - Angle $\theta$ in degrees: e.g., 6 items at 270° (12 o'clock), 330° (2 o'clock), 30° (4 o'clock), 90° (6 o'clock), 150° (8 o'clock), 210° (10 o'clock).
  - Convert angle to radians: `rad = (angle * Math.PI) / 180`.
  - Calculate `cos(rad)` and `sin(rad)`.
  - Position using CSS `calc()`:
    `left: calc(50% + var(--radius) * cos - var(--pod-size) / 2)`
    `top: calc(50% + var(--radius) * sin - var(--pod-size) / 2)`
- Use responsive CSS custom properties (`--radius` and `--pod-size`) so the geometry scales naturally on mobile (124px radius), tablet (175px radius), and desktop (205px radius) without window resize listeners.

### 2. Animation Choreography & The "Ferris Wheel" Trick
- **Radial Wheel (Parent)**:
  - Entrance: Spins from `-360°` to `0°`, scaling from `0.15` to `1`, translating from origin offset `(x: 90, y: 240)` to `(0, 0)`.
  - Exit: Reverses rotation back to `-360°` and scales down to origin.
  - Easing: Custom snappy spring cubic-bezier `[0.16, 1, 0.3, 1]`, duration `0.75s`.
- **Counter-Rotation (Child Pods)**:
  - Each pod must apply an inverse rotation (`+360°` to `0°`) with matching duration and easing.
  - This cancels out the parent wheel's rotation on inner content, ensuring icons and labels stay perfectly upright during the spin.
- **Center Hub**:
  - Central elevated orb with vibrant gradient, white ring border, and inner drop shadow.
  - Synchronized entrance: `rotate: -270° -> 0°`, `scale: 0 -> 1`.
- **Backdrop**:
  - Full-screen `bg-slate-950/80` with `backdrop-blur-xl`.
  - Smooth fade opacity `0 -> 1` and `1 -> 0`.

### 3. Interaction & Accessibility
- Clicking the backdrop or an item dismisses the menu.
- Keyboard support: Pressing `Escape` closes the menu.
- Scroll locking: Freeze `document.body.style.overflow = "hidden"` while open and restore on unmount.
- Close Button: Glassmorphic circular button with `X` icon in the top corner.
- Optional header typography and contextual curved SVG annotation arrow.

### 4. Types & API
Export TypeScript interfaces:
- `RadialMenuItem`: `{ id, title, subtitle?, icon, angle, iconColor?, href?, onClick?, badge? }`
- `RadialMenuProps`: `{ isOpen, onClose, items, centerContent?, headerTitle?, headerSubtitle?, footerContent?, origin?, radius?, podSize?, className? }`
```

---

## Key Design & Engineering Takeaways

1. **Trig Over Hardcoding**: By driving positions through angles ($\theta$) and CSS custom properties, adding 4, 6, or 8 items requires changing only angle numbers, never touching layout styles.
2. **Ferris Wheel Principle**: Counter-rotation is the secret that makes orbital menus feel professional rather than disorienting.
3. **Physical Origin Point**: Animating from where the user clicked (the bottom dock button) grounds the interaction in physical space.

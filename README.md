# Radial Revolver Menu

An animated radial navigation pattern built with React, Tailwind CSS, Framer Motion, and Lucide React.

Six navigation items orbit a central action in a circular layout, while coordinated rotation keeps every icon and label perfectly upright during the entrance animation.

> A small UI pattern that combines trigonometry, motion design, and interaction engineering.

---

## Preview

<!-- Add your GIF / video / screenshot here -->

![Radial Revolver Menu Preview](./public/preview.gif)

---

## Why This Exists

Radial navigation is visually interesting, but implementing it cleanly requires solving a few problems at the same time:

- Positioning elements around a circle
- Keeping spacing consistent at different viewport sizes
- Animating the entire wheel into view
- Preventing labels from rotating with the wheel
- Making each navigation item independently interactive
- Keeping the implementation simple enough to reuse

This component treats the menu as a small motion system rather than a collection of individually positioned buttons.

---

## Interaction

The menu follows a simple choreography:

**Closed → Expand → Rotate → Settle**

1. The radial system enters from its origin.
2. The wheel rotates into its final orientation.
3. The individual pods counter-rotate.
4. Icons and labels settle upright.
5. Each pod becomes an independent interactive target.

The result feels more like a physical dial than a conventional navigation menu.

---

## Built With

| Technology | Purpose |
| --- | --- |
| React | Component architecture |
| TypeScript | Type-safe configuration |
| Tailwind CSS | Layout and styling |
| Framer Motion | Entrance and interaction animation |
| Lucide React | Navigation icons |

---

## The Core Idea

The menu does not rely on manually calculated pixel coordinates for every item.

Each item has an angle.

```ts
const items = [
  { title: "Solutions", angle: 270 },
  { title: "Process", angle: 330 },
  { title: "Services", angle: 30 },
  { title: "Resources", angle: 90 },
  { title: "FAQs", angle: 150 },
  { title: "About", angle: 210 },
];

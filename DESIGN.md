# Design System Document: Modern Desert Editorial

## 1. Overview & Creative North Star: "The Architectural Mirage"
This design system is built to evoke the quiet, sun-drenched sophistication of an exclusive Mediterranean enclave. Our Creative North Star is **"The Architectural Mirage."** We treat the digital canvas not as a flat screen, but as a physical space defined by shifting light, raw materials, and structural shadows.

To achieve this, we move away from "Standard UI" by embracing **intentional asymmetry**. Layouts should feel curated like a high-end fashion editorial—large headers may offset to the left, while content hangs loosely on the right, balanced by generous "negative space" that mimics the open air of a coastal villa. We reject the "tech-bro" aesthetic of rounded corners and vibrant neons in favor of sharp, monolithic forms and a tonal palette rooted in the earth.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is a sophisticated interplay of deep shadows and sun-bleached surfaces. We do not use color to "decorate," but to define "light and heat."

### Core Palette (Near black, terracotta, olive)
- **Background / Surface Baseline:** `surface` (#141310) - The deep, obsidian-olive foundation.
- **Primary Elements:** `primary` (#fbb79e) - Terracotta.
- **Primary Depth:** `primary-container` (#3e1808) - Clay.
- **Secondary Elements:** `secondary` (#cdc6b1) - Sand / Warm White.
- **Typography Base:** `on-surface` (#e6e2db) - Warm White for primary content.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section content. Boundaries must be created exclusively through background color shifts. A `surface-container-low` section sitting against a `surface` background is our primary method of containment.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of tactile paper.
- **Base Level (`surface` / `#141310`):** The deep, obsidian-olive foundation.
- **Layering:** Use `surface-container-lowest` to `highest` to create soft depth. A card should not "pop" with a shadow; it should simply be a slightly lighter "stone" (`surface-container-high`) resting on a "dark soil" (`surface-container-low`) base.

### Glass & Gradients
To introduce the "hi-tech edge," use **Glassmorphism** for navigation bars and floating overlays. 
- **Token:** `surface-variant` at 60% opacity with a `24px` backdrop-blur.
- **Signature Texture:** For primary CTAs, use a subtle radial gradient transitioning from `primary` (`#fbb79e`) to `primary-container` (`#3e1808`) at a 45-degree angle. This mimics the glow of a setting sun against clay.

---

## 3. Typography: Editorial Authority
The typography is the voice of the system. It must feel high-contrast and authoritative.

- **Display & Headlines (Newsreader):** This high-contrast serif is our "Hero." Use `display-lg` for impactful statements. **Design Note:** Use *selective italics* for one or two words in a headline to emphasize the "Editorial" feel (e.g., "The *Art* of Creation").
- **Body (Manrope):** Our workhorse. It is clean, modern, and stays out of the way. Maintain generous line height (1.6) to ensure the "sun-drenched" airy feel.
- **Labels & Buttons (Inter):** Small, all-caps, and tracked out (`letter-spacing: 0.15em`). This provides a technical, architectural precision that balances the organic serif.

---

## 4. Elevation & Depth: Tonal Layering
We do not use standard "elevation-1, elevation-2" shadows. We use light.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` element on a `surface` background creates a natural recession.
- **Ambient Shadows:** When an element must float (e.g., a modal), use a wide, soft shadow: `box-shadow: 0 20px 50px rgba(20, 19, 16, 0.3)`. The shadow color must be a dark tint of our background, never pure black or grey.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (`#484740`) at **15% opacity**. It should be felt, not seen.
- **Corner Radius:** We utilize a **0px radius (Sharp)** across all components. This reinforces the architectural, monolithic feel of the brand.

---

## 5. Spacing & Structure

- **Vertical Rhythm:** Follow a generous `16px`, `24px`, and `48px` scaling structure. This mirrors the open air and "respect for the void" rules.
- **Asymmetrical Structures:** Overlap items when possible; offset typical 12-column layouts to simulate physical art gallery setups. Avoid perfect centering where visual weight naturally drags to the left or right.

---

## 6. Components

### Buttons
- **Primary:** `primary` background, `on-primary` text. Rectangular (0px radius). Label in `label-md` (uppercase/spaced).
- **Secondary:** `outline` Ghost Border (15% opacity). Text in `secondary`.
- **Tertiary:** Text only, `primary` color, with a 1px `primary` underline offset by 4px.

### Input Fields
- No boxes. Use a bottom-border only (`outline-variant` at 40%). 
- Focus state: Bottom-border transitions to `primary`. 
- Labels: Always `label-sm` above the field, never placeholder text.

### Cards & Lists
- **Rule:** Forbid divider lines. Use vertical whitespace (from the 16px/24px/48px scale) to separate list items.
- **Card Styling:** Use `surface-container-low`. On hover, transition to `surface-container-high`. No shadows.

### Interactive Components
- **Chips:** Rectangular, `secondary-container` background. `on-secondary-container` text.
- **Checkboxes/Radios:** Custom-styled sharp squares/diamonds. Use `tertiary` for the active state to provide a warm, metallic accent.

### Unique Component: "The Gallery Masonry"
Given the content-creation focus, use an asymmetrical masonry grid for media. Large vertical images should be offset by small horizontal ones to create a "rhythm" that feels like a physical art gallery in Málaga.

---

## 7. Do's and Don'ts

### Do
- **Embrace Asymmetry:** Align text to the left and images to the right with unequal margins.
- **Use "Warm White":** Always use `on-surface` (`#e6e2db`) for text. Never use `#FFFFFF`.
- **Respect the Void:** If a screen feels "empty," leave it. Space is a luxury.

### Don't
- **No Rounded Corners:** Ever. The system is architectural and sharp.
- **No Icons in Circles:** If an icon is needed, let it stand alone or inside a sharp square.
- **No Corporate Blue:** Do not introduce any colors outside the defined desert-to-obsidian spectrum.
- **No Dividers:** If you feel the need to draw a line, increase the whitespace or change the background shade instead.

---

## 8. Signature Interaction
**Motion Note:** Transitions should be slow and "heavy." Use `cubic-bezier(0.4, 0, 0.2, 1)` for all fades. Elements should not "snap"; they should dissolve in like heat haze on a Mediterranean horizon.

# BeaconGlyphs

**Production-ready visual and symbolic glyph system for the MirrorDNA ecosystem.**

BeaconGlyphs is a complete, designer and developer-friendly glyph kit providing unified visual symbols that represent brands, states, events, and interactions across Active MirrorOS, MirrorDNA, LingOS, and the entire reflection protocol ecosystem.

---

## What is BeaconGlyphs?

BeaconGlyphs is a **standardized symbolic system** that:

- Defines 32 production-quality vector glyphs (7 brand + 25 symbolic)
- Provides consistent iconography across all MirrorDNA products
- Enables visual lineage tracking in Glyphtrail interaction logs
- Supports framework-agnostic usage (React, Vue, vanilla JS, etc.)
- Includes comprehensive design documentation and usage guidelines

Think of it as the **visual DNA** of the MirrorDNA ecosystem—a shared language that makes continuity, identity, and state visible and recognizable.

---

## Quick Start

### 🎨 View the Interactive Demo

```bash
cd web-demo
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

The web demo showcases all 32 glyphs with click-to-copy functionality, usage examples, and integration code.

### 📦 Use in Your Project

**React (TypeScript):**
```tsx
import { BeaconGlyph } from './packages/react/src/BeaconGlyph';

function App() {
  return (
    <div>
      <BeaconGlyph name="mirrordna" size="lg" />
      <BeaconGlyph name="state-verified" size="md" />
    </div>
  );
}
```

**HTML + CSS:**
```html
<link rel="stylesheet" href="packages/css/beacon-glyphs.css">

<img src="assets/svg/mirrordna.svg" class="beacon-glyph beacon-glyph--lg" alt="MirrorDNA">
<img src="assets/svg/state-verified.svg" class="beacon-glyph beacon-glyph--md" alt="Verified">
```

**Direct SVG:**
```html
<img src="assets/svg/continuity-chain.svg" alt="Continuity Chain" width="32" height="32">
```

---

## Core Glyph Categories

### Brand & Product Glyphs (7)

| Glyph | File | Purpose |
|-------|------|---------|
| **MirrorDNA** | `mirrordna.svg` | Core identity and continuity protocol |
| **LingOS** | `lingos.svg` | Language-native operating system |
| **Active MirrorOS** | `activemirroros.svg` | Intelligence that remembers |
| **TrustByDesign** | `trustbydesign.svg` | Safety and governance framework |
| **AgentDNA** | `agentdna.svg` | Agent personality schemas |
| **Glyphtrail** | `glyphtrail.svg` | Interaction lineage tracking |
| **Generic Beacon** | `generic_beacon.svg` | Universal beacon marker |

### Symbolic Glyphs (25)

Organized into 8 semantic categories:

- **Continuity (4):** chain, link, infinity, broken
- **Identity (3):** dna, mask, diamond
- **State (4):** verified, active, protected, locked
- **Events (5):** flag, cycle, warning, start, stop
- **Reflection (3):** mirror, bidirectional, recursive
- **Governance (2):** balance, certified
- **Navigation (2):** home, forward
- **Data (2):** memory, stream

📖 **See full catalog:** [docs/glyph_catalog.md](docs/glyph_catalog.md)

---

## Repository Structure

```
BeaconGlyphs/
├── assets/
│   └── svg/                          # 32 production SVG glyphs
│       ├── mirrordna.svg
│       ├── lingos.svg
│       ├── continuity-chain.svg
│       └── [29 more glyphs...]
│
├── web-demo/                         # Interactive showcase
│   ├── index.html                    # Demo page
│   ├── styles.css                    # Responsive styling
│   └── app.js                        # Dynamic rendering
│
├── packages/
│   ├── react/                        # React component package
│   │   ├── src/
│   │   │   ├── BeaconGlyph.tsx       # Main component
│   │   │   ├── GlyphBadge.tsx        # Badge variant
│   │   │   ├── GlyphStatus.tsx       # Status indicator
│   │   │   ├── GlyphGroup.tsx        # Group layout
│   │   │   ├── glyphs.ts             # Glyph registry
│   │   │   └── index.ts              # Exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── css/                          # CSS framework
│       ├── beacon-glyphs.css         # Full utility library
│       └── tokens.css                # Design tokens
│
├── docs/
│   ├── overview.md                   # Repository overview
│   ├── glyph_catalog.md              # Complete visual reference
│   ├── usage_guidelines.md           # Sizing, spacing, color rules
│   ├── branding_rules.md             # Legal and brand usage
│   └── integration_guide.md          # Framework integration
│
├── tests/
│   ├── react/
│   │   └── glyph_component.test.tsx  # React component tests
│   └── lint/
│       └── svg_validation_notes.md   # SVG quality checklist
│
├── README.md                         # This file
└── COMPLETION_REPORT.md              # Production delivery report
```

---

## Documentation

### 📚 Complete Documentation Set

1. **[Glyph Catalog](docs/glyph_catalog.md)** - Visual reference for all 32 glyphs with meanings and usage contexts
2. **[Usage Guidelines](docs/usage_guidelines.md)** - Sizing, spacing, color, and visual consistency rules
3. **[Branding Rules](docs/branding_rules.md)** - Legal usage guidelines and trademark information
4. **[Integration Guide](docs/integration_guide.md)** - Framework-specific integration instructions
5. **[Completion Report](COMPLETION_REPORT.md)** - Production delivery report with technical specifications

---

## Usage Examples

### React Components

**Basic usage:**
```tsx
import { BeaconGlyph } from './packages/react/src/BeaconGlyph';

<BeaconGlyph name="mirrordna" size="md" />
<BeaconGlyph name="state-verified" size="lg" variant="outline" />
```

**With custom styling:**
```tsx
<BeaconGlyph
  name="continuity-chain"
  size={40}
  className="my-custom-class"
  style={{ color: '#667eea' }}
  title="Custom accessibility label"
/>
```

**Interactive glyphs:**
```tsx
<BeaconGlyph
  name="navigation-home"
  size="md"
  onClick={() => navigate('/home')}
/>
```

**Component variants:**
```tsx
import { GlyphBadge, GlyphStatus, GlyphGroup } from './packages/react/src';

<GlyphBadge glyph="state-verified" label="Verified" />
<GlyphStatus glyph="state-active" status="active" label="System Online" />
<GlyphGroup>
  <BeaconGlyph name="mirrordna" size="sm" />
  <BeaconGlyph name="lingos" size="sm" />
</GlyphGroup>
```

### CSS Utilities

**Size variants:**
```html
<img class="beacon-glyph beacon-glyph--xs">  <!-- 16px -->
<img class="beacon-glyph beacon-glyph--sm">  <!-- 24px -->
<img class="beacon-glyph beacon-glyph--md">  <!-- 32px -->
<img class="beacon-glyph beacon-glyph--lg">  <!-- 48px -->
<img class="beacon-glyph beacon-glyph--xl">  <!-- 64px -->
<img class="beacon-glyph beacon-glyph--2xl"> <!-- 80px -->
```

**Color variants:**
```html
<img class="beacon-glyph beacon-glyph--primary">
<img class="beacon-glyph beacon-glyph--success">
<img class="beacon-glyph beacon-glyph--warning">
<img class="beacon-glyph beacon-glyph--error">
```

**Animations:**
```html
<img class="beacon-glyph beacon-glyph--pulse">
<img class="beacon-glyph beacon-glyph--spin">
<img class="beacon-glyph beacon-glyph--bounce">
```

**Using design tokens:**
```css
.my-custom-glyph {
  width: var(--beacon-glyph-size-lg);
  height: var(--beacon-glyph-size-lg);
  color: var(--beacon-color-primary);
}
```

---

## Testing

### React Component Tests

```bash
cd packages/react
npm install
npm test
```

**Test coverage:**
- 15 comprehensive test cases
- Rendering validation
- Size/variant prop testing
- Accessibility checks
- Unknown glyph fallback
- Event handler testing

### SVG Quality Validation

See [tests/lint/svg_validation_notes.md](tests/lint/svg_validation_notes.md) for:
- Required SVG attributes checklist
- Optimization guidelines
- Visual consistency standards
- Common issues and fixes

---

## Design Principles

1. **Clarity over cleverness** - Glyphs should be immediately recognizable
2. **Universal compatibility** - SVG-first with accessibility built in
3. **Semantic meaning** - Each glyph represents a specific concept
4. **Ecosystem coherence** - Consistent visual language across all products
5. **Accessibility** - WCAG 2.1 Level AA compliant

---

## Role in the Ecosystem

```
Active MirrorOS (product layer)
    ↓ uses glyphs for UI states
MirrorDNA Protocol (identity + continuity)
    ↓ uses glyphs for protocol events
BeaconGlyphs ← YOU ARE HERE
    ↓ provides symbols to
Glyphtrail (interaction logs)
    ↓ renders visual lineage
LingOS (reflective OS)
    ↓ displays continuity markers
```

**Used by:**
- **Glyphtrail**: Visual representation of interaction lineage and continuity events
- **LingOS**: State indicators for reflective dialogue and memory persistence
- **Active MirrorOS**: UI icons for agent personality, trust states, and session continuity
- **MirrorDNA-Standard**: Protocol-level symbolic notation for compliance events

---

## Technical Specifications

### SVG Standards
- **Format:** SVG 1.1
- **ViewBox:** `0 0 48 48` (48×48px artboard)
- **Color:** `currentColor` for CSS inheritance
- **Accessibility:** `<title>` and `<desc>` elements included
- **File size:** < 5KB per glyph

### React Components
- **Framework:** React >=16.8.0
- **Language:** TypeScript 5.0+
- **Type definitions:** Fully typed with .d.ts files
- **Bundle size:** ~8KB (minified + gzipped)

### CSS Framework
- **Methodology:** Utility-first with design tokens
- **Browser support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Dark mode:** `prefers-color-scheme` + manual `.dark` class
- **File size:** 12KB (minified)

---

## Future Work

- Advanced theming system with extended color palettes
- Figma component library for designer handoff
- Additional framework support (Vue, Angular, Svelte, Web Components)
- Pre-built animation variants
- Icon font package for legacy browser support
- Automated visual regression testing
- NPM package publishing
- CDN distribution
- Storybook documentation

📖 **See full roadmap:** [COMPLETION_REPORT.md](COMPLETION_REPORT.md#future-work)

---

## Contributing

BeaconGlyphs is part of the MirrorDNA-Reflection-Protocol organization.

**To propose a new glyph:**
1. Check [docs/glyph_catalog.md](docs/glyph_catalog.md) for existing glyphs
2. Follow SVG best practices in [tests/lint/svg_validation_notes.md](tests/lint/svg_validation_notes.md)
3. Provide semantic description and use case
4. Submit with example usage in context

---

## License

MIT License - See LICENSE for details.

**Trademarks:** "BeaconGlyphs" and associated brand names are trademarks of N1 Intelligence Inc. See [docs/branding_rules.md](docs/branding_rules.md) for usage guidelines.

---

## Questions?

- **What's the difference between BeaconGlyphs and Glyphtrail?**
  - BeaconGlyphs = the *vocabulary* (symbol definitions)
  - Glyphtrail = the *storyteller* (interaction logs using those symbols)

- **Can I use these glyphs in my project?**
  - Yes! MIT licensed with attribution. See [docs/branding_rules.md](docs/branding_rules.md)

- **Which glyph should I use for X?**
  - See the visual catalog: [docs/glyph_catalog.md](docs/glyph_catalog.md)

- **How do I integrate with my framework?**
  - See framework-specific examples: [docs/integration_guide.md](docs/integration_guide.md)

---

**BeaconGlyphs** - Making continuity visible, one symbol at a time.

**Version:** 1.0.0 (Production-Ready)
**Maintained by:** N1 Intelligence Inc.

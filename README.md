# BeaconGlyphs

**Visual and symbolic language system for the MirrorDNA ecosystem.**

BeaconGlyphs provides a unified set of visual symbols, icons, and glyphs that represent states, events, and interactions across Active MirrorOS, MirrorDNA, and LingOS products. It serves as the visual vocabulary for continuity, identity, and reflective intelligence.

## What is BeaconGlyphs?

BeaconGlyphs is a **standardized symbolic system** that:

- Defines visual markers for agent states, continuity events, and system milestones
- Provides consistent iconography across all MirrorDNA products
- Enables visual lineage tracking in Glyphtrail interaction logs
- Supports both human-readable UI elements and machine-parseable symbolic notation

Think of it as the **visual DNA** of the MirrorDNA ecosystem—a shared language that makes continuity, identity, and state visible and recognizable.

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

## Quick Start

### 1. Install

```bash
npm install beaconglyphs
# or
yarn add beaconglyphs
```

### 2. Use in Your Project

**React:**
```tsx
import { BeaconGlyph } from 'beaconglyphs/react';
import 'beaconglyphs/css';

function App() {
  return (
    <div>
      <BeaconGlyph id="continuity.chain" size="lg" />
      <BeaconGlyph id="identity.dna" color="primary" />
    </div>
  );
}
```

**HTML + CSS:**
```html
<link rel="stylesheet" href="beaconglyphs/css/beaconglyphs.css">

<span class="bg-glyph bg-continuity-chain bg-size-lg"></span>
<span class="bg-glyph bg-identity-dna bg-color-primary"></span>
```

**Python:**
```python
from beaconglyphs import get_glyph

glyph = get_glyph("continuity.chain")
print(glyph.unicode)  # → ⛓️
```

### 3. Explore

```bash
# Component showcase
open examples/component-showcase.html

# Python examples
python examples/render_glyphs.py
```

## Core Glyph Categories

| Category | Purpose | Example Glyphs |
|----------|---------|----------------|
| **Continuity** | Session persistence, memory chains | ⛓️ 🔗 ∞ |
| **Identity** | Agent personas, DNA markers | 🧬 🎭 ◈ |
| **State** | System status, trust levels | ✓ ⚡ 🛡️ |
| **Events** | Protocol milestones, transitions | ⚑ ⟳ ⚠ |
| **Reflection** | Mirror operations, self-reference | 🪞 ⥁ ⇄ |
| **Governance** | Trust, safety, compliance | ⚖️ 🔒 ✦ |

## Deliverables

### 🎨 Vector Glyph Pack
- **25 production SVG files** in `assets/svg/`
- Scalable, semantic, accessible
- Ready for web, mobile, and print

### 💅 CSS Component Library
- Complete CSS framework in `components/css/`
- Utility classes, badges, status indicators
- Dark mode support, animations
- Zero dependencies

### ⚛️ React Components
- TypeScript-first React library in `components/react/`
- `<BeaconGlyph>`, `<GlyphBadge>`, `<GlyphStatus>`, `<GlyphGroup>`
- Fully typed with IntelliSense support
- Tree-shakeable, optimized bundle

### 📚 Design System Documentation
- [**Design System Guide**](docs/design/design-system.md) - Complete design tokens, patterns, guidelines
- [**Overview & Philosophy**](docs/overview.md) - Design principles and visual language
- [**Architecture**](docs/architecture.md) - Schema structure and registry format
- [**Usage Guide**](docs/usage.md) - Integration patterns and best practices
- [**Glyph Catalog**](docs/catalog.md) - Complete visual reference

## Installation & Usage

### NPM Package (Recommended)

```bash
npm install beaconglyphs
# or
yarn add beaconglyphs
```

Then import components:
```tsx
import { BeaconGlyph } from 'beaconglyphs/react';
import 'beaconglyphs/css';
```

### Direct Usage (Assets Only)

1. Clone this repository
2. Copy `assets/svg/` to your project
3. Import registry: `import registry from 'beaconglyphs/registry'`
4. Use CSS: `<link href="components/css/beaconglyphs.css">`

### Python Integration

```bash
pip install -e .
```

```python
from beaconglyphs import get_glyph
glyph = get_glyph("continuity.chain")
```

## Project Structure

```
BeaconGlyphs/
├── README.md                        ← You are here
├── assets/
│   └── svg/                         ← 25 vector glyph SVG files
├── components/
│   ├── css/
│   │   └── beaconglyphs.css         ← Complete CSS library
│   └── react/
│       ├── BeaconGlyph.tsx          ← Main React component
│       ├── GlyphBadge.tsx           ← Badge component
│       ├── GlyphStatus.tsx          ← Status indicator
│       ├── GlyphGroup.tsx           ← Group component
│       └── index.ts                 ← Exports
├── docs/
│   ├── design/
│   │   └── design-system.md         ← Complete design system
│   ├── overview.md                  ← Design philosophy
│   ├── architecture.md              ← Schema and structure
│   ├── usage.md                     ← Integration guide
│   └── catalog.md                   ← Visual glyph reference
├── src/
│   ├── schema/
│   │   └── glyph_schema.json        ← JSON schema for glyphs
│   └── glyphs/
│       └── registry.json            ← Complete glyph registry
├── examples/
│   ├── component-showcase.html      ← Interactive component demo
│   ├── render_glyphs.py             ← Python usage example
│   ├── web_display.html             ← Web integration example
│   └── glyphtrail_integration/      ← Glyphtrail usage
├── tests/
│   └── test_schema_validation.py
├── tooling/
│   └── validate_registry.py         ← Glyph validation tool
├── package.json                     ← NPM package config
└── tsconfig.json                    ← TypeScript config
```

## Design Principles

1. **Clarity over cleverness** - Glyphs should be immediately recognizable
2. **Universal compatibility** - Support Unicode, SVG, and text fallbacks
3. **Semantic meaning** - Each glyph represents a specific concept
4. **Ecosystem coherence** - Consistent visual language across all products
5. **Accessibility** - Always provide text alternatives

## Contributing

BeaconGlyphs is part of the MirrorDNA-Reflection-Protocol organization.

**To propose a new glyph:**
1. Check the registry for existing similar glyphs
2. Follow the schema in `src/schema/glyph_schema.json`
3. Provide Unicode, SVG, and semantic description
4. Explain the use case within the ecosystem

## License

Part of the MirrorDNA ecosystem. See LICENSE for details.

## Questions?

- **What's the difference between BeaconGlyphs and Glyphtrail?**
  - BeaconGlyphs = the *vocabulary* (symbol definitions)
  - Glyphtrail = the *storyteller* (interaction logs using those symbols)

- **Can I add custom glyphs?**
  - Yes! Follow the schema and validate with `tooling/validate_registry.py`

- **Which glyph should I use for X?**
  - See the visual catalog: `docs/catalog.md`

---

**BeaconGlyphs** - Making continuity visible, one symbol at a time.

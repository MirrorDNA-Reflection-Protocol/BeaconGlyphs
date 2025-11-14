# BeaconGlyphs

**Visual symbol system for the MirrorDNA Constellation**

BeaconGlyphs provides 32 production-ready SVG glyphs that represent brands, states, events, and interactions across the MirrorDNA ecosystem. This repository is the canonical source for all visual symbols used in Glyphtrail, LingOS, Active MirrorOS, and other MirrorDNA products.

**Continuity Link:**
BeaconGlyphs v1.x is governed by **Master Citation v15.2**, ensuring symbolic consistency across all MirrorDNA visual systems.

---

## Quick Start

### View the Interactive Demo

```bash
cd examples/web-demo
open index.html  # macOS / xdg-open on Linux / start on Windows
```

### Use in Your Project

**React:**
```tsx
import { BeaconGlyph } from '@beaconglyphs/react';

<BeaconGlyph name="mirrordna" size="md" />
<BeaconGlyph name="state-verified" size="lg" />
```

**HTML + CSS:**
```html
<link rel="stylesheet" href="packages/css/beacon-glyphs.css">
<img src="assets/svg/mirrordna.svg" class="beacon-glyph beacon-glyph--md">
```

**Direct SVG:**
```html
<img src="assets/svg/continuity-chain.svg" width="32" height="32" alt="Continuity Chain">
```

---

## What's Included

### 32 Production Glyphs

**Brand Glyphs (7):**
- `mirrordna.svg` - Core continuity protocol
- `lingos.svg` - Language-native OS
- `activemirroros.svg` - Intelligence that remembers
- `trustbydesign.svg` - Safety framework
- `agentdna.svg` - Agent personality schemas
- `glyphtrail.svg` - Interaction logging
- `generic_beacon.svg` - Universal marker

**Symbolic Glyphs (25):**
Organized into 8 categories: Continuity, Identity, State, Events, Reflection, Governance, Navigation, Data

📖 **Full catalog:** [docs/glyph_catalog.md](docs/glyph_catalog.md)

### Developer Packages

- **React Components** (`packages/react/`) - TypeScript components with full type definitions
- **CSS Utilities** (`packages/css/`) - Design tokens, utility classes, animations
- **SVG Assets** (`assets/svg/`) - Optimized SVG files with accessibility attributes

### Documentation

- [Glyph Catalog](docs/glyph_catalog.md) - Visual reference for all glyphs
- [Usage Guidelines](docs/usage_guidelines.md) - Sizing, spacing, color rules
- [Integration Guide](docs/integration_guide.md) - Framework-specific examples
- [Branding Rules](docs/branding_rules.md) - Legal usage and trademarks

---

## Repository Structure

```
BeaconGlyphs/
├── assets/svg/          # 32 SVG glyphs (canonical source)
├── packages/
│   ├── react/          # React/TypeScript package
│   └── css/            # CSS utilities
├── docs/               # Documentation
├── examples/           # Usage examples
│   └── web-demo/       # Interactive showcase
├── tests/              # Test suites
└── tooling/            # Validation scripts
```

---

## Usage Examples

### React Components

```tsx
import { BeaconGlyph, GlyphBadge, GlyphStatus } from '@beaconglyphs/react';

// Basic usage
<BeaconGlyph name="mirrordna" size="md" />

// With custom styling
<BeaconGlyph
  name="continuity-chain"
  size={40}
  className="custom-class"
  style={{ color: '#667eea' }}
/>

// Interactive
<BeaconGlyph
  name="navigation-home"
  onClick={() => navigate('/home')}
/>

// Badge variant
<GlyphBadge glyph="state-verified" label="Verified" />

// Status indicator
<GlyphStatus glyph="state-active" status="active" label="Online" />
```

### CSS Utilities

```html
<!-- Size variants -->
<img class="beacon-glyph beacon-glyph--xs">  <!-- 16px -->
<img class="beacon-glyph beacon-glyph--sm">  <!-- 24px -->
<img class="beacon-glyph beacon-glyph--md">  <!-- 32px -->
<img class="beacon-glyph beacon-glyph--lg">  <!-- 48px -->

<!-- Color variants -->
<img class="beacon-glyph beacon-glyph--primary">
<img class="beacon-glyph beacon-glyph--success">

<!-- Animations -->
<img class="beacon-glyph beacon-glyph--pulse">
<img class="beacon-glyph beacon-glyph--spin">
```

---

## Role in MirrorDNA Constellation

**Layer:** Symbolic Layer

**Purpose:** Provides the visual vocabulary for all MirrorDNA products

**Used by:**
- **Glyphtrail** - Visual lineage tracking
- **LingOS** - State indicators for reflective dialogue
- **Active MirrorOS** - UI icons for agent states
- **MirrorDNA-Standard** - Protocol-level symbolic notation

**Dependencies:** None (foundational layer)

---

## Design Principles

1. **Clarity** - Glyphs must be immediately recognizable
2. **Consistency** - Unified visual language across all products
3. **Accessibility** - WCAG 2.1 Level AA compliant
4. **Semantic meaning** - Each glyph represents a specific concept
5. **Framework agnostic** - SVG-first with universal compatibility

---

## Technical Specifications

### SVG Standards
- Format: SVG 1.1
- ViewBox: `0 0 48 48`
- Color: `currentColor` for CSS inheritance
- Accessibility: `<title>` and `<desc>` elements
- File size: <5KB per glyph

### React Package
- Framework: React >=16.8.0
- Language: TypeScript 5.0+
- Bundle size: ~8KB (minified + gzipped)

### CSS Framework
- Methodology: Utility-first with design tokens
- Browser support: Modern browsers (Chrome, Firefox, Safari, Edge)
- Dark mode: `prefers-color-scheme` + manual `.dark` class
- File size: 12KB (minified)

---

## Testing

### Run React Tests
```bash
cd packages/react
npm install
npm test
```

### Validate Registry
```bash
python tooling/validate_registry.py
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on proposing new glyphs or improving existing ones.

**Before proposing a glyph:**
1. Check [docs/glyph_catalog.md](docs/glyph_catalog.md) for existing symbols
2. Ensure it's used repeatedly across the ecosystem (not one-off)
3. Follow SVG best practices in [tests/lint/svg_validation_notes.md](tests/lint/svg_validation_notes.md)

---

## Roadmap

See [ROADMAP.md](ROADMAP.md) for planned features and improvements.

**Upcoming:**
- NPM package publishing
- Figma component library
- Additional framework support (Vue, Angular, Svelte)
- Animated glyph variants
- CDN distribution

---

## License

MIT License - See [LICENSE](LICENSE)

**Trademarks:** "BeaconGlyphs" and associated brand names are trademarks of N1 Intelligence Inc. See [docs/branding_rules.md](docs/branding_rules.md) for usage guidelines.

---

## FAQ

**Q: What's the difference between BeaconGlyphs and Glyphtrail?**
A: BeaconGlyphs = the vocabulary (symbol definitions). Glyphtrail = the storyteller (interaction logs using those symbols).

**Q: Can I use these in my project?**
A: Yes! MIT licensed with attribution required. See [docs/branding_rules.md](docs/branding_rules.md)

**Q: Which glyph should I use for X?**
A: See the visual catalog: [docs/glyph_catalog.md](docs/glyph_catalog.md)

**Q: How do I integrate with my framework?**
A: See framework examples: [docs/integration_guide.md](docs/integration_guide.md)

---

**Version:** 1.0.0
**Maintained by:** MirrorDNA-Reflection-Protocol
**Layer:** Symbolic Layer

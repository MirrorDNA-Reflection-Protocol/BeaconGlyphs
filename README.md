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

### 1. Browse the Glyph Registry

```bash
# View all available glyphs
cat src/glyphs/registry.json

# Or explore by category
ls src/glyphs/
```

### 2. Use in Your Project

```python
# Python example
from beaconglyphs import get_glyph

# Get a continuity marker glyph
glyph = get_glyph("continuity.chain")
print(glyph.unicode)  # → ⛓️
print(glyph.description)  # → "Unbroken continuity chain"
```

```javascript
// JavaScript example
import { getGlyph } from 'beaconglyphs';

const glyph = getGlyph('continuity.chain');
console.log(glyph.svg);  // SVG path data
```

### 3. Explore Examples

```bash
# View usage examples
ls examples/

# Run example renderer
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

## Documentation

- [**Overview & Philosophy**](docs/overview.md) - Design principles and visual language
- [**Architecture**](docs/architecture.md) - Schema structure and registry format
- [**Usage Guide**](docs/usage.md) - Integration patterns and best practices
- [**Glyph Catalog**](docs/catalog.md) - Complete visual reference

## Installation

BeaconGlyphs is a **reference and schema repository**. It does not require traditional installation.

**To use the glyph definitions:**

1. Clone this repository
2. Import the glyph registry (`src/glyphs/registry.json`)
3. Use the schema to validate your own glyph usage
4. Reference the visual catalog in `docs/catalog.md`

**For development integration:**
```bash
# Python
pip install -e .

# JavaScript/Node
npm link
```

## Project Structure

```
BeaconGlyphs/
├── README.md                 ← You are here
├── docs/
│   ├── overview.md          ← Design philosophy
│   ├── architecture.md      ← Schema and structure
│   ├── usage.md             ← Integration guide
│   └── catalog.md           ← Visual glyph reference
├── src/
│   ├── schema/
│   │   └── glyph_schema.json    ← JSON schema for glyphs
│   └── glyphs/
│       └── registry.json        ← Complete glyph registry
├── examples/
│   ├── render_glyphs.py         ← Python usage example
│   ├── web_display.html         ← Web integration example
│   └── glyphtrail_integration/  ← Glyphtrail usage
├── tests/
│   └── test_schema_validation.py
└── tooling/
    └── validate_registry.py     ← Glyph validation tool
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

# BeaconGlyphs Architecture

## System Structure

BeaconGlyphs is structured as a **schema-first, data-driven symbol system**. This means:

1. The schema defines what makes a valid glyph
2. The registry implements that schema with concrete glyphs
3. Applications consume the registry and validate against the schema
4. Tooling ensures consistency and correctness

```
┌─────────────────────────────────────────┐
│         Schema Definition               │
│   (glyph_schema.json)                   │
│   Defines structure, validation rules   │
└──────────────┬──────────────────────────┘
               │ validates
               ↓
┌─────────────────────────────────────────┐
│         Glyph Registry                  │
│   (registry.json)                       │
│   All defined glyphs + metadata         │
└──────────────┬──────────────────────────┘
               │ consumed by
               ↓
┌─────────────────────────────────────────┐
│         Applications                    │
│   Glyphtrail, LingOS, MirrorOS, etc.    │
│   Use glyphs for visual representation  │
└─────────────────────────────────────────┘
```

## Schema Design

The JSON schema (`src/schema/glyph_schema.json`) defines the structure of a valid BeaconGlyph.

### Core Fields

Every glyph must have:

- **id**: Unique identifier in dot notation (e.g., `continuity.chain`)
- **category**: Primary category (continuity, identity, state, events, reflection, governance, navigation, data)
- **name**: Human-readable name
- **description**: Semantic meaning and usage context
- **representations**: Visual forms (unicode, text, svg, emoji)

### Optional Metadata

Glyphs can include:

- **tags**: Searchable keywords
- **useCases**: Where this glyph is typically used
- **accessibility**: Screen reader description
- **relatedGlyphs**: Semantically connected glyphs
- **variants**: Alternative states (active, inactive, error, success)

### Why This Structure?

1. **Machine-readable**: Can be validated programmatically
2. **Human-readable**: Clear semantic descriptions
3. **Multi-format**: Supports multiple visual representations
4. **Extensible**: Easy to add new fields without breaking existing tools
5. **Self-documenting**: Metadata explains usage context

## Registry Format

The registry (`src/glyphs/registry.json`) is a versioned collection of all defined glyphs.

### Top-Level Structure

```json
{
  "version": "1.0.0",
  "description": "BeaconGlyphs Registry...",
  "lastUpdated": "2025-11-13",
  "glyphs": [
    { /* glyph objects */ }
  ]
}
```

### Versioning

The registry uses semantic versioning:

- **Major** (1.0.0): Breaking changes to glyph meanings or IDs
- **Minor** (1.1.0): New glyphs added
- **Patch** (1.0.1): Corrections to existing glyphs (typos, metadata)

### Glyph ID Naming

IDs follow the pattern: `category.specific_name`

Examples:
- `continuity.chain`
- `identity.dna`
- `state.verified`
- `events.warning`

**Rules:**
- All lowercase
- Category comes first
- Use underscore for multi-word names
- Keep concise but descriptive
- No abbreviations unless universally recognized

## Categories

### Continuity
Glyphs representing session persistence, memory linkage, and temporal flow.

**Examples:** chain, link, infinity, broken

**Use in:** Glyphtrail logs, session state indicators, memory persistence markers

### Identity
Glyphs representing agent personas, unique signatures, and MirrorDNA identity.

**Examples:** dna, mask, diamond

**Use in:** Agent profiles, identity verification, persona switching

### State
Glyphs representing system or component states.

**Examples:** verified, active, protected, locked

**Use in:** UI status indicators, health checks, trust boundaries

### Events
Glyphs marking significant moments, transitions, or milestones.

**Examples:** flag, cycle, warning, start, stop

**Use in:** Log markers, event notifications, milestone tracking

### Reflection
Glyphs representing self-reference, mirroring, and introspection.

**Examples:** mirror, bidirectional, recursive

**Use in:** LingOS reflection operations, mirror protocol events

### Governance
Glyphs representing trust, compliance, and oversight.

**Examples:** balance, certified

**Use in:** Compliance checks, certification markers, governance dashboards

### Navigation
Glyphs for movement, direction, and wayfinding.

**Examples:** home, forward

**Use in:** UI navigation, flow diagrams, progression indicators

### Data
Glyphs representing information, storage, and data flow.

**Examples:** memory, stream

**Use in:** Data persistence indicators, stream status, storage markers

## Representation Types

### Unicode
Single Unicode character or emoji. Broadest compatibility.

**Pros:** Works in any modern terminal or text editor
**Cons:** Limited visual customization

### Text
ASCII-only fallback for environments without Unicode support.

**Format:** `[KEYWORD]` in all caps
**Pros:** Works everywhere, grep-able
**Cons:** Not visually distinctive

### Emoji
When applicable, the emoji representation.

**Pros:** Colorful, recognizable, emotionally expressive
**Cons:** May look different across platforms

### SVG
Scalable vector graphics path or inline SVG.

**Pros:** Fully customizable, scales perfectly, supports color
**Cons:** Requires rendering engine, larger file size

**Note:** SVG support is optional but recommended for UI-focused glyphs.

## Validation and Tooling

### Schema Validation

All glyphs in the registry must validate against the schema:

```bash
python tooling/validate_registry.py
```

This checks:
- Required fields are present
- ID format is correct
- Category is valid
- Representations are well-formed

### Extensibility

To add a new category:

1. Update the schema's `category` enum
2. Define the semantic scope of the category
3. Add at least 2-3 glyphs to populate it
4. Document the category in this file

To add a new representation type:

1. Add it to the schema's `representations` object
2. Update validation tooling
3. Add examples to the catalog
4. Update integration examples

## Integration Patterns

### Static Import

Applications can import the registry as a static JSON file:

```python
import json

with open('registry.json', 'r') as f:
    glyphs = json.load(f)
```

### Runtime Lookup

Create a glyph lookup function:

```python
def get_glyph(glyph_id):
    for glyph in registry['glyphs']:
        if glyph['id'] == glyph_id:
            return glyph
    return None
```

### Category Filtering

Filter glyphs by category:

```python
def get_category_glyphs(category):
    return [g for g in registry['glyphs']
            if g['category'] == category]
```

### Search by Tag

Enable semantic search:

```python
def find_by_tag(tag):
    return [g for g in registry['glyphs']
            if tag in g.get('metadata', {}).get('tags', [])]
```

## Performance Considerations

### Registry Size

The current registry contains 25 glyphs. Expected to grow to ~100-200 glyphs as the ecosystem matures.

**File size:** ~20-40 KB for the full registry
**Parse time:** < 1ms on modern hardware
**Memory footprint:** Negligible

### Caching

For applications that access glyphs frequently:

1. Load the registry once at startup
2. Build an in-memory index by ID
3. Cache frequently-used glyphs
4. Refresh only when registry version changes

### Lazy Loading

For large applications:

1. Load only the categories you need
2. Lazy-load SVG representations on demand
3. Use text fallbacks in performance-critical paths

## Future Architecture Considerations

### Distributed Registry

As the ecosystem grows, we may split the registry:

```
registry/
  ├── core.json          # Essential glyphs
  ├── extended.json      # Optional glyphs
  └── custom/            # Organization-specific glyphs
      └── company_x.json
```

### Versioned APIs

Potential API endpoint for dynamic registry access:

```
GET /api/glyphs/v1/registry.json
GET /api/glyphs/v1/glyph/{id}
GET /api/glyphs/v1/category/{category}
```

### Binary Formats

For embedded systems or performance-critical applications, consider:

- Protocol Buffers version of the schema
- MessagePack encoding for smaller file size
- Pre-rendered glyph atlases for UI frameworks

---

**Architecture Principle:** Keep the schema simple, make the registry rich, let applications decide how to consume it.

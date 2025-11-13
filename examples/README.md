# BeaconGlyphs Examples

This directory contains practical, working examples demonstrating how to use BeaconGlyphs in different contexts.

## Available Examples

### 1. Python Usage (`render_glyphs.py`)

**Purpose:** Comprehensive Python integration example
**What it demonstrates:**
- Loading the glyph registry
- Creating a simple wrapper class
- Getting glyphs by ID
- Filtering by category
- Searching by tags
- Rendering status indicators
- Creating continuity visualizations
- Generating event logs

**How to run:**
```bash
python examples/render_glyphs.py
```

**Expected output:** Multiple demos showing different usage patterns with visual glyph output.

---

### 2. Web Display (`web_display.html`)

**Purpose:** Web/HTML integration with interactive UI
**What it demonstrates:**
- Loading registry via JavaScript
- Displaying glyphs in a web interface
- Category-based organization
- Interactive glyph cards
- Status indicator demos
- Timeline visualization
- Event log rendering

**How to run:**
```bash
# Open in browser
open examples/web_display.html

# Or with a local server
python -m http.server 8000
# Then visit: http://localhost:8000/examples/web_display.html
```

**Expected output:** Beautiful, interactive web page showcasing all glyphs.

---

### 3. Glyphtrail Integration (`glyphtrail_integration/`)

**Purpose:** Real-world integration example for Glyphtrail
**What it demonstrates:**
- Event-to-glyph mapping
- Session lineage rendering
- Continuity health tracking
- Timeline generation
- Complete interaction logs

**How to run:**
```bash
python examples/glyphtrail_integration/session_renderer.py
```

**Expected output:** Three demo sessions with different patterns (typical, broken continuity, recursive reflection).

**Files:**
- `session_renderer.py` - Main implementation
- `README.md` - Detailed integration guide

---

## Integration Patterns

All examples follow these best practices:

1. **Load registry once** at initialization
2. **Build an index** for fast lookups (`{id: glyph}`)
3. **Provide fallbacks** (unicode → text)
4. **Document usage** clearly
5. **Show real use cases** not toy examples

## Creating Your Own Example

If you want to add a new example:

1. Follow the existing pattern (load, index, use)
2. Add a clear docstring explaining what it demonstrates
3. Make it runnable without dependencies (or document them in `requirements.txt`)
4. Show multiple usage patterns
5. Update this README

## Common Patterns

### Basic Glyph Access
```python
import json

with open('src/glyphs/registry.json') as f:
    registry = json.load(f)

def get_glyph(glyph_id):
    for glyph in registry['glyphs']:
        if glyph['id'] == glyph_id:
            return glyph
    return None

# Use it
chain = get_glyph('continuity.chain')
print(chain['representations']['unicode'])  # ⛓️
```

### Building an Index
```python
glyph_index = {g['id']: g for g in registry['glyphs']}

# Fast lookup
dna = glyph_index['identity.dna']
```

### Category Filtering
```python
continuity_glyphs = [
    g for g in registry['glyphs']
    if g['category'] == 'continuity'
]
```

### Tag Search
```python
def find_by_tag(tag):
    return [
        g for g in registry['glyphs']
        if tag in g.get('metadata', {}).get('tags', [])
    ]
```

## Questions?

- See main README: `../README.md`
- Check usage guide: `../docs/usage.md`
- Browse catalog: `../docs/catalog.md`

---

**Remember:** These are reference implementations. Feel free to adapt them to your specific needs!

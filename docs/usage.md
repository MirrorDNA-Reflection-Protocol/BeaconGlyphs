# BeaconGlyphs Usage Guide

## Getting Started

### Installation

BeaconGlyphs is a reference repository. You can use it in several ways:

**1. Direct JSON Import**
```bash
# Clone the repository
git clone https://github.com/MirrorDNA-Reflection-Protocol/BeaconGlyphs.git

# Use the registry directly
cat BeaconGlyphs/registry/glyphs/registry.json
```

**2. As a Git Submodule**
```bash
# Add to your project
git submodule add https://github.com/MirrorDNA-Reflection-Protocol/BeaconGlyphs.git

# Access glyphs in your code
import json
with open('BeaconGlyphs/registry/glyphs/registry.json') as f:
    glyphs = json.load(f)
```

**3. Copy What You Need**
```bash
# Just copy the registry
cp BeaconGlyphs/registry/glyphs/registry.json ./glyphs.json
```

### Basic Usage

#### Python Example

```python
import json

# Load the registry
with open('registry/glyphs/registry.json', 'r') as f:
    registry = json.load(f)

# Helper function to get a glyph
def get_glyph(glyph_id):
    for glyph in registry['glyphs']:
        if glyph['id'] == glyph_id:
            return glyph
    return None

# Use a glyph
continuity = get_glyph('continuity.chain')
print(f"{continuity['representations']['unicode']} {continuity['name']}")
# Output: ⛓️ Continuity Chain

# Access different representations
print(f"Unicode: {continuity['representations']['unicode']}")
print(f"Text: {continuity['representations']['text']}")
print(f"Description: {continuity['description']}")
```

#### JavaScript Example

```javascript
const fs = require('fs');

// Load the registry
const registry = JSON.parse(
  fs.readFileSync('registry/glyphs/registry.json', 'utf8')
);

// Helper function
function getGlyph(glyphId) {
  return registry.glyphs.find(g => g.id === glyphId);
}

// Use a glyph
const dna = getGlyph('identity.dna');
console.log(`${dna.representations.unicode} ${dna.name}`);
// Output: 🧬 DNA Helix

// Build an index for faster lookups
const glyphIndex = {};
registry.glyphs.forEach(g => {
  glyphIndex[g.id] = g;
});

// Fast access
const verified = glyphIndex['state.verified'];
```

#### Shell/CLI Example

```bash
# Extract all glyphs in a category
jq '.glyphs[] | select(.category == "continuity")' registry/glyphs/registry.json

# Get just the unicode representation
jq -r '.glyphs[] | select(.id == "continuity.chain") | .representations.unicode' \
  registry/glyphs/registry.json

# List all glyph IDs
jq -r '.glyphs[].id' registry/glyphs/registry.json
```

## Common Patterns

### 1. Status Indicators

Use state glyphs to show system status:

```python
def show_status(service_name, is_active, is_verified):
    status = []

    if is_active:
        status.append(get_glyph('state.active')['representations']['unicode'])

    if is_verified:
        status.append(get_glyph('state.verified')['representations']['unicode'])

    print(f"{service_name}: {' '.join(status)}")

# Output: MirrorDNA Service: ⚡ ✓
```

### 2. Event Logging

Mark events in logs with glyphs:

```python
import logging

class GlyphFormatter(logging.Formatter):
    GLYPHS = {
        'WARNING': get_glyph('events.warning')['representations']['unicode'],
        'INFO': get_glyph('events.flag')['representations']['unicode'],
        'ERROR': get_glyph('continuity.broken')['representations']['unicode'],
    }

    def format(self, record):
        glyph = self.GLYPHS.get(record.levelname, '')
        return f"{glyph} {super().format(record)}"

# Log output:
# ⚑ Session started
# ⚠ Low memory warning
# ⚠ Continuity check failed
```

### 3. UI State Display

```javascript
function renderAgentStatus(agent) {
  const glyphs = [];

  // Identity marker
  glyphs.push(getGlyph('identity.dna').representations.unicode);

  // Active state
  if (agent.isActive) {
    glyphs.push(getGlyph('state.active').representations.unicode);
  }

  // Protected status
  if (agent.isTrusted) {
    glyphs.push(getGlyph('state.protected').representations.unicode);
  }

  return `<span class="agent-status">${glyphs.join(' ')}</span>`;
}

// Output: <span class="agent-status">🧬 ⚡ 🛡️</span>
```

### 4. Continuity Visualization

```python
def render_continuity_chain(sessions):
    """Render a visual continuity chain from session data."""
    chain = []

    for i, session in enumerate(sessions):
        if session.get('continuous'):
            chain.append(get_glyph('continuity.link')['representations']['unicode'])
        else:
            chain.append(get_glyph('continuity.broken')['representations']['unicode'])

    return ' '.join(chain)

# Example output: 🔗 🔗 ⚠ 🔗 🔗
```

### 5. Category-Based Selection

```python
def get_all_continuity_glyphs():
    """Get all glyphs in the continuity category."""
    return [
        g for g in registry['glyphs']
        if g['category'] == 'continuity'
    ]

def render_category_palette(category):
    """Display all glyphs in a category."""
    glyphs = [g for g in registry['glyphs'] if g['category'] == category]

    for glyph in glyphs:
        print(f"{glyph['representations']['unicode']} - {glyph['name']}")
        print(f"   {glyph['description']}")
        print()
```

## Integration Examples

### Glyphtrail Integration

```python
class GlyphtrailRenderer:
    """Render interaction lineages with BeaconGlyphs."""

    def render_event(self, event):
        glyph_map = {
            'session_start': 'events.start',
            'reflection': 'reflection.mirror',
            'continuity_verified': 'state.verified',
            'session_end': 'events.stop',
        }

        glyph_id = glyph_map.get(event.type, 'events.flag')
        glyph = get_glyph(glyph_id)

        return f"{glyph['representations']['unicode']} {event.timestamp} - {event.description}"

# Output:
# ▶ 2025-11-13 10:00 - Session started
# 🪞 2025-11-13 10:05 - Reflection checkpoint
# ✓ 2025-11-13 10:10 - Continuity verified
# ■ 2025-11-13 10:30 - Session ended
```

### LingOS Status Bar

```python
class LingOSStatusBar:
    """Display system status using BeaconGlyphs."""

    def render(self, system_state):
        indicators = []

        # Memory persistence
        if system_state.has_memory:
            indicators.append(get_glyph('data.memory')['representations']['unicode'])

        # Continuity
        if system_state.continuous:
            indicators.append(get_glyph('continuity.infinity')['representations']['unicode'])

        # Active reflection
        if system_state.reflecting:
            indicators.append(get_glyph('reflection.mirror')['representations']['unicode'])

        # Trust state
        if system_state.trusted:
            indicators.append(get_glyph('state.protected')['representations']['unicode'])

        return f"LingOS [{' '.join(indicators)}]"

# Output: LingOS [💾 ∞ 🪞 🛡️]
```

### MirrorDNA Protocol Events

```python
class ProtocolEventLogger:
    """Log MirrorDNA protocol events with glyphs."""

    EVENT_GLYPHS = {
        'identity.created': 'identity.dna',
        'identity.verified': 'state.verified',
        'continuity.established': 'continuity.chain',
        'continuity.broken': 'continuity.broken',
        'reflection.performed': 'reflection.mirror',
        'governance.checked': 'governance.balance',
    }

    def log_event(self, event_type, message):
        glyph_id = self.EVENT_GLYPHS.get(event_type, 'events.flag')
        glyph = get_glyph(glyph_id)

        print(f"{glyph['representations']['unicode']} [{event_type}] {message}")

# Usage:
logger = ProtocolEventLogger()
logger.log_event('identity.created', 'Agent DNA initialized')
logger.log_event('continuity.established', 'Session chain linked')

# Output:
# 🧬 [identity.created] Agent DNA initialized
# ⛓️ [continuity.established] Session chain linked
```

## Advanced Usage

### Custom Glyph Library

Build a wrapper library for your application:

```python
class BeaconGlyphLibrary:
    def __init__(self, registry_path):
        with open(registry_path, 'r') as f:
            self.registry = json.load(f)
        self._index = {g['id']: g for g in self.registry['glyphs']}

    def get(self, glyph_id, format='unicode'):
        """Get a glyph in a specific format."""
        glyph = self._index.get(glyph_id)
        if not glyph:
            return None
        return glyph['representations'].get(format)

    def search(self, tag):
        """Search glyphs by tag."""
        return [
            g for g in self.registry['glyphs']
            if tag in g.get('metadata', {}).get('tags', [])
        ]

    def category(self, category_name):
        """Get all glyphs in a category."""
        return [
            g for g in self.registry['glyphs']
            if g['category'] == category_name
        ]

# Usage:
glyphs = BeaconGlyphLibrary('registry/glyphs/registry.json')
print(glyphs.get('continuity.chain'))  # ⛓️
print(glyphs.get('continuity.chain', 'text'))  # [CHAIN]

# Search by tag
memory_glyphs = glyphs.search('memory')
```

### Glyph Variants

Use variants for state changes:

```python
def render_lock_state(is_locked):
    glyph = get_glyph('state.locked')

    if is_locked:
        return glyph['representations']['unicode']  # 🔒
    else:
        return glyph['variants']['active']  # 🔓
```

### Accessibility Support

Always provide accessible alternatives:

```python
def accessible_glyph(glyph_id):
    glyph = get_glyph(glyph_id)
    unicode_repr = glyph['representations']['unicode']
    accessible_text = glyph['metadata'].get('accessibility', glyph['name'])

    return f'<span aria-label="{accessible_text}">{unicode_repr}</span>'

# Output: <span aria-label="Continuity chain - indicates unbroken session link">⛓️</span>
```

## Best Practices

1. **Always provide fallbacks**
   ```python
   glyph = get_glyph('continuity.chain')
   display = glyph['representations'].get('unicode',
             glyph['representations']['text'])
   ```

2. **Cache the registry**
   ```python
   # Load once at startup, not on every access
   GLYPH_REGISTRY = load_registry()
   ```

3. **Document your glyph usage**
   ```python
   # Good: Explains why this glyph is used
   # Using continuity.chain to indicate unbroken session linkage
   status = get_glyph('continuity.chain')['representations']['unicode']
   ```

4. **Validate glyph IDs**
   ```python
   def safe_get_glyph(glyph_id):
       glyph = get_glyph(glyph_id)
       if not glyph:
           logging.warning(f"Unknown glyph: {glyph_id}")
           return get_glyph('events.warning')  # Fallback
       return glyph
   ```

5. **Consider context**
   ```python
   # In UI: Use unicode/emoji
   ui_glyph = glyph['representations']['unicode']

   # In logs: Use text for grep-ability
   log_glyph = glyph['representations']['text']
   ```

## Troubleshooting

**Glyph not displaying correctly?**
- Check Unicode support in your terminal/font
- Use the text fallback: `glyph['representations']['text']`
- Verify the glyph ID exists in the registry

**Can't find the right glyph?**
- Search by tag: look in metadata.tags
- Browse the visual catalog: `docs/catalog.md`
- Check related glyphs: metadata.relatedGlyphs

**Need a glyph that doesn't exist?**
- Check if a combination of existing glyphs works
- Propose a new glyph following the schema
- Submit a PR to the BeaconGlyphs repository

---

**Remember:** Glyphs enhance communication but shouldn't replace it. When in doubt, use clear text.

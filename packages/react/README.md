# @beaconglyphs/react

React components for BeaconGlyphs - the visual and symbolic language system for the MirrorDNA ecosystem.

## Installation

```bash
npm install @beaconglyphs/react
# or locally for development
npm install
npm link
```

## Usage

### Basic Example

```tsx
import { BeaconGlyph } from '@beaconglyphs/react';

function App() {
  return (
    <div>
      {/* Brand glyphs */}
      <BeaconGlyph name="mirrordna" size="lg" />
      <BeaconGlyph name="lingos" size={48} />

      {/* Symbolic glyphs */}
      <BeaconGlyph name="continuity-chain" size="md" />
      <BeaconGlyph name="state-verified" size="sm" />
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Glyph name (e.g., 'mirrordna', 'continuity-chain') |
| `size` | `'sm' \| 'md' \| 'lg' \| number` | `'md'` | Size variant or pixel value |
| `variant` | `'filled' \| 'outline'` | `'filled'` | Visual variant |
| `title` | `string` | - | Custom accessibility title |
| `className` | `string` | - | Additional CSS class |
| `style` | `CSSProperties` | - | Inline styles |
| `onClick` | `() => void` | - | Click handler |

### Size Options

- `'sm'`: 24px
- `'md'`: 32px (default)
- `'lg'`: 48px
- `number`: Custom pixel size

### Available Glyphs

**Brand/Product Glyphs:**
- `mirrordna` - Identity and continuity protocol
- `lingos` - Language-native OS
- `activemirroros` - Intelligence that remembers
- `trustbydesign` - Safety and governance framework
- `agentdna` - Agent personality schemas
- `glyphtrail` - Interaction lineage logs
- `generic_beacon` - Universal beacon marker

**Symbolic Glyphs (25 total):**
- Continuity: `continuity-chain`, `continuity-link`, `continuity-infinity`, `continuity-broken`
- Identity: `identity-dna`, `identity-mask`, `identity-diamond`
- State: `state-verified`, `state-active`, `state-protected`, `state-locked`
- Events: `events-flag`, `events-cycle`, `events-warning`, `events-start`, `events-stop`
- Reflection: `reflection-mirror`, `reflection-bidirectional`, `reflection-recursive`
- Governance: `governance-balance`, `governance-certified`
- Navigation: `navigation-home`, `navigation-forward`
- Data: `data-memory`, `data-stream`

### Utility Functions

```tsx
import { getGlyph, getGlyphsByCategory } from '@beaconglyphs/react';

// Get glyph definition
const glyph = getGlyph('mirrordna');
console.log(glyph.displayName); // "MirrorDNA"

// Get all glyphs in a category
const continuityGlyphs = getGlyphsByCategory('continuity');
```

### Error Handling

If an unknown glyph name is provided, the component will:
1. Log a warning in development mode
2. Render a fallback "?" symbol
3. Include an error class `beacon-glyph-error`

```tsx
<BeaconGlyph name="unknown-glyph" />
// Renders: <span class="beacon-glyph beacon-glyph-error">?</span>
```

## Local Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Link for local testing
npm link

# In your project
npm link @beaconglyphs/react
```

## TypeScript Support

Full TypeScript definitions included. All props are typed for IntelliSense support.

## License

MIT - Part of the MirrorDNA ecosystem

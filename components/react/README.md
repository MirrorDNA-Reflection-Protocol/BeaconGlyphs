## BeaconGlyphs React Components

Production-ready React components for BeaconGlyphs.

### Installation

```bash
npm install beaconglyphs
# or
yarn add beaconglyphs
```

### Usage

#### Basic Glyph

```tsx
import { BeaconGlyph } from 'beaconglyphs/react';

function App() {
  return (
    <div>
      <BeaconGlyph id="continuity.chain" />
      <BeaconGlyph id="identity.dna" size="lg" color="primary" />
      <BeaconGlyph id="state.active" animate="pulse" />
    </div>
  );
}
```

#### Badge with Glyph

```tsx
import { GlyphBadge } from 'beaconglyphs/react';

<GlyphBadge
  glyphId="state.verified"
  label="Verified"
  variant="success"
/>
```

#### Status Indicator

```tsx
import { GlyphStatus } from 'beaconglyphs/react';

<GlyphStatus
  glyphId="state.active"
  label="System Active"
  status="success"
/>
```

#### Glyph Group

```tsx
import { GlyphGroup, BeaconGlyph } from 'beaconglyphs/react';

<GlyphGroup>
  <BeaconGlyph id="identity.dna" />
  <BeaconGlyph id="state.active" />
  <BeaconGlyph id="state.protected" />
</GlyphGroup>
```

### Props

#### BeaconGlyph

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `GlyphId` | required | Glyph identifier |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Glyph size |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'muted'` | - | Color theme |
| `animate` | `'pulse' \| 'spin' \| 'bounce'` | - | Animation type |
| `interactive` | `boolean` | `false` | Make glyph interactive |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `() => void` | - | Click handler |

#### GlyphBadge

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glyphId` | `GlyphId` | required | Glyph identifier |
| `label` | `string` | required | Badge text |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Badge style |
| `onClick` | `() => void` | - | Click handler |

#### GlyphStatus

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glyphId` | `GlyphId` | required | Glyph identifier |
| `label` | `string` | required | Status label |
| `status` | `'success' \| 'warning' \| 'error' \| 'info'` | - | Status indicator |
| `showDot` | `boolean` | `true` | Show status dot |

### TypeScript Support

All components are written in TypeScript with full type definitions included.

### Styling

Import the CSS file in your app:

```tsx
import 'beaconglyphs/css/beaconglyphs.css';
```

Or use your own custom styles by targeting the classes.

### Accessibility

All components include proper ARIA labels and semantic HTML for screen readers.

### Dark Mode

Components automatically adapt to dark mode when `prefers-color-scheme: dark` is detected.

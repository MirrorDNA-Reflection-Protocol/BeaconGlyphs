# BeaconGlyphs Integration Guide

Complete guide to integrating BeaconGlyphs into your applications, websites, and services.

---

## Installation Methods

### 1. NPM Package (Recommended)

```bash
npm install @beaconglyphs/react
# or
yarn add @beaconglyphs/react
```

Then import in your code:

```tsx
import { BeaconGlyph } from '@beaconglyphs/react';
import '@beaconglyphs/css';

function App() {
  return <BeaconGlyph name="mirrordna" size="lg" />;
}
```

### 2. Direct SVG Import

Copy SVG files from `assets/svg/` to your project:

```html
<img src="/assets/svg/mirrordna.svg" alt="MirrorDNA" width="48" height="48">
```

### 3. CDN (Static Sites)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/@beaconglyphs/css/beacon-glyphs.css">

<!-- SVG via img tag -->
<img src="https://unpkg.com/@beaconglyphs/assets/svg/mirrordna.svg" alt="MirrorDNA">
```

### 4. Git Submodule

For direct access to all assets:

```bash
git submodule add https://github.com/MirrorDNA-Reflection-Protocol/BeaconGlyphs.git
```

---

## React Integration

### Basic Usage

```tsx
import { BeaconGlyph } from '@beaconglyphs/react';

function MyComponent() {
  return (
    <div>
      {/* Brand glyph */}
      <BeaconGlyph name="mirrordna" size="lg" />

      {/* Symbolic glyph */}
      <BeaconGlyph name="continuity-chain" size="md" />

      {/* With custom title */}
      <BeaconGlyph
        name="state-verified"
        size="sm"
        title="Verification complete"
      />
    </div>
  );
}
```

### Props Reference

```tsx
interface BeaconGlyphProps {
  name: string;                    // Required: glyph name
  size?: 'sm' | 'md' | 'lg' | number; // Optional: size variant or pixels
  variant?: 'filled' | 'outline'; // Optional: visual variant
  title?: string;                  // Optional: custom accessibility title
  className?: string;              // Optional: additional CSS classes
  style?: React.CSSProperties;    // Optional: inline styles
  onClick?: () => void;           // Optional: click handler
}
```

### Advanced Example

```tsx
import { BeaconGlyph, getGlyph, getGlyphsByCategory } from '@beaconglyphs/react';

function StatusPanel() {
  const continuityGlyphs = getGlyphsByCategory('continuity');

  return (
    <div className="status-panel">
      {/* Status indicator with click handler */}
      <BeaconGlyph
        name="state-active"
        size="lg"
        onClick={() => console.log('Status clicked')}
        title="System active - click for details"
        className="status-icon"
      />

      {/* Dynamic glyph from data */}
      {continuityGlyphs.map(glyph => (
        <BeaconGlyph
          key={glyph.name}
          name={glyph.name}
          size="md"
          title={glyph.description}
        />
      ))}
    </div>
  );
}
```

---

## CSS Integration

### Using CSS Utilities

Include the CSS file:

```tsx
import '@beaconglyphs/css/beacon-glyphs.css';
import '@beaconglyphs/css/tokens.css'; // Design tokens
```

Apply utility classes:

```html
<!-- Basic glyph -->
<span class="glyph glyph-md"></span>

<!-- With size variants -->
<span class="glyph glyph-sm"></span>
<span class="glyph glyph-lg"></span>

<!-- With colors -->
<span class="glyph glyph-md glyph-primary"></span>
<span class="glyph glyph-md glyph-success"></span>
```

### Design Tokens

Access CSS variables:

```css
.custom-glyph {
  width: var(--beacon-glyph-size-md);
  height: var(--beacon-glyph-size-md);
  color: var(--beacon-color-primary);
  gap: var(--beacon-glyph-gap-md);
}
```

Available tokens:

```css
/* Sizing */
--beacon-glyph-size-xs: 1rem;
--beacon-glyph-size-sm: 1.5rem;
--beacon-glyph-size-md: 2rem;
--beacon-glyph-size-lg: 3rem;
--beacon-glyph-size-xl: 4rem;
--beacon-glyph-size-2xl: 5rem;

/* Colors */
--beacon-color-primary: #667eea;
--beacon-color-success: #10b981;
--beacon-color-warning: #f59e0b;
--beacon-color-error: #ef4444;

/* Spacing */
--beacon-glyph-gap-sm: 0.25rem;
--beacon-glyph-gap-md: 0.5rem;
--beacon-glyph-gap-lg: 0.75rem;
```

---

## HTML + Vanilla JS

### Direct SVG

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/beacon-glyphs.css">
</head>
<body>
  <!-- Direct img tag -->
  <img src="assets/svg/mirrordna.svg" alt="MirrorDNA" class="glyph glyph-lg">

  <!-- CSS background method -->
  <span class="glyph glyph-md" style="background-image: url('assets/svg/lingos.svg')"></span>
</body>
</html>
```

### JavaScript Helper

```javascript
// Helper function to create glyph elements
function createGlyph(name, size = 'md') {
  const img = document.createElement('img');
  img.src = `assets/svg/${name}.svg`;
  img.alt = name;
  img.className = `glyph glyph-${size}`;
  return img;
}

// Usage
const container = document.getElementById('glyphs');
container.appendChild(createGlyph('mirrordna', 'lg'));
container.appendChild(createGlyph('continuity-chain', 'md'));
```

---

## Vue.js Integration

### Component Wrapper

```vue
<template>
  <img
    :src="`/assets/svg/${name}.svg`"
    :alt="name"
    :class="`glyph glyph-${size}`"
    :title="title"
  />
</template>

<script>
export default {
  name: 'BeaconGlyph',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    },
    title: String
  }
}
</script>
```

### Usage

```vue
<template>
  <div>
    <BeaconGlyph name="mirrordna" size="lg" />
    <BeaconGlyph name="state-verified" size="sm" title="Verified" />
  </div>
</template>

<script>
import BeaconGlyph from './components/BeaconGlyph.vue';

export default {
  components: { BeaconGlyph }
}
</script>
```

---

## Angular Integration

### Component

```typescript
// beacon-glyph.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'beacon-glyph',
  template: `
    <img
      [src]="'assets/svg/' + name + '.svg'"
      [alt]="name"
      [class]="'glyph glyph-' + size"
      [title]="title"
    />
  `,
  styleUrls: ['./beacon-glyph.component.css']
})
export class BeaconGlyphComponent {
  @Input() name: string = '';
  @Input() size: string = 'md';
  @Input() title?: string;
}
```

### Usage

```html
<beacon-glyph name="mirrordna" size="lg"></beacon-glyph>
<beacon-glyph name="state-active" size="md" title="Active"></beacon-glyph>
```

---

## Svelte Integration

### Component

```svelte
<!-- BeaconGlyph.svelte -->
<script>
  export let name;
  export let size = 'md';
  export let title = '';
</script>

<img
  src={`/assets/svg/${name}.svg`}
  alt={name}
  class={`glyph glyph-${size}`}
  title={title}
/>
```

### Usage

```svelte
<script>
  import BeaconGlyph from './BeaconGlyph.svelte';
</script>

<BeaconGlyph name="mirrordna" size="lg" />
<BeaconGlyph name="continuity-chain" size="md" title="Continuity" />
```

---

## Theming

### Light/Dark Mode

BeaconGlyphs CSS automatically adapts to system theme:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --beacon-color-primary: #818cf8;
    --beacon-bg-primary: #111827;
  }
}
```

Manual dark mode:

```html
<html class="dark">
  <!-- Glyphs will use dark mode colors -->
</html>
```

### Custom Theme

Override CSS variables:

```css
:root {
  --beacon-color-primary: #your-brand-color;
  --beacon-glyph-size-md: 40px;
}
```

---

## Performance Optimization

### SVG Sprite Sheet

For many glyphs on one page, use a sprite sheet:

```html
<svg style="display: none;">
  <defs>
    <!-- Include all SVG definitions -->
    <symbol id="mirrordna" viewBox="0 0 48 48">
      <!-- SVG content -->
    </symbol>
  </defs>
</svg>

<!-- Use with <use> -->
<svg class="glyph glyph-lg">
  <use href="#mirrordna" />
</svg>
```

### Lazy Loading

For React:

```tsx
const BeaconGlyph = lazy(() => import('@beaconglyphs/react'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BeaconGlyph name="mirrordna" />
    </Suspense>
  );
}
```

### Caching

Set appropriate cache headers:

```
Cache-Control: public, max-age=31536000, immutable
```

---

## Accessibility

### Always Provide Alt Text

```tsx
// React
<BeaconGlyph name="mirrordna" title="MirrorDNA Protocol" />

// HTML
<img src="mirrordna.svg" alt="MirrorDNA Protocol">
```

### Interactive Glyphs

```tsx
<BeaconGlyph
  name="navigation-home"
  onClick={goHome}
  role="button"
  tabIndex={0}
  title="Return to home"
/>
```

### Screen Reader Support

Ensure semantic HTML:

```html
<button>
  <BeaconGlyph name="state-verified" />
  <span class="sr-only">Verification status: Verified</span>
</button>
```

---

## Testing

### Visual Regression

Test glyph rendering:

```tsx
import { render } from '@testing-library/react';
import { BeaconGlyph } from '@beaconglyphs/react';

test('renders glyph correctly', () => {
  const { container } = render(<BeaconGlyph name="mirrordna" />);
  expect(container.querySelector('img')).toBeInTheDocument();
});
```

### Snapshot Testing

```tsx
import renderer from 'react-test-renderer';

test('glyph matches snapshot', () => {
  const tree = renderer.create(<BeaconGlyph name="mirrordna" size="lg" />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## Common Patterns

### Status Badge

```tsx
function StatusBadge({ status, label }) {
  const glyphMap = {
    verified: 'state-verified',
    active: 'state-active',
    protected: 'state-protected'
  };

  return (
    <div className="badge">
      <BeaconGlyph name={glyphMap[status]} size="sm" />
      <span>{label}</span>
    </div>
  );
}
```

### Navigation Item

```tsx
function NavItem({ to, glyph, label }) {
  return (
    <Link to={to} className="nav-item">
      <BeaconGlyph name={glyph} size="sm" />
      <span>{label}</span>
    </Link>
  );
}

// Usage
<NavItem to="/home" glyph="navigation-home" label="Home" />
```

### Loading Indicator

```tsx
function LoadingGlyph() {
  return (
    <BeaconGlyph
      name="events-cycle"
      size="lg"
      className="spin"
    />
  );
}
```

---

## Troubleshooting

### Glyph Not Displaying

1. Check SVG path is correct
2. Verify CSS is loaded
3. Ensure glyph name is valid
4. Check browser console for errors

### Size Not Working

1. Verify CSS variables are loaded
2. Check for conflicting CSS
3. Ensure proper className application

### Dark Mode Not Working

1. Check `prefers-color-scheme` support
2. Verify CSS tokens are loaded
3. Test `.dark` class manually

---

## Support

- **Documentation:** `/docs` folder
- **Examples:** `/web-demo` and `/examples`
- **Issues:** GitHub Issues
- **Community:** MirrorDNA Discord

---

**Next Steps:** Explore the [Glyph Catalog](./glyph_catalog.md) for complete reference or [Usage Guidelines](./usage_guidelines.md) for design best practices.

# BeaconGlyphs Design System

Complete design system documentation for visual and symbolic language across the MirrorDNA ecosystem.

---

## Overview

BeaconGlyphs provides a unified visual language with:
- **25 production-ready glyphs** across 8 semantic categories
- **Vector SVG assets** for perfect scaling
- **CSS component library** for rapid integration
- **React components** with TypeScript support
- **Comprehensive design tokens** for consistency

---

## Design Tokens

### Sizing Scale

```css
--glyph-xs:   1rem    /* 16px */
--glyph-sm:   1.25rem /* 20px */
--glyph-md:   1.5rem  /* 24px - default */
--glyph-lg:   2rem    /* 32px */
--glyph-xl:   3rem    /* 48px */
--glyph-2xl:  4rem    /* 64px */
```

### Color Palette

#### Semantic Colors

```css
--color-primary:  #667eea  /* Brand / continuity */
--color-success:  #10b981  /* Verified states */
--color-warning:  #f59e0b  /* Caution / attention */
--color-error:    #ef4444  /* Errors / breaks */
--color-info:     #3b82f6  /* Information */
--color-muted:    #9ca3af  /* Disabled / secondary */
```

#### Category Colors (Optional)

```css
--continuity:  #667eea  /* Blue - connection, flow */
--identity:    #8b5cf6  /* Purple - unique, persona */
--state:       #10b981  /* Green - status, health */
--events:      #f59e0b  /* Amber - milestones */
--reflection:  #6366f1  /* Indigo - introspection */
--governance:  #8b5cf6  /* Purple - trust, balance */
--navigation:  #3b82f6  /* Blue - direction */
--data:        #06b6d4  /* Cyan - information flow */
```

### Spacing

```css
--glyph-gap-sm:  0.25rem /* 4px */
--glyph-gap-md:  0.5rem  /* 8px */
--glyph-gap-lg:  0.75rem /* 12px */
```

### Animation Timing

```css
--animation-fast:    150ms
--animation-normal:  300ms
--animation-slow:    500ms
```

---

## Typography Integration

### Body Text

Glyphs should maintain alignment with body text (1em = glyph height):

```css
body {
  font-size: 16px;
  line-height: 1.5;
}

.inline-glyph {
  height: 1em;  /* Matches font size */
  vertical-align: middle;
}
```

### Headings

Scale glyphs proportionally with headings:

```css
h1 { font-size: 2rem; }   → Glyph: size="xl"
h2 { font-size: 1.5rem; } → Glyph: size="lg"
h3 { font-size: 1.25rem; }→ Glyph: size="md"
```

---

## Component Patterns

### 1. Status Indicators

**Use case:** Show system or component state

```html
<!-- HTML + CSS -->
<div class="bg-status">
  <span class="bg-glyph bg-state-active bg-size-md"></span>
  <span>System Active</span>
  <span class="bg-status-dot bg-status-dot-success"></span>
</div>
```

```tsx
// React
<GlyphStatus
  glyphId="state.active"
  label="System Active"
  status="success"
/>
```

**When to use:**
- Dashboard health indicators
- Service status displays
- Real-time monitoring

---

### 2. Badges

**Use case:** Label items with glyph + text

```html
<!-- HTML + CSS -->
<span class="bg-badge bg-badge-success">
  <span class="bg-glyph bg-state-verified bg-size-sm"></span>
  <span>Verified</span>
</span>
```

```tsx
// React
<GlyphBadge
  glyphId="state.verified"
  label="Verified"
  variant="success"
/>
```

**When to use:**
- User profile badges
- Feature flags
- Entity properties

---

### 3. Event Logs

**Use case:** Visual markers in timelines and logs

```html
<div class="event-log">
  <span class="bg-glyph bg-events-start"></span> Session started
  <span class="bg-glyph bg-identity-dna"></span> Agent DNA loaded
  <span class="bg-glyph bg-state-verified"></span> Identity verified
</div>
```

**When to use:**
- Glyphtrail interaction lineages
- System event logs
- Audit trails

---

### 4. Navigation

**Use case:** Wayfinding and action buttons

```html
<button>
  <span class="bg-glyph bg-navigation-forward"></span>
  Continue
</button>
```

**When to use:**
- CTAs (call-to-action buttons)
- Breadcrumbs
- Pagination

---

### 5. Glyph Groups

**Use case:** Multiple related states

```tsx
// React
<GlyphGroup>
  <BeaconGlyph id="identity.dna" />
  <BeaconGlyph id="state.active" />
  <BeaconGlyph id="state.protected" />
</GlyphGroup>
```

**When to use:**
- Multi-state indicators
- Feature sets
- Capability lists

---

## Accessibility Guidelines

### Screen Readers

Always provide accessible labels:

```html
<!-- Good -->
<span class="bg-glyph bg-continuity-chain"
      role="img"
      aria-label="Continuity chain - unbroken session link">
</span>

<!-- Bad -->
<span class="bg-glyph bg-continuity-chain"></span>
```

### Keyboard Navigation

Make interactive glyphs keyboard accessible:

```html
<span class="bg-glyph bg-interactive"
      tabindex="0"
      role="button"
      aria-label="Toggle continuity view">
</span>
```

### Color Independence

Never use color alone to convey information:

```html
<!-- Good: Text + color + glyph -->
<div class="status-error">
  <span class="bg-glyph bg-events-warning"></span>
  <span>Error: Connection failed</span>
</div>

<!-- Bad: Color only -->
<div style="color: red;">Connection failed</div>
```

---

## Responsive Design

### Mobile

- Use **size="md"** (24px) as default for touch targets
- Increase gap between glyphs to **0.75rem** minimum
- Consider vertical stacking for glyph groups

```css
@media (max-width: 640px) {
  .bg-glyph-group {
    flex-direction: column;
    gap: 0.75rem;
  }
}
```

### Desktop

- Use **size="sm"** or **"md"** for compact layouts
- Utilize horizontal groups for efficiency
- Enable hover states for interactive elements

---

## Dark Mode

All glyphs automatically adapt to dark mode:

```css
@media (prefers-color-scheme: dark) {
  .bg-glyph {
    filter: brightness(1.2);
  }

  .bg-badge {
    background-color: #374151;
    color: #f3f4f6;
  }
}
```

**Manual dark mode:**

```html
<html class="dark">
  <!-- Add .dark class to html element -->
</html>
```

---

## Animation Guidelines

### When to Animate

✅ **DO animate:**
- Loading states (pulse)
- Active processes (spin)
- Attention-grabbing (bounce)
- State transitions (fade)

❌ **DON'T animate:**
- Static status indicators
- Navigation glyphs
- Inline text glyphs
- Accessibility concerns (respect `prefers-reduced-motion`)

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  .bg-animate-pulse,
  .bg-animate-spin,
  .bg-animate-bounce {
    animation: none;
  }
}
```

---

## Semantic Mapping

### Continuity Glyphs

| Glyph | Use When |
|-------|----------|
| `continuity.chain` | Showing established continuity |
| `continuity.link` | Individual session connections |
| `continuity.infinity` | Long-term persistence |
| `continuity.broken` | Discontinuity or breaks |

### Identity Glyphs

| Glyph | Use When |
|-------|----------|
| `identity.dna` | Agent identity, MirrorDNA signature |
| `identity.mask` | Persona switching, role indicators |
| `identity.diamond` | Unique identity markers |

### State Glyphs

| Glyph | Use When |
|-------|----------|
| `state.verified` | Confirmed, validated states |
| `state.active` | Running, operational systems |
| `state.protected` | Trust boundaries, security |
| `state.locked` | Access-controlled resources |

---

## Integration Checklist

- [ ] Import CSS: `import 'beaconglyphs/css/beaconglyphs.css'`
- [ ] Add SVG assets to public folder (for custom implementations)
- [ ] Set up design tokens in your CSS variables
- [ ] Configure dark mode support
- [ ] Test keyboard navigation for interactive glyphs
- [ ] Verify screen reader announcements
- [ ] Add `prefers-reduced-motion` support
- [ ] Test on mobile viewports
- [ ] Document glyph usage in your style guide

---

## Examples Gallery

### Dashboard Status Bar

```tsx
<div className="dashboard-status">
  <GlyphStatus glyphId="identity.dna" label="Alice" status="success" />
  <GlyphStatus glyphId="continuity.infinity" label="Continuous" status="success" />
  <GlyphStatus glyphId="state.protected" label="Secure" status="success" />
  <GlyphStatus glyphId="data.memory" label="3.2 GB" status="info" />
</div>
```

### Event Timeline

```tsx
<div className="timeline">
  <div className="timeline-item">
    <BeaconGlyph id="events.start" />
    <span>10:00 AM - Session started</span>
  </div>
  <div className="timeline-item">
    <BeaconGlyph id="reflection.mirror" />
    <span>10:15 AM - Reflection checkpoint</span>
  </div>
  <div className="timeline-item">
    <BeaconGlyph id="events.stop" />
    <span>11:00 AM - Session ended</span>
  </div>
</div>
```

### Agent Profile Card

```tsx
<div className="agent-card">
  <div className="agent-header">
    <BeaconGlyph id="identity.dna" size="xl" />
    <h2>Agent Alice</h2>
  </div>
  <div className="agent-badges">
    <GlyphBadge glyphId="state.verified" label="Verified" variant="success" />
    <GlyphBadge glyphId="state.protected" label="Trusted" variant="primary" />
    <GlyphBadge glyphId="governance.certified" label="Certified" variant="primary" />
  </div>
</div>
```

---

## Performance Considerations

### SVG Loading

- SVGs are lightweight (< 1KB each)
- Use CSS background-image for simple displays
- Use inline SVG for dynamic coloring
- Consider sprite sheets for large-scale use

### Bundle Size

```
Glyph registry JSON:  ~15 KB
All SVG files:        ~25 KB
CSS library:          ~8 KB (2 KB gzipped)
React components:     ~12 KB (4 KB gzipped)
-----------------------------------
Total:                ~60 KB (~7 KB gzipped)
```

### Loading Strategy

```tsx
// Lazy load React components
const BeaconGlyph = lazy(() => import('beaconglyphs/react'));

// Or import only what you need
import { BeaconGlyph } from 'beaconglyphs/react/BeaconGlyph';
```

---

## Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **IE 11:** SVG support via polyfills
- **Mobile:** iOS 12+, Android 5+

---

## Resources

- [Glyph Catalog](../catalog.md) - Visual reference of all glyphs
- [Architecture Guide](../architecture.md) - Technical implementation
- [Usage Guide](../usage.md) - Integration patterns
- [React Components README](../../components/react/README.md) - React API docs

---

**BeaconGlyphs Design System v1.0.0** - Making continuity visible through design.

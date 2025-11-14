# BeaconGlyphs Usage Guidelines

Sizing, spacing, color, and visual consistency rules for BeaconGlyphs.

---

## At a Glance

**Quick Rules:**
- **Standard sizes:** xs(16px), sm(24px), md(32px), lg(48px), xl(64px), 2xl(80px)
- **Default spacing:** 8px gap between glyph and text
- **Contrast ratio:** ≥4.5:1 for WCAG AA compliance
- **Minimum touch target:** 44×44px for interactive glyphs
- **Never:** Distort aspect ratios, use below 16px, place on busy backgrounds

**Remember:** Maintain square proportions, provide alt text, test in light and dark modes.

---

## Sizing

### Standard Sizes

Use predefined size variants for consistency:

```
xs:   16px (1rem)   - Inline text, tight spaces
sm:   24px (1.5rem) - Body text, compact UI
md:   32px (2rem)   - Standard UI elements (default)
lg:   48px (3rem)   - Headers, emphasis
xl:   64px (4rem)   - Large displays, heroes
2xl:  80px (5rem)   - Extra large, marketing
```

**DO:**
- Use `md` (32px) as default for most UI elements
- Scale glyphs proportionally with surrounding text
- Use `sm` for dense layouts
- Use `lg` or larger for standalone icons

**DON'T:**
- Use arbitrary sizes like 27px or 33px
- Mix size variants within the same visual grouping
- Scale below `xs` (16px) - becomes illegible

### Custom Sizing

For specific needs:

```tsx
// React
<BeaconGlyph name="mirrordna" size={40} />

// CSS
.custom-glyph {
  width: 40px;
  height: 40px;
}
```

---

## Spacing

### Glyph-to-Text Spacing

Maintain comfortable breathing room between glyphs and text:

```
sm gap:  4px  (0.25rem) - Tight, inline
md gap:  8px  (0.5rem)  - Standard (default)
lg gap:  12px (0.75rem) - Loose, emphasis
xl gap:  16px (1rem)    - Extra loose
```

**Example:**
```html
<!-- Good -->
<span class="badge">
  <BeaconGlyph name="state-verified" size="sm" />
  <span style="margin-left: 8px;">Verified</span>
</span>

<!-- Bad -->
<span class="badge">
  <BeaconGlyph name="state-verified" size="sm" /><span>Verified</span>
</span>
```

### Glyph-to-Glyph Spacing

When displaying multiple glyphs:

```
Inline:   4-8px  - Status indicators, compact groups
Grouped:  8-12px - Related glyphs
Separate: 16px+  - Distinct concepts
```

---

## Color Usage

### Brand Glyphs

Brand glyphs should use:
1. **Primary:** Brand gradient or single brand color
2. **Monochrome:** Black/white for versatility
3. **Current color:** Inherits text color

**DO:**
```css
.brand-glyph {
  color: #667eea; /* Primary brand color */
}
```

**DON'T:**
- Apply rainbow colors to brand glyphs
- Use low-contrast colors (fails accessibility)

### Symbolic Glyphs

Semantic coloring for symbolic glyphs:

```
Continuity:  Blue (#667eea)    - Connection, flow
Identity:    Purple (#8b5cf6)  - Unique, persona
State:       Green (#10b981)   - Success, health
Events:      Amber (#f59e0b)   - Activity, attention
Reflection:  Indigo (#6366f1)  - Introspection
Governance:  Purple (#8b5cf6)  - Trust, balance
Navigation:  Blue (#3b82f6)    - Direction
Data:        Cyan (#06b6d4)    - Information
```

**Context-aware coloring:**
```
Success:  Green (#10b981)
Warning:  Amber (#f59e0b)
Error:    Red (#ef4444)
Info:     Blue (#3b82f6)
Muted:    Gray (#9ca3af)
```

---

## Background Rules

### Light Backgrounds

**DO:**
- Use dark glyphs on light backgrounds (contrast ratio ≥ 4.5:1)
- Test with WCAG contrast checkers

**DON'T:**
- Place light glyphs on white backgrounds
- Use low-opacity glyphs as primary indicators

### Dark Backgrounds

**DO:**
- Use light or colored glyphs on dark backgrounds
- Increase brightness slightly for better visibility

**DON'T:**
- Use dark glyphs on dark backgrounds
- Over-saturate colors in dark mode

### Colored Backgrounds

**Avoid** placing glyphs on:
- Busy background images
- Gradients that reduce contrast
- Patterns that create visual noise

**If necessary:**
- Add subtle backdrop or halo
- Use solid color overlay
- Ensure contrast ratio meets accessibility standards

---

## Alignment

### Vertical Alignment

Glyphs should align with surrounding text:

```css
.glyph-inline {
  vertical-align: middle; /* Default */
}

/* Alternatives based on context */
vertical-align: baseline;   /* Align with text baseline */
vertical-align: text-bottom; /* Bottom of text */
vertical-align: top;        /* Top of container */
```

### Horizontal Alignment

In groups or layouts:

```
Left:   For lists, menus, left-to-right flow
Center: For isolated icons, balanced layouts
Right:  For trailing indicators, badges
```

---

## DO's and DON'Ts

### ✅ DO

- **Use standard sizes** (xs, sm, md, lg, xl, 2xl)
- **Maintain consistent spacing** (8px default gap)
- **Ensure high contrast** (≥4.5:1 for normal text)
- **Provide alt text** for accessibility
- **Use semantic colors** for symbolic glyphs
- **Align with text baseline** for inline glyphs
- **Test in light and dark modes**
- **Keep glyphs crisp** at all sizes

### ❌ DON'T

- **Distort aspect ratios** (always maintain square proportions)
- **Use glyphs smaller than 16px** (illegible)
- **Mix arbitrary sizes** in the same context
- **Apply heavy effects** (blurs, shadows, excessive gradients)
- **Stretch or squash** SVGs
- **Use low-contrast colors** on backgrounds
- **Omit accessibility labels**
- **Place on busy backgrounds** without contrast treatment

---

## Responsive Considerations

### Mobile

- **Minimum touch target:** 44x44px for interactive glyphs
- **Default size:** `md` (32px) or larger
- **Spacing:** Increase gaps to 12px minimum

### Desktop

- **Standard size:** `md` (32px)
- **Compact layouts:** `sm` (24px) acceptable
- **Spacing:** 8px standard gap

### Print

- **Minimum size:** 24px equivalent (0.33 inches at 72dpi)
- **Use black/white** for clarity
- **Ensure sharp rendering** at print resolution

---

## Accessibility

### Screen Readers

Always provide meaningful labels:

```tsx
<BeaconGlyph
  name="state-verified"
  title="Verification status: Verified"
/>
```

### Keyboard Navigation

For interactive glyphs:

```tsx
<BeaconGlyph
  name="navigation-home"
  onClick={handleClick}
  tabIndex={0}
  role="button"
  aria-label="Return to home"
/>
```

### Color Blindness

- **Never use color alone** to convey information
- **Pair glyphs with text** labels
- **Use shapes and patterns** for differentiation

---

## Examples

### Good Usage

```tsx
// Status indicator with proper spacing and sizing
<div className="status">
  <BeaconGlyph name="state-active" size="md" />
  <span style={{ marginLeft: '8px' }}>System Active</span>
</div>

// Navigation with semantic sizing
<nav>
  <BeaconGlyph name="navigation-home" size="sm" />
  <span>Home</span>
</nav>

// Badge with consistent alignment
<div className="badge">
  <BeaconGlyph name="state-verified" size="sm" />
  <span>Verified</span>
</div>
```

### Bad Usage

```tsx
// ❌ No spacing
<div><BeaconGlyph name="state-active" />System Active</div>

// ❌ Inconsistent sizes
<div>
  <BeaconGlyph name="state-active" size="lg" />
  <BeaconGlyph name="state-verified" size={27} />
</div>

// ❌ Too small for touch
<button>
  <BeaconGlyph name="navigation-home" size="xs" /> {/* 16px - too small */}
</button>
```

---

## Platform-Specific Notes

### Web

- Use SVG for scalability
- Ensure proper `viewBox` attribute
- Optimize file size (compress SVGs)

### iOS

- Provide @2x and @3x assets if using PNG fallbacks
- Use SF Symbols style if integrating with system icons
- Ensure proper tinting support

### Android

- Provide vector drawables (XML)
- Use adaptive icons where appropriate
- Support material design sizing

---

**Remember:** Consistency is key. When in doubt, refer to these guidelines and test in context.

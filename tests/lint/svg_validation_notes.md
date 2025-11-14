# SVG Validation Notes

Guidelines and manual checks for ensuring SVG quality in BeaconGlyphs.

---

## Required Attributes

Every SVG must have:

1. **`xmlns` attribute**
   ```xml
   <svg xmlns="http://www.w3.org/2000/svg">
   ```

2. **`viewBox` attribute**
   ```xml
   <svg viewBox="0 0 48 48">
   ```
   - Standard viewBox: `0 0 48 48` (48×48 artboard)
   - Maintains aspect ratio when scaled

3. **`width` and `height` attributes**
   ```xml
   <svg width="48" height="48">
   ```
   - Provides default rendering size
   - Can be overridden by CSS

4. **Accessibility elements**
   ```xml
   <title>Glyph Name</title>
   <desc>Detailed description of the glyph</desc>
   ```

---

## Structural Requirements

### No Embedded Raster Images

❌ **Don't include:**
- `<image>` tags pointing to PNG/JPG
- Base64-encoded raster images
- External image references

✅ **Do use:**
- Pure vector paths
- SVG primitives (circle, rect, path, etc.)

### Minimal Path Complexity

- Optimize paths to reduce file size
- Remove unnecessary precision (2 decimal places max)
- Use simple shapes where possible

**Good:**
```xml
<circle cx="24" cy="24" r="10"/>
```

**Avoid:**
```xml
<path d="M24.000001,14.000000 C18.477153,14.000000 14.000000,18.477153 14.000000,24.000000 ..."/>
```

### No Inline Styles

❌ **Don't use:**
```xml
<path style="fill:#667eea; stroke:red;" />
```

✅ **Do use:**
```xml
<path fill="currentColor" stroke="currentColor" />
```

Using `currentColor` allows CSS to control the color.

---

## Optimization Checklist

### Before Committing SVG

- [ ] Viewbox is set to `0 0 48 48`
- [ ] Width and height are `48`
- [ ] Contains `<title>` element
- [ ] Contains `<desc>` element
- [ ] No embedded raster images
- [ ] No inline styles (use fill="currentColor")
- [ ] Paths are optimized (use SVGO or similar)
- [ ] File size < 5KB
- [ ] Renders correctly at 16px, 32px, 48px
- [ ] Visible on both light and dark backgrounds

---

## File Naming

**Format:** `kebab-case.svg`

**Examples:**
- ✅ `mirrordna.svg`
- ✅ `continuity-chain.svg`
- ✅ `state-verified.svg`
- ❌ `MirrorDNA.svg` (PascalCase)
- ❌ `continuity_chain.svg` (snake_case)
- ❌ `state verified.svg` (spaces)

---

## Visual Consistency

### Stroke Width

For consistency across glyphs:
- Default stroke: `2px`
- Thick elements: `2.5px`
- Thin details: `1px`

### Aspect Ratio

All glyphs must be **square** (1:1 aspect ratio)
- Artboard: 48×48px
- Content centered within artboard
- Padding: ~4px from edges (content fits in 40×40 inner area)

### Symbolic Elements

Glyphs should be:
- Recognizable at small sizes (16px)
- Clear and uncluttered
- Consistent visual weight
- Aligned to pixel grid where possible

---

## Color Guidelines

### Use `currentColor`

```xml
<svg>
  <path fill="currentColor" />
  <circle stroke="currentColor" />
</svg>
```

This allows CSS to control the color:

```css
.glyph {
  color: #667eea;
}
```

### Opacity for Layering

Use opacity for depth, not color:

```xml
<circle fill="currentColor" opacity="0.3"/>
<circle fill="currentColor" opacity="1"/>
```

---

## Testing Requirements

### Manual Visual Inspection

Test each SVG:

1. **At multiple sizes**
   - 16px (minimum)
   - 24px (small)
   - 32px (default)
   - 48px (large)
   - 64px (extra large)

2. **On different backgrounds**
   - White (#ffffff)
   - Light gray (#f3f4f6)
   - Dark gray (#374151)
   - Black (#000000)

3. **With different colors**
   - Brand primary (#667eea)
   - Success green (#10b981)
   - Warning amber (#f59e0b)
   - Error red (#ef4444)

### Browser Compatibility

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Validation Tools

**Recommended tools:**

1. **SVGO** - SVG optimizer
   ```bash
   npm install -g svgo
   svgo input.svg -o output.svg
   ```

2. **SVG Lint** - Accessibility checker
   ```bash
   npm install -g svglint
   svglint input.svg
   ```

3. **Manual checkers:**
   - https://validator.w3.org/ (HTML/SVG validation)
   - https://jakearchibald.github.io/svgomg/ (visual SVGO)

---

## Common Issues & Fixes

### Issue: SVG not displaying

**Cause:** Missing xmlns or viewBox
**Fix:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
```

### Issue: SVG appears black/wrong color

**Cause:** Hardcoded fill color
**Fix:** Change `fill="#667eea"` to `fill="currentColor"`

### Issue: SVG too large (>10KB)

**Cause:** Unoptimized paths, excessive precision
**Fix:** Run through SVGO:
```bash
svgo --multipass input.svg
```

### Issue: SVG unclear at small sizes

**Cause:** Too much detail, thin strokes
**Fix:**
- Simplify shapes
- Increase stroke width to 2px minimum
- Remove fine details

### Issue: SVG not centered

**Cause:** Content not aligned in viewBox
**Fix:** Adjust path coordinates to center in 48×48 artboard

---

## Automated Checks (Future)

Consider implementing:

1. **Pre-commit hooks** - Validate SVGs before commit
2. **CI/CD tests** - Automated SVG validation
3. **Visual regression tests** - Compare renders against baselines

**Example pre-commit hook:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

for svg in $(git diff --cached --name-only --diff-filter=ACM | grep '\.svg$'); do
  # Check for viewBox
  if ! grep -q 'viewBox="0 0 48 48"' "$svg"; then
    echo "Error: $svg missing viewBox"
    exit 1
  fi

  # Check for xmlns
  if ! grep -q 'xmlns="http://www.w3.org/2000/svg"' "$svg"; then
    echo "Error: $svg missing xmlns"
    exit 1
  fi
done
```

---

## Summary

**Every SVG must:**
1. Have proper xmlns and viewBox
2. Include title and desc for accessibility
3. Use currentColor for theming
4. Be optimized (< 5KB)
5. Render clearly at all sizes
6. Follow naming conventions
7. Be manually tested

**Use validation tools** and follow this checklist before committing any SVG to the repository.

# BeaconGlyphs Interactive Web Demo

Beautiful, interactive showcase of all BeaconGlyphs with live examples and usage patterns.

## Quick Start

### Option 1: Direct File Open

```bash
cd web-demo
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

### Option 2: Local Server (Recommended)

```bash
# From repository root
python -m http.server 8000

# Then visit:
# http://localhost:8000/web-demo/
```

Or use any static file server:
```bash
# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## What's Included

### Features

- **Complete Glyph Gallery** - Browse all 32 glyphs organized by category
- **Interactive Cards** - Click glyphs to copy code snippets
- **Live Examples** - See glyphs in action with real use cases
- **Status Indicators** - Example status bars and badges
- **Timeline Visualization** - Session event timelines
- **Event Log Demo** - Styled log output with glyph markers
- **Dark Mode Support** - Toggle between light and dark themes

### Categories Shown

- Continuity (session persistence)
- Identity (agent personas)
- State (system status)
- Events (milestones)
- Reflection (self-reference)
- Governance (trust, compliance)
- Navigation (movement, direction)
- Data (information, storage)

## Files

- `index.html` - Main demo page with all showcases
- `app.js` - JavaScript for interactive features
- `styles.css` - Styling and layout

## Use Cases Demonstrated

1. **Status Indicators** - Show system health with state glyphs
2. **Event Logs** - Mark log entries with semantic glyphs
3. **Session Timelines** - Visualize interaction sequences
4. **Identity Badges** - Display agent information
5. **Continuity Health** - Track session linkage

## Customization

The demo uses CSS variables for easy theming:

```css
:root {
  --glyph-primary: #667eea;
  --glyph-success: #10b981;
  --glyph-warning: #f59e0b;
  --glyph-error: #ef4444;
}
```

Override these in your own stylesheets to match your brand.

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Next Steps

After exploring the demo:

1. Read the [Glyph Catalog](../docs/glyph_catalog.md) for complete reference
2. Check [Integration Guide](../docs/integration_guide.md) for your framework
3. Review [Usage Guidelines](../docs/usage_guidelines.md) for design standards
4. Explore [Examples](../examples/README.md) for code patterns

---

**Live Demo Link:** [View on GitHub Pages](#) (if deployed)

**Questions?** See the main [README](../README.md) or open an issue.
